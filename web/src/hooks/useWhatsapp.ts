// useWhatsApp.ts
import { useCallback } from 'react';

export const useWhatsApp = () => {
  const phoneNumber = '5583996157313';
  const defaultMessage = 'Olá, gostaria de tranformar minha ideia em realidade digital!';

  const handleWhatsAppClick = useCallback((customMessage?: string) => {
    const cleanedPhone = phoneNumber.replace(/\D/g, '');
    const finalMessage = customMessage?.trim() || defaultMessage;
    const whatsappUrl = `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(finalMessage)}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return {
    onClick: handleWhatsAppClick,
    whatsappUrl: `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMessage)}`
  };
};