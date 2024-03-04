import { useHttp } from "../hooks/useHttp.hook"

export const Service = () => {

    const { request, loading, error } = useHttp()

    const getRepositoryByName = async (name) => {
        const res = await request(`https://api.github.com/search/repositories?q=${name}`);
        return await res;
    }

    const getRepositoryById = async (id) => {
        const res = await request(`https://api.github.com/search/repositories/`);
        return await res;
    }

    return { getRepositoryByName, getRepositoryById, loading, error }
}