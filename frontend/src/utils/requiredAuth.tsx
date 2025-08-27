import { Navigate } from "react-router-dom";

function requireAuth(Component: React.ComponentType) {
  const Wrapper = () => {
    const isAuthenticated = true; 

    return isAuthenticated ? <Component /> : <Navigate to="/" replace />;
  };

  return Wrapper;
}

export default requireAuth;
