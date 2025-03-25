import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoutes({ children }) {
    // Verifica se o token está armazenado no localStorage ou sessionStorage
    const token = localStorage.getItem('authToken');  // Ou sessionStorage.getItem('authToken') dependendo de como está armazenando

    // Se o token existir, considera o usuário autenticado
    return token ? children : <Navigate to="/Login" />; // Redireciona para a home se não autenticado
}

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};