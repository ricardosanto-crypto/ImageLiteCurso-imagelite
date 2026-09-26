//obs: se a classe Image fosse default, a importação seria feita sem as chaves, ou seja, import Image from './image.resource'   
import { Image } from './image.resource'

class ImageService {
    baseURL: string = 'http://localhost:8080/v1/images';

    async buscar(query: string = "", extension: string = ""): Promise<Image[]> {
        const url = `${this.baseURL}?query=${query}&extension=${extension}`;
        console.log("URL de busca: ", url);
        const response = await fetch(url);
        return await response.json();
    }

    //async salvar(dados:FormData): Promise<string | null> {
    async salvar(dados:FormData): Promise<string> {
        const response = await fetch(this.baseURL, {
            method: 'POST',
            body: dados
        });
        return response.headers.get('Location') ?? '';
    }
}

//react hook -> useStatus()
export const useImageService = () => new ImageService();