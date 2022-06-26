import { Image, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { Button } from "./button";
import { Card } from "./card";
import { YoutubePlayer } from "./youtubePlayer";

interface IVideoProps{
    slug: string;
}

export function Video({
    slug
}: IVideoProps){
    const {data} = useGetLessonBySlugQuery({
        variables: {
            slug
        }
    });

    if(!data || !data.lesson)
        return <div className="flex-1">
            Carregando...
        </div>

    return <div className="flex-1">
        <div className="bg-black flex justify-center">
            <div className="h-full w-full max-w-[1100px] max-h[60vh] aspect-video">
                <YoutubePlayer videoId={data.lesson.videoId} />
            </div>
        </div>

        <div className="p-8 max-w[1100px] mx-auto">
            <div className="flex items-start gap-16 flex-col md:flex-row">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">
                        {data.lesson.title}
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        {data.lesson.description}
                    </p>

                    {data.lesson.teacher && (
                        <div className="flex items-center gap-4 mt-6">
                            <img 
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
                                src={data.lesson.teacher.avatarURL} 
                                alt={data.lesson.teacher.name} 
                            />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">
                                    {data.lesson.teacher.name} 
                                </strong>
                                <span className="text-gray-200 text-sm block">
                                    {data.lesson.teacher.bio}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-4">
                    <Button layout="primary">
                        <Lightning size={24} />
                        Acesse o Desafio
                    </Button>

                    <Button layout="secondary">
                        <DiscordLogo size={24} />
                        Comunidade do Discord
                    </Button>
                </div>
            </div>

            <div className="gap-8 mt-12 grid  grid-cols-1 md:grid-cols-2">
                <Card 
                   Icon={FileArrowDown} 
                   title="Material Complementar"
                   description="Acesse o material complementar para acelerar o seu desenvolvimento"
                />

                <Card 
                   Icon={Image} 
                   title="Wallpapers exclusivos"
                   description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
                />
            </div>
        </div>
    </div>
}