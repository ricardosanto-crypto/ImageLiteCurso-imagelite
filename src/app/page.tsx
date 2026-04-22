import { ArrowFunction, PrimeiroComponent } from "../components/PrimeiroComponent";
export default function Home() {
  return (
    <div>
      <PrimeiroComponent 
        mensagem="Olá, esta mensagem estou passando como parâmetro." 
        mensagemDoBotao="Esta é a mensagem do botão"/>

      <PrimeiroComponent 
        mensagem="Sou outro componente." 
        mensagemDoBotao="Clicaram em mim."/>

      <ArrowFunction />
    </div>

  )
}
