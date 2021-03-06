const URL = "https://pokeapi.co/api/v2/pokemon"
//function that obtain all the characters from the anime Black Clover
export async function getCharactersApi(){
    try {
        const request = await fetch(`${URL}`);
        const response = await request.json();
        return response.results;
    } catch (err) {
        throw Error(err);
    }    
}

/*
//Function that obtains a characters info with his id
export async function getCharacterByIdApi(id){
    try {
        const request = await fetch(`${URL}characters/${id}`);
        const response = await request.json();
        return response;
    } catch (err) {
        throw Error(err);
    }
}

export async function getAboutInfo(url){
    try{
        const request = await fetch(url);
        const response = await request.json();
        return response.name;
    }catch (err){
        throw Error(err);
    }
}
*/