import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await fetch('/api/auth/validate', {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!response.ok) throw new Error('Token inválido');
          const data = await response.json();
          setToken(data.token);
        } catch (error) {
          console.error('Token inválido:', error);

          setToken(null);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    validateToken();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
