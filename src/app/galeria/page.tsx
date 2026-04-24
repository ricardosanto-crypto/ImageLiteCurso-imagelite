'use client'

import{ Template, ImageCard } from "@/components";
import{useState} from 'react';

export default function GaleriaPage(){

    const image1 = "https://images.unsplash.com/photo-1768489002497-12453d8cfe5a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";    
    const image2 = "https://plus.unsplash.com/premium_photo-1701764128909-68204034c453?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const image3 = "https://kennydouglas.com.br/wp-content/uploads/2024/01/fotos-de-paisagens.webp";
    
    const [codigoImage, setCodigoImage] = useState<number>(1);
    const [urlImage, setUrlImage] = useState<string>(image1);
    const [nomeImage, setNomeImage] = useState<string>();
    const [tamanhoImage, setTamanhoImage] = useState<number>();
    const [dataUploadImage, setDataUploadImage] = useState<string>();

    /*const image = useState<string>();    
    const valor = image[0];
    const setValor = image[1];
    setValor("função para modificar valor do estado");*/
    
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
            <section className="grid grid-cols-3 gap-8">   
                <button onClick={mudarImagem}>Clique para mudar</button>             
                <ImageCard nome={nomeImage} tamanho={tamanhoImage?.toString() + 'MB'} dataUpload={dataUploadImage} src={urlImage} className='h-56 w-full object-cover rounded-t-md'/>                           
                <ImageCard nome={nomeImage} tamanho={tamanhoImage?.toString() + 'MB'} dataUpload={dataUploadImage} src={urlImage} className='h-56 w-full object-cover rounded-t-md'/>                           
                <ImageCard nome={nomeImage} tamanho={tamanhoImage?.toString() + 'MB'} dataUpload={dataUploadImage} src={urlImage} className='h-56 w-full object-cover rounded-t-md'/>                           
            </section>  
       </Template>
    )

}