import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    state: string | number;
    setState: Function;
}

export function Input({
    state,
    setState,
    ...rest
}: IInputProps){
    return (
        <input 
            className="bg-gray-900 rounded px-5 h-14"
            value={state}
            onChange={event => setState(event.target.value)}
            {...rest}
        />
    )
}