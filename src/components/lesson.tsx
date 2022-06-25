import {
    CheckCircle,
    Lock
} from 'phosphor-react';
import { isPast, format } from "date-fns";
import { ILesson } from '../interfaces/lesson';
import ptBR from 'date-fns/locale/pt-BR';

export function Lesson({
    availableAt,
    slug,
    title,
    lessonType
}: Omit<ILesson, "id">){
    const isLessonAvailable = isPast(availableAt);
    const availableAtFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    return <a href="#">
        <span className="text-gray-300">
            {availableAtFormatted}
        </span>

        <div className="rounded border border-gray-500 p-4 mt-2">
            <header className="flex items-center justify-between">
                {isLessonAvailable ? (
                    <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                        <CheckCircle  size={20}/>
                        Conteúdo liberado
                    </span>
                ) : (
                    <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                        <Lock  size={20}/>
                        Em breve
                    </span>
                )}
                <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                    {lessonType === "live" ? "AO VIVO" : "AULA PRÁTICA"}
                </span>
            </header>

            <strong className="text-gray-200 mt-5 block">
                {title}
            </strong>
        </div>
    </a>
}