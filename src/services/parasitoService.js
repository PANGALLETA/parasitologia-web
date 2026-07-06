import api from "./api";

export const getParasitos = async (search = "", page = 1) => {

    const response = await api.get("/parasitos", {

        params: {

            search,

            page,

        },

    });

    return response.data;

};

export async function getParasito(uuid) {

    const { data } = await api.get(
        `/parasitos/${uuid}`
    );

    return data;

}