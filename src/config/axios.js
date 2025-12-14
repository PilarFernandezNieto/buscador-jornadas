import axios from "axios";

const clienteAxios = axios.create({
    baseURL: "/",
    headers: {
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
});

export default clienteAxios;
