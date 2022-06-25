import { ReactNode } from "react";
import { ApolloProvider } from "./apollo";

export function AppContexts({ children } : { children: ReactNode }){
    return (
        <ApolloProvider>
            {children}
        </ApolloProvider>
    )
}