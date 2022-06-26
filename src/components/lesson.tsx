import {
    CheckCircle,
    Lock
} from 'phosphor-react';
import { isPast, format } from "date-fns";
import { ILesson } from '../interfaces/lesson';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';

export function Lesson({
    availableAt,
    slug,
    title,
    lessonType
}: Omit<ILesson, "id">){
    const { slug: slugFromUrl } = useParams<{ slug: string }>();

    const isLessonAvailable = isPast(availableAt);
    const availableAtFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })
    const isActiveLesson = slugFromUrl === slug;

    return <Link to={`/event/lesson/${slug}`} className="group">
        <span className="text-gray-300">
            {availableAtFormatted}
        </span>

        <div className={`
            rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 
            ${isActiveLesson ? 'bg-green-500' : ''}
        `}>
            <header className="flex items-center justify-between">
                {isLessonAvailable ? (
                    <span className={`
                        text-sm font-medium flex items-center gap-2
                        ${isActiveLesson ? "text-white" : "text-blue-500"}
                    `}>
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

            <strong className={`
                mt-5 block
                ${isActiveLesson ? "text-white" : "text-gray-200"}
            `}>
                {title}
            </strong>
        </div>
    </Link>
}