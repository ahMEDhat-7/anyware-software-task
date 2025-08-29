import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserAuthenticated } from "../store/slices/auth.slice";

function requireAuth(Component: React.ComponentType) {
  const Wrapper = () => {
    const user = useSelector(selectUserAuthenticated);
    return user ? <Component /> : <Navigate to="/" replace />;
  };

  return Wrapper;
}

export default requireAuth;
