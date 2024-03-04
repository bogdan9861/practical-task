

export const useStorage = () => {
    const getAllItems = () => {
        let length = localStorage.length

        console.log(length);
    }

    return { getAllItems }
}