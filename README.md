# Lyonskye Offshore Marine Ltd. Corporate Website

A premium, production-ready corporate website for **Lyonskye Offshore Marine Ltd.**, a certified Nigerian Maritime Administration and Safety Agency (NIMASA) company providing marine, shipping, offshore logistics, vessel support, crew supply, chandling, and energy-sector maritime services.

## Brand Identity & Design Concept: "The Naval Engineering Standard"

- **Primary Brand Color**: Lyonskye Navy (`#0E213E`)
- **Secondary Colors**: Ocean Blue (`#163A63`), Marine Blue (`#23557F`), Steel Grey (`#717D8D`), Silver Mist (`#A9B3BE`), Cloud Grey (`#DFE5EA`), White (`#FFFFFF`)
- **Accent Color**: Safety / Energy Amber (`#D99A27`)
- **Typography**: Cormorant Garamond (Editorial Display Headings) & Inter (UI, Labels, Technical Content)
- **Primary Brand Statement**: "ENGINEERING CONFIDENCE OFFSHORE."
- **Supporting Message**: "Marine Capability. Energy Expertise. Operational Excellence."

---

## Technology Stack

- **Framework**: React 19 + TypeScript + Vite + Express
- **Styling**: Tailwind CSS v4 + `@theme` brand token configuration
- **Icons**: Lucide React
- **Animations**: CSS transitions + Motion / SVG wave paths
- **Backend Service**: Express API (`/api/enquiry`) with input validation, rate limiting, and honeypot protection

---

## Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/lyonskye-offshore-marine/lyonskye-offshore-marine.git
   cd lyonskye-offshore-marine
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   The dev server will start on `http://localhost:3000`.

5. **Typecheck & Lint**:
   ```bash
   npm run typecheck
   ```

6. **Build for Production**:
   ```bash
   npm run build
   ```

7. **Start Production Server**:
   ```bash
   npm run start
   ```

---

## Deployment Strategies

### Target 1: Vercel Deployment

1. Connect the GitHub repository `lyonskye-offshore-marine` to Vercel.
2. Build Settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Set environment variables in Vercel project settings (`CONTACT_EMAIL`, `APP_URL`).

### Target 2: cPanel Deployment (Static Export)

1. Run the static production build:
   ```bash
   npm run build
   ```
2. Compress the contents of the `dist/` directory into a `.zip` archive.
3. Log into cPanel File Manager and navigate to `public_html/`.
4. Upload and extract the `.zip` archive into `public_html/`.
5. Verify `.htaccess` redirect rules for SPA routing fallback to `index.html`.

---

## Contact Form & API Configuration

Enquiries submitted via the website forms are validated client-side and posted to `/api/enquiry`.
The backend handler:
- Validates required fields (`fullName`, `email`, `message`)
- Enforces honeypot check (`website_hp`) to prevent spam
- Implements IP rate-limiting (1 request per 15s)
- Can be easily connected to transactional email providers (Resend, SendGrid, SMTP, or enterprise CRM / HubSpot).

---

## License

Copyright &copy; 2026 Lyonskye Offshore Marine Ltd. All Rights Reserved.
Licensed under Apache-2.0.
