import {ImageStyled,DivProjects,DivRow, Icon} from'../components/componentsStyled'
import ImageSlider from '../components/ImageSlider.js'
const openair = () =>{
  const images = [
    {
      id: 1,
      src: 'https://pbs.twimg.com/media/Fs_fng8XsAAKX6M?format=jpg&name=medium',
    },
   
   
  ];
    return ( 
      <DivProjects>
           <h1>OpenAir</h1>
           <p>Para mi proyecto de tesis de grado llamado OpenAir, trabajé en el desarrollo de una aplicación móvil completa utilizando tecnologías como Kotlin, Firebase y el API de Google Maps. La aplicación tiene como objetivo principal combatir la desinformación de las rutas en Chile y fomentar el deporte. Algunas de las funcionalidades principales de la aplicación incluyen la creación de rutas, la subida y compartición de rutas, la búsqueda de rutas, la geolocalización y la creación de marcadores. Además, la aplicación implementa patrones de diseño y sigue la metodología ágil Mobile-D. Como resultado, la aplicación cuenta con una interfaz de usuario intuitiva y atractiva que es fácil de usar y proporciona una experiencia de usuario agradable. Este proyecto me permitió desarrollar mis habilidades en el diseño y desarrollo de aplicaciones móviles y trabajar con tecnologías modernas y herramientas de desarrollo de última generación. Como tal, puedo incluir este proyecto en mi portafolio como una muestra de mi capacidad para trabajar en proyectos de desarrollo móvil completos y complejos.
           </p>
           <DivRow style={{ display: 'flex', gap: '2px' , margin: '10px'}}>
           <h3>Tecnologías: </h3>
            <Icon alt='kotlin' src='https://cdn-icons-png.flaticon.com/512/4300/4300493.png' />
            <Icon alt='java' src='https://cdn-icons-png.flaticon.com/512/5968/5968282.png' />
            <Icon alt='android' src='https://cdn-icons-png.flaticon.com/512/174/174836.png' />

            </DivRow>
           <ImageSlider images={images}></ImageSlider>
              
            
              
      </DivProjects>
      
    )
  }
  export default openair