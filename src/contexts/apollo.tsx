import { ApolloProvider as ApolloProviderClient } from "@apollo/client";
import { ReactNode } from "react";
import { client } from "../services/apollo";

export const ApolloProvider: React.FC<{
  children: ReactNode
}> = ({
    children
}) => {
  return <ApolloProviderClient client={client}>
    {children}
  </ApolloProviderClient>;
}