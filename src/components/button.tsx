import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    layout: "primary" | "secondary";
}

export function Button({
    type,
    children,
    layout,
    ...rest
}: IButtonProps){
    return (
        <button 
            type={type ?? "button"} 
            className={`button-${layout}`}
            {...rest}
        >
            {children}
        </button>
    )
}