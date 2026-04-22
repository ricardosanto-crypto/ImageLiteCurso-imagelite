'use client'

interface PrimeiroComponentProps{
    //A interrogação diz que a propriedade é opcional, ou seja, o componente pode ser renderizado sem passar um valor para essas propriedades.
    mensagem?:string;
    mensagemDoBotao?:string;
}

//export function PrimeiroComponent(){} //Até Aula 29
  
//converti em arroyfunction utilizando o props
export const PrimeiroComponent:React.FC<PrimeiroComponentProps> = (props:PrimeiroComponentProps) =>{
    function handleClick(){        
        console.log(props.mensagemDoBotao );
    }

    return (
        <div>
            {props.mensagem}
            <button onClick={handleClick} >Clique aqui</button>
        </div>
    )
}


export const ArrowFunction = ()=>{
    return (
        <h2>Arrow Function</h2>
    )

}