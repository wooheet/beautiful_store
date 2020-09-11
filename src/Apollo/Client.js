import ApolloClient from "apollo-boost";
import { Config } from "../config";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
    uri: Config.APOLLO(),
    clientState: {
        defaults,
        resolvers
    },
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});