'use client'

import{ Template, ImageCard } from "@/components";
import {Image} from '@/resources/image/image.resource';
import {useImageService} from '@/resources/image/image.service';
import{useState} from 'react';

export default function GaleriaPage(){

    /*const image1 = "https://images.unsplash.com/photo-1768489002497-12453d8cfe5a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";    
    const image2 = "https://plus.unsplash.com/premium_photo-1701764128909-68204034c453?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const image3 = "https://kennydouglas.com.br/wp-content/uploads/2024/01/fotos-de-paisagens.webp";
    
    const [codigoImage, setCodigoImage] = useState<number>(1);
    const [urlImage, setUrlImage] = useState<string>(image1);
    const [nomeImage, setNomeImage] = useState<string>();
    const [tamanhoImage, setTamanhoImage] = useState<number>();
    const [dataUploadImage, setDataUploadImage] = useState<string>();

    //const image = useState<string>();    
    //const valor = image[0];
    //const setValor = image[1];
    //setValor("função para modificar valor do estado");
    
    function mudarImagem(){
        if (codigoImage === 1){
            setCodigoImage(2);
            setUrlImage(image2);
            setNomeImage("Oceano");
            setTamanhoImage(15);
            setDataUploadImage("23/04/2026");
        }else{
            setCodigoImage(1);
            setUrlImage(image1);
            setNomeImage("Montanha");
            setTamanhoImage(10);
            setDataUploadImage("23/04/2024");
        }
    }
    return (
       <Template>
            <button onClick={mudarImagem}>Clique para mudar</button>   
            <section className="grid grid-cols-3 gap-8">                             
                <ImageCard nome={nomeImage} tamanho={tamanhoImage?.toString() + 'MB'} dataUpload={dataUploadImage} src={urlImage} className='h-56 w-full object-cover rounded-t-md'/>                           
                <ImageCard nome={nomeImage} tamanho={tamanhoImage?.toString() + 'MB'} dataUpload={dataUploadImage} src={urlImage} className='h-56 w-full object-cover rounded-t-md'/>                           
                <ImageCard nome={nomeImage} tamanho={tamanhoImage?.toString() + 'MB'} dataUpload={dataUploadImage} src={urlImage} className='h-56 w-full object-cover rounded-t-md'/>                           
            </section>  
       </Template>
    )*/

    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([])
    
    async function searchImages(){
        const result = await useService.buscar();
        setImages(result);
        console.table(result);
    }
        
    function renderImageCard(image:Image){
        return (
            <ImageCard  nome={image.name} 
                        src={image.url} 
                        tamanho={image.size} 
                        dataUpload={image.uploadDate}/> 
            //<ImageCard nome="nome_iamgem" tamanho="10MB" dataUpload='24/04/2026' src="https://images.unsplash.com/photo-1768489002497-12453d8cfe5a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-56 w-full object-cover rounded-t-md'/>                           
        )
    }

    function renderImageCards(){
        //return images.map(image => image.name);
        return images.map(renderImageCard);
    }    

    return (
       <Template>                 
            <section className="flex flex-col items-center justify-center my-5">
                <div className="fles space-x-4">
                    <input type="text" className="border px-3 py-2 rounded-1g text-gray-900"/>
                    <select className="border px-4 py-2 rounded-lg text-gray-900">
                        <option>Todos</option>
                    </select>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-1g" onClick={searchImages}>Search</button>                
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-1g">Add New</button>                
                </div>                
            </section>
            <section className="grid grid-cols-3 gap-8">                                                  
              {
                renderImageCards()
              }
            </section>  
       </Template>
    )

}
