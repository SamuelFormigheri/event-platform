import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Logo } from "../components/logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber($name: String!, $email: String!) {
        createSubscriber(data: {name: $name, email: $email}) {
            id
        }
    }
`;

export function Subscribe(){
    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const [createSubscriber, {
        loading
    }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    const handleSubscribe = async (e: FormEvent) => {
        e.preventDefault();

        await createSubscriber({
            variables:{
                name, 
                email
            }
        });

        navigate('/event');
    }

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-width[640px]">
                    <Logo />
                    <h1 className="mt-8 text=[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong> 
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                    Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">
                        Inscreva-se gratuitamente
                    </strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <Input 
                            type="text"
                            placeholder="Nome completo"
                            state={name}
                            setState={setName}
                        />
                        <Input 
                            type="email"
                            placeholder="E-mail"
                            state={email}
                            setState={setEmail}
                        />

                        <Button 
                            type="submit" 
                            layout="primary"
                            disabled={loading}
                        >
                            Garantir minha vaga
                        </Button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/code-mockup.png" className="mt-10" alt="Code Mockup"/>
        </div>
    )
}