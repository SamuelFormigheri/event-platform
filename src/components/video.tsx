import { Image, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { Button } from "./button";
import { Card } from "./card";

// CONTINUE https://www.youtube.com/watch?v=KJj70dBgRPo 31 MIN

export function Video(){
    return <div className="flex-1">
        <div className="bg-black flex justify-center">
            <div className="h-full w-full max-w-[1100px] max-h[60vh] aspect-video">

            </div>
        </div>

        <div className="p-8 max-w[1100px] mx-auto">
            <div className="flex items-start gap-16">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">
                        Aula 01 - Criando o projeto e realizando o setup inicial
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Nessa aula vamos dar início ao projeto criando a estrutura base da 
                        aplicação utilizando ReactJS, Vite e TailwindCSS. 
                        Vamos também realizar o setup do nosso projeto no GraphCMS criando 
                        as entidades da aplicação e integrando a API GraphQL gerada
                        pela plataforma no nosso front-end utilizando Apollo Client.
                    </p>

                    <div className="flex items-center gap-4 mt-6">
                        <img 
                            className="h-16 w-16 rounded-full border-2 border-blue-500"
                            src="https://github.com/SamuelFormigheri.png" 
                            alt=" " 
                        />

                        <div className="leading-relaxed">
                            <strong className="font-bold text-2xl block">
                                Samuel Formigheri
                            </strong>
                            <span className="text-gray-200 text-sm block">
                                Dev
                            </span>
                        </div>
                    </div>
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

            <div className="gap-8 mt-12 grid grid-cols-2">
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