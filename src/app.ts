import * as http from "http";
import {
    getFilterEpisodes,
    getListEpisodes,
} from "./controllers/podcasts-controler";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
    request: http.IncomingMessage,
    response: http.ServerResponse
) => {
    const [baseUrl, queryString] = request.url?.split("?") ?? [""];

    console.log(queryString);
    console.log(baseUrl);

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
};
