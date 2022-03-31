
export const getMenu = async (nombre) => {

    const url = `http://172.107.175.82:22347/menu/${nombre}/`;
    const resp = await fetch(url).catch((error) => {
        console.log(error);
    });
    const data = await resp.json();

    console.log(data)

    return data;

}
