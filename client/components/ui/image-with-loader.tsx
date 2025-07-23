import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  fallbackSrc?: string;
  objectFit?: 'cover' | 'contain';
}

export function ImageWithLoader({ src, alt, className, onError, fallbackSrc, objectFit = 'cover' }: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const defaultFallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjNmNGY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTAwIiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD4KPC9zdmc+Cg==';

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    setHasError(true);
    if (onError) {
      onError(e);
    } else {
      (e.target as HTMLImageElement).src = fallbackSrc || defaultFallback;
    }
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="relative">
            {/* Spinning Ring */}
            <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
            
            {/* Pulsating Dots */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={cn(
          `w-full h-full object-${objectFit} transition-opacity duration-300`,
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={handleLoad}
        onError={handleError}
      />

      {/* Loading overlay with shimmer effect */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse"></div>
        </div>
      )}
    </div>
  );
}
