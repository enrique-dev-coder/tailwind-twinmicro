import styled from 'styled-components'
import tw from "twin.macro"
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className='flex flex-col items-center justify-center w-full flex-1'>
          <StyledButton>In Style</StyledButton>
          <br/>
          <TailwindButton>Tailwind</TailwindButton>
          <br/>
          <ConditionalButton isRed={true}>Conditional Tailwind</ConditionalButton>
      </main>

    </div>
  )
}

const TailwindButton = tw.button`
  bg-red-500
  hover:bg-red-700
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
`



const StyledButton = styled.button`
  background:red;
  color:white;
  font-size:1em;
  text-align:center;
  padding: .25em 1em;
  border:2px solid black;
`

//estilos condicionales con styled components y tailwind
//se usa una logica similiar a los componentes de conditional rendering de react
//el isred se pasa como propiedad al momento de llamar al componente

const ConditionalButton = styled.button(({isRed})=>[
isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-700`,
tw`
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
`,
])