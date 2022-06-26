import { ReactNode } from "react";

export function Sidebar({
    children
}: { children: ReactNode }){
    return <aside className="w-full md:w-[348px] bg-gray-700 p-6 border-l border-gray-600 ">
        <span className="font-bold text-2xl pb-6 mb-6 borber-b border-gray-500 block">
            Cronograma de aulas
        </span>

        <div className="flex flex-col gap-8">
            {children}
        </div>

    </aside>
}
