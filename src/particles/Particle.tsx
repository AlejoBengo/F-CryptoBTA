/*IMPORT UTILITIES*/
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Tilt from 'react-parallax-tilt';
/*IMPORT CSS*/
import { Container, SubContainer } from './styledComponents';
import BTALogo from '../imagenes/BTALogo.png';
import './particles.css';

const Particle = () => {
   const particlesInit = async (main: any) => {
      await loadFull(main);
   };

   return (
      <Container>
         <SubContainer>
            <Tilt
               tiltReverse={true}
               perspective={600}
               trackOnWindow={true}
               gyroscope={true}
            >
               <img className='BTAimg' src={BTALogo} alt='' />
            </Tilt>
            <Particles
               id='tsparticles'
               init={particlesInit}
               options={{
                  fullScreen: {
                     zIndex: -1,
                  },
                  background: {
                     color: {
                        value: 'black',
                     },
                  },
                  fpsLimit: 60,
                  interactivity: {
                     events: {
                        onHover: {
                           enable: true,
                           mode: ['grab', 'attract', 'connect', 'bubble'],
                        },
                        resize: false,
                     },
                     modes: {
                        bubble: {
                           distance: 800,
                           duration: 10,
                           opacity: 0.4,
                           size: 2,
                        },
                        push: {
                           quantity: 8,
                        },
                        repulse: {
                           distance: 180,
                           duration: 80,
                        },
                     },
                  },
                  particles: {
                     color: {
                        value: '#ffffff',
                     },
                     links: {
                        color: '#f0e68c',
                        distance: 150,
                        enable: true,
                        opacity: 0.4,
                        width: 1,
                     },
                     collisions: {
                        enable: true,
                     },
                     move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: true,
                        speed: 1.5,
                        straight: false,
                     },
                     number: {
                        density: {
                           enable: true,
                           area: 650,
                        },
                        value: 80,
                     },
                     opacity: {
                        value: 0.3,
                     },
                     shape: {
                        type: 'circle',
                     },
                     size: {
                        random: true,
                        value: 3,
                     },
                  },
                  detectRetina: true,
               }}
            />
         </SubContainer>
      </Container>
   );
};

export default Particle;
