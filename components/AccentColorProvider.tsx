"use client";
import { useEffect } from "react";
import { getPageColor, initializeColor } from "@/lib/colorUtils";

export default function AccentColorProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            initializeColor();
            const setAccent = () => {
                document.documentElement.style.setProperty('--accent-color', getPageColor());
            };
            setAccent();
            window.addEventListener('storage', setAccent);
            window.addEventListener('colorChange', setAccent);
            return () => {
                window.removeEventListener('storage', setAccent);
                window.removeEventListener('colorChange', setAccent);
            };
        }
    }, []);
    return <>{children}</>;
}
