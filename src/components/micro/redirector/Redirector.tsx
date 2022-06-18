import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirector = () => {
   const navigate = useNavigate();

   useEffect(() => {
      navigate('/0');
   });
   return null;
};

export default Redirector;
