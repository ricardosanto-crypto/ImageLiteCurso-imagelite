import{ Template, ImageCard } from "@/components";

export default function GaleriaPage(){
    
    return (
       <Template>
            <section className="grid grid-cols-3 gap-8">                
                <ImageCard nome='Montanha' tamanho='15MB' dataUpload='23/04/2026' src="https://kennydouglas.com.br/wp-content/uploads/2024/01/fotos-de-paisagens.webp" className='h56 w-full object-cover rouded-t-md'/>
                <ImageCard nome='Oceano' tamanho='15MB' dataUpload='23/04/2026' src="https://kennydouglas.com.br/wp-content/uploads/2024/01/fotos-de-paisagens.webp" className='h56 w-full object-cover rouded-t-md'/>
                <ImageCard nome='Floresta'  tamanho='15MB' dataUpload='23/04/2026' src="https://kennydouglas.com.br/wp-content/uploads/2024/01/fotos-de-paisagens.webp" className='h56 w-full object-cover rouded-t-md'/>
                <ImageCard nome='Paisagem'  tamanho='15MB' dataUpload='23/04/2026' src="https://kennydouglas.com.br/wp-content/uploads/2024/01/fotos-de-paisagens.webp" className='h56 w-full object-cover rouded-t-md'/>
                <ImageCard nome='Floresta'  tamanho='15MB' dataUpload='23/04/2026' src="https://kennydouglas.com.br/wp-content/uploads/2024/01/fotos-de-paisagens.webp" className='h56 w-full object-cover rouded-t-md'/>
                <ImageCard nome='Paisagem'  tamanho='15MB' dataUpload='23/04/2026' src="https://kennydouglas.com.br/wp-content/uploads/2024/01/fotos-de-paisagens.webp" className='h56 w-full object-cover rouded-t-md'/>                                
            </section>  
       </Template>
    )

}