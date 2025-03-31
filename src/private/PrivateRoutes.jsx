
import { Navigate } from 'react-router-dom';
import Adm from './routes/Adm';

const PrivateRoutes = () => {
  const token  = localStorage.getItem('authToken');  
  return !token ?  <Navigate to="/login" /> : <Adm />;
};

export default PrivateRoutes;