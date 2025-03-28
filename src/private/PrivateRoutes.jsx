
import { Navigate } from 'react-router-dom';
import Adm from './routes/Adm';

const PrivateRoutes = () => {
  const token  = localStorage.getItem('authToken');
  // Get the token from local storage
   // Check if the token exists in local storage
   console.log(token);
  return !token ?  <Navigate to="/login" /> : <Adm />;
};

export default PrivateRoutes;