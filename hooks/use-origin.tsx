
import { useState, useEffect } from 'react';

export const useOrgin = () => {
    const [isMounted, setIsMounted] = useState(false);
    const orgin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return '';

    return orgin;

}
