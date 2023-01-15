import { ReactNode } from "react";
import "./Box.css";

function Box({ className = "", children }: {
    className?: string;
    children: ReactNode;
}) {
    return (
        <div className={"box " + className}>
            {children}
        </div>);
}


export default Box;