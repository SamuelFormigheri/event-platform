import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4twlvt20bl001t767kb8ahd/master",
    cache: new InMemoryCache()
});