import { useState, useEffect } from "react";

export interface IUseWindowSize {
    width: number | undefined,
    height: number | undefined
}

/*
    gets the device window size
*/
export function useWindowSize() {

    const [windowSize, setWindowSize] = useState<IUseWindowSize>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {

        const handleResize = () => {

            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}