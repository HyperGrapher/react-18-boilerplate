import { useState, useCallback, SetStateAction } from "react";

export const useClientRect = () => {
    const [rect, setRect] = useState(null);
    const ref = useCallback((node: { getBoundingClientRect: () => SetStateAction<null>; } | null) => {
        if (node !== null) {
            setRect(node.getBoundingClientRect());
        }
    }, []);
    return [rect, ref];
}
