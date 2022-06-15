import React from 'react';
import './ModuleParallax.css';
import { Parallax } from 'react-parallax';
import BTALogo from '../imagenes/BTALogo.png';

const ModuleParallax = () => {
   return (
      <Parallax bgImage={BTALogo} strength={400}>
         <div style={{ height: '180vh' }}></div>
      </Parallax>
   );
};

export default ModuleParallax;
