//obs: se a classe Image fosse default, a importação seria feita sem as chaves, ou seja, import Image from './image.resource'   
import {Image} from './image.resource'

class ImageService {
    baseURL: string = 'http://localhost:8080/v1/images';

    async buscar() : Promise<Image[]> {
        const response = await fetch(this.baseURL);        
        return await response.json();
    }
}

//react hook -> useStatus()
export const useImageService = () => new ImageService();