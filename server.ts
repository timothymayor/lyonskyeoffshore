import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Basic in-memory rate limiter for enquiries
  const ipSubmissionMap = new Map<string, number>();

  // API Health check
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({
      status: 'ok',
      company: 'Lyonskye Offshore Marine Ltd.',
      timestamp: new Date().toISOString()
    });
  });

  // Production-grade Enquiry Form Submission Handler
  app.post('/api/enquiry', (req: Request, res: Response) => {
    try {
      const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
      const now = Date.now();
      const lastSubmit = ipSubmissionMap.get(clientIp) || 0;

      // Rate limiting: 1 submission per 15 seconds per IP
      if (now - lastSubmit < 15000) {
        return res.status(429).json({
          success: false,
          message: 'Rate limit exceeded. Please wait a few seconds before submitting another enquiry.'
        });
      }

      const { fullName, email, serviceRequired, message, website_hp, company, phone, vesselOrProject } = req.body;

      // Honeypot anti-spam check
      if (website_hp) {
        return res.json({
          success: true,
          message: 'Thank you. Your enquiry has been received.'
        });
      }

      // Input Validation
      if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
        return res.status(400).json({ success: false, message: 'Full Name is required.' });
      }

      if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ success: false, message: 'A valid email address is required.' });
      }

      if (!message || typeof message !== 'string' || message.trim().length < 5) {
        return res.status(400).json({ success: false, message: 'Operational message is required.' });
      }

      ipSubmissionMap.set(clientIp, now);

      console.log(`[Lyonskye Enquiry Received] From: ${fullName} (${email}), Service: ${serviceRequired}, Company: ${company || 'N/A'}`);

      return res.status(200).json({
        success: true,
        message: 'Thank you. Your enquiry has been received. A member of the Lyonskye team will review your request and respond shortly.'
      });
    } catch (err) {
      console.error('Error processing enquiry:', err);
      return res.status(500).json({
        success: false,
        message: 'Internal server error processing enquiry.'
      });
    }
  });

  // Vite development middleware or static serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Lyonskye Offshore Marine Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
