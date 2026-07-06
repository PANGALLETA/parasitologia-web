import api from "./api";

export async function getHome() {
    const { data } = await api.get("/home");
    return data;
}