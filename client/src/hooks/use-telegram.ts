import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        expand: () => void;
        ready: () => void;
        close: () => void;
        MainButton: {
          text: string;
          color: string;
          textColor: string;
          isVisible: boolean;
          isActive: boolean;
          show: () => void;
          hide: () => void;
          onClick: (cb: () => void) => void;
          offClick: (cb: () => void) => void;
          showProgress: (leaveActive: boolean) => void;
          hideProgress: () => void;
        };
        BackButton: {
          isVisible: boolean;
          show: () => void;
          hide: () => void;
          onClick: (cb: () => void) => void;
          offClick: (cb: () => void) => void;
        };
        initDataUnsafe?: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
          };
        };
        themeParams: Record<string, string>;
      };
    };
  }
}

export function useTelegram() {
  const [user, setUser] = useState<Window['Telegram']['WebApp']['initDataUnsafe']['user'] | null>(null);
  const tg = window.Telegram?.WebApp;

  useEffect(() => {
    if (tg) {
      tg.ready();
      tg.expand();
      setUser(tg.initDataUnsafe?.user || null);
    }
  }, [tg]);

  const close = () => {
    tg?.close();
  };

  return {
    tg,
    user,
    close,
    MainButton: tg?.MainButton,
    BackButton: tg?.BackButton,
  };
}
