import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt="user.name" />
        <h1>{isAuthenticated}</h1>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
      </div>
    )
  );
};
