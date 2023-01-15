import { MouseEventHandler, ReactNode } from "react";

import "./Button.css";

function Button({ className = "", onClick, type = "button", children }: {
    className?: string;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement | MouseEvent>
    type?: "button" | "submit"
}) {
    return (
        <button
            className={"button " + className}
            type={type}
            onClick={onClick}>
            {children}
        </button>);
}


export default Button;