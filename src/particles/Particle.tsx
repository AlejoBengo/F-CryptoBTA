import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { Box } from '@mui/material';
import BTALogo from '../imagenes/BTALogo.png';

const Particle = () => {
   const particlesInit = async (main: any) => {
      await loadFull(main);
   };

   return (
      <Box
         style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <img style={{ width: '50vw', opacity: '0.3' }} src={BTALogo} alt='' />
         <Particles
            id='tsparticles'
            init={particlesInit}
            options={{
               background: {
                  color: {
                     value: 'transparent',
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
                     color: '#ffffff',
                     distance: 150,
                     enable: true,
                     opacity: 0.1,
                     width: 1,
                  },
                  collisions: {
                     enable: true,
                  },
                  move: {
                     direction: 'none',
                     enable: true,
                     outMode: 'bounce',
                     random: false,
                     speed: 1,
                     straight: false,
                  },
                  number: {
                     density: {
                        enable: true,
                        area: 700,
                     },
                     value: 100,
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
      </Box>
   );
};

export default Particle;
