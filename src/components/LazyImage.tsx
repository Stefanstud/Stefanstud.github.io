import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    className = "",
    placeholder = "/icons/placeholder.svg"
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '100px' // Increased for better UX
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true); // Show error state
    };

    return (
        <div className="relative overflow-hidden">
            {!isLoaded && (
                <div className={`${className} bg-muted animate-pulse flex items-center justify-center`}>
                    <div className="w-8 h-8 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin" />
                </div>
            )}
            {hasError ? (
                <div className={`${className} bg-muted flex items-center justify-center text-muted-foreground`}>
                    <span className="text-sm">Image unavailable</span>
                </div>
            ) : (
                <img
                    ref={imgRef}
                    src={isInView ? src : placeholder}
                    alt={alt}
                    className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={handleLoad}
                    onError={handleError}
                    loading="lazy"
                    decoding="async"
                />
            )}
        </div>
    );
};

export default LazyImage;
