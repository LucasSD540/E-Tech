import { Navigate } from "react-router-dom";
import { useIsAuthenticatedQuery } from "../../services/authApi";

export const ProtectedRoute = ({ children }) => {
  const { data, isLoading } = useIsAuthenticatedQuery();

  if (!data && !isLoading) {
    return <Navigate to="/login" />;
  }

  return children;
};
