import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface SlotProps {
    name: string;
    children: ReactNode;
}

export default function Slot({ name, children }: SlotProps) {
    const [target, setTarget] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const el = document.getElementById(name);
        setTarget(el);
    }, [name]);

    if (!target) return null;
    return createPortal(children, target);
}