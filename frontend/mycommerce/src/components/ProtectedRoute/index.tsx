import React from "react";
import { Navigate } from "react-router-dom";
import { useIsAuthenticatedQuery } from "../../services/authApi";

type Props = {
  children: any;
};

export const ProtectedRoute = ({ children }: Props) => {
  const { data, isLoading } = useIsAuthenticatedQuery({});

  if (!data && !isLoading) {
    return <Navigate to="/login" />;
  }

  return children;
};
