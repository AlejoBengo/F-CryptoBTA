/*IMPORT UTILITIES*/
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
/*IMPORT CSS*/
import { Container } from './styledComponents';
import BTACoin from '../../imagenes/BTACoin.png';

const ColorParticle = () => {
   const particlesInit = async (main: any) => {
      await loadFull(main);
   };

   return (
      <Container>
         <Particles
            id='tsparticles'
            init={particlesInit}
            options={{
               background: {
                  color: {
                     value: '#000',
                  },
               },
               fullScreen: {
                  zIndex: -1,
               },
               detectRetina: true,
               duration: 0,
               fpsLimit: 60,
               interactivity: {
                  events: {
                     onhover: {
                        enable: true,
                        mode: 'trail',
                     },
                  },
                  modes: {
                     trail: {
                        delay: 0.01,
                        quantity: 1,
                        pauseOnStop: true,
                     },
                  },
               },
               particles: {
                  number: {
                     value: 0,
                  },
                  shape: {
                     options: {
                        image: [
                           {
                              src: BTACoin,
                           },
                        ],
                     },
                     type: 'image',
                  },
                  move: {
                     enable: true,
                     speed: 2,
                     direction: 'none',
                     random: false,
                     straight: false,
                     outMode: 'destroy',
                  },
                  size: {
                     random: {
                        enable: false,
                        minimumValue: 1,
                     },
                     value: 40,
                     animation: {
                        count: 0,
                        enable: false,
                        speed: 40,
                        sync: false,
                        destroy: 'none',
                        startValue: 'random',
                        minimumValue: 0.1,
                     },
                  },
               },
            }}
         />
      </Container>
   );
};

export default ColorParticle;
