import {ImageStyled,DivProjects,DivRow, Icon} from'../components/componentsStyled'
import ImageSlider from '../components/ImageSlider.js'

const images = [
  {
    id: 1,
    src: 'https://pbs.twimg.com/media/Fs92Xw6WAAAgBxl?format=jpg&name=large',
    
  },
  {
    id: 2,
    src: 'https://pbs.twimg.com/media/Fs93BjpWABQM_jZ?format=jpg&name=large',
  },
  {
    id: 3,
    src: 'https://pbs.twimg.com/media/Fs92Xw6WAAAgBxl?format=jpg&name=large',
  },
 
];
const pokedex = () =>{
    return ( 
      
      <DivProjects>
           <h1>Pokedex responsiva</h1>
      <p>Una pokedex simple con una interfaz agradable, en la cual se pueden buscar los pokemones por su nombre y acceder a sus stats basicos. Esta aplicacion fue desarrollada en react + typescript.
      </p>
      <DivRow style={{ display: 'flex', gap: '2px' , margin: '10px'}}>
           <h3>Tecnologías: </h3>
           <Icon alt='css' src='https://cdn-icons-png.flaticon.com/512/5968/5968242.png' />
            <Icon alt='html' src='https://cdn-icons-png.flaticon.com/512/5968/5968267.png' />
            <Icon alt='react' src='https://cdn-icons-png.flaticon.com/512/919/919851.png' />
            <Icon alt='js' src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' />
            <Icon alt='tsx' src='https://cdn-icons-png.flaticon.com/512/5968/5968381.png' />
            
            </DivRow>
      <ImageSlider images={images}></ImageSlider>
         
       
         
 </DivProjects>
      
    )
  }
  export default pokedex