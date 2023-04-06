import Image from 'next/image';
import {ImageStyled,DivProjects, DivRow, Icon} from'../components/componentsStyled'
import ImageSlider from '../components/ImageSlider.js'

const images = [
  {
    id: 1,
    src: 'https://pbs.twimg.com/media/Fs915fTWAA0wodc?format=jpg&name=large',
    
  },
  {
    id: 2,
    src: 'https://pbs.twimg.com/media/Fs915gCWABwFJQY?format=jpg&name=large',
  },
 
];

export const locc = () =>{
    return ( 
      <DivProjects>
           <h1>League of Counters</h1>
           <p> En este proyecto universitario llamado League of Counters, trabajé tanto en el frontend como en el backend utilizando tecnologías como .NET, SQL Server y Bootstrap. El proyecto sigue el modelo MVC y se centra en el desarrollo de una aplicación web relacionada con el juego "League of Legends". El objetivo principal del proyecto fue implementar las funcionalidades básicas de la aplicación, como la gestión de usuarios, la visualización de estadísticas de juego y la búsqueda de otros jugadores en la plataforma. El proyecto fue un desafío interesante que me permitió desarrollar mis habilidades en el desarrollo web y aprender a trabajar con diferentes tecnologías y herramientas. Como tal, puedo incluir este proyecto en mi portafolio como una muestra de mi capacidad para trabajar en proyectos web completos.
           </p>
           
           <DivRow style={{ display: 'flex', gap: '2px' , margin: '10px'}}>
           <h3>Tecnologías: </h3>
            <Icon alt='css' src='https://cdn-icons-png.flaticon.com/512/5968/5968242.png' />
            <Icon alt='js' src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' />
            <Icon alt='.net' src='https://cdn-icons-png.flaticon.com/512/10125/10125077.png' />
            <Icon alt='sql' src='https://cdn-icons-png.flaticon.com/512/5815/5815809.png' />
            <Icon alt='bootstraps' src='https://cdn-icons-png.flaticon.com/512/5968/5968671.png' />
            
            </DivRow>
          
           <ImageSlider  images={images} ></ImageSlider>
          
         
            
            
              
      </DivProjects>
    
      
    )
  }
  export default locc