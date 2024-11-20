"use client"
import { useEffect } from 'react';

declare global {
    interface Window {
      chatwootSDK?: any;
    }
  }

const Chatwoot = () => {
  useEffect(() => {
    const loadChatwootScript = () => {
      const BASE_URL = 'https://gruporahcc.hueltonsites.com';
      const script = document.createElement('script');
      script.src = `${BASE_URL}/packs/js/sdk.js`;
      script.defer = true;
      script.async = true;

      script.onload = () => {
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken: 'feEgHkAfwF2SANzj9AycUSev',
            baseUrl: BASE_URL
          });
        }
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    };

    loadChatwootScript();
  }, []);

  return null; 
};

export default Chatwoot;
