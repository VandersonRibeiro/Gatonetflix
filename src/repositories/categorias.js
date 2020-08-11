import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respostaDoServer) =>{

        if (respostaDoServer.ok){
        const resposta = await respostaDoServer.json();
        return resposta;
        }
        throw new Error('Não foi possivel pegar os dados');
    });
}

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respostaDoServer) =>{

        if (respostaDoServer.ok){
        const resposta = await respostaDoServer.json();
        return resposta;
        }
        throw new Error('Não foi possivel pegar os dados');
    });
}

export default {
    getAll,
    getAllWithVideos,
    
};