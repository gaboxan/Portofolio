import {ImageStyled,DivProjects} from'../components/componentsStyled'
const pokedex = () =>{
    return ( 
      
      <DivProjects>
           <h1>Pokedex responsiva</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
         <ImageStyled
           alt=''
           src={'https://pbs.twimg.com/media/Ex-d7bmWUAgMCUx?format=jpg&name=large'}
           width={800}
           height={500}
         />
         
       
         
 </DivProjects>
      
    )
  }
  export default pokedex