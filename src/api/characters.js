const URL = "https://api.jikan.moe/v4/anime/34572/characters"

export async function getCharactersApi(){
    try {
        const request = await fetch(`${URL}`);
        const response = await request.json();
        return response.results;
    } catch (err) {
        throw Error(err);
    }
}

export async function getCharacterByIdApi(id){
    try {
        const request = await fetch(`${URL}${id}`);
        const response = await request.json();
        return response;
    } catch (err) {
        throw Error(err);
    }
}
/*
export async function getAnimePicture(){
    try{
        const request = await fetch(`${URL}${id}/pictures`);
        const response = await request.json();
        return response.name;
    }catch (err){
        throw Error(err);
    }
}
*/