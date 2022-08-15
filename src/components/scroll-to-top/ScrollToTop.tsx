import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";

type Props = {
    children: ReactNode;
}
const ScrollToTop: React.FC<Props> = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{children}</>
};

export default ScrollToTop;