import React, { useState, useEffect } from 'react';
import { Shield, Check } from 'lucide-react';
import { Button } from '../ui/Button';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lyonskye_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('lyonskye_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50 bg-[#0E213E] border border-[#23557F] rounded-lg p-5 shadow-2xl text-slate-200 text-xs backdrop-blur-md animate-fadeIn">
      <div className="flex items-start gap-3">
        <Shield className="w-5 h-5 text-[#D99A27] shrink-0 mt-0.5" />
        <div className="space-y-3">
          <p className="leading-relaxed">
            We use essential technical cookies to ensure optimal performance, security, and session navigation across our corporate maritime platform.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="primary" size="sm" onClick={acceptCookies} icon={<Check className="w-3.5 h-3.5" />}>
              Accept Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
