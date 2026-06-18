import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

export const getUsers = (
    page = 1,
    search = "",
    country = ""
) =>
    api.get("/users", {
        params: {
            page,
            search,
            country,
        },
    });

export const createUser = (payload) =>
    api.post("/users", payload);