import { MouseEventHandler, ReactNode } from "react";

import "./ButtonLink.css";

function ButtonLink({ className = "", onClick, children }: {
    className?: string;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement | MouseEvent>
}) {
    return (
        <button
            className={"button-link " + className}
            type={"button"}
            onClick={onClick}>
            {children}
        </button>);
}


export default ButtonLink;