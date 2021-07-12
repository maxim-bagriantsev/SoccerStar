import * as axios from "axios";
import { urls } from "./urls";

// создаем и настраиваем инстанс аксиоса
const axiosInstance = axios.create({
    withCredentials: true,
    // baseURL: urls.baseURL,
    headers: {
        'x-auth-token': 'b0cc176056174cd6bc7bfd20a5a11fd9',
    }
});

// получить список всех соревнований
export const getCompetitions = () => {
    return axiosInstance.get(urls.competitions).then(response => {
        return response.data;
    })
}

export const getTeams = () => {
    return axiosInstance.get(urls.teams).then(response => {
        return response.data;
    })
}






