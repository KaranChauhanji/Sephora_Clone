import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { isLogin } = useSelector((state) => state.loginState);

  return isLogin ? children : <Navigate to="/" />;
};

export default PrivateRoutes;
