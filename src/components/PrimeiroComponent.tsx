'use client'

export function PrimeiroComponent(){
    function handleClick(){
        console.log("Botão clicado!");
    }
    return (
        <div>
            Meu primeiro componente!
            <button onClick={handleClick} >Clique aqui</button>
        </div>
    )
}

export const ArrowFunction = ()=>{
    return (
        <h2>Arrow Function</h2>
    )

}