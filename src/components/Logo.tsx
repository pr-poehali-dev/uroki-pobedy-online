import { useEffect, useState } from "react";
import { CURRENT_YEAR } from "@/lib/constants";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="relative flex items-center">
        <div className="font-bold text-2xl text-primary">
          УРОКИ ПОБЕДЫ
        </div>
        <div className="ml-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-bold">
          {CURRENT_YEAR}
        </div>
        {isOnline ? (
          <div className="ml-2 text-green-600 animate-pulse flex items-center">
            <span className="h-2 w-2 bg-green-600 rounded-full mr-1"></span>
            <span className="text-xs">онлайн</span>
          </div>
        ) : (
          <div className="ml-2 text-red-600 flex items-center">
            <span className="h-2 w-2 bg-red-600 rounded-full mr-1"></span>
            <span className="text-xs">офлайн</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
