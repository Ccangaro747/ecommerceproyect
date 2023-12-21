"use client"
// @/app/admin/layout.js
import { useAuthContext } from "@/contexts/AuthContext";

const AdminLayout = ({ children, login }) => {
  const { user } = useAuthContext();

  return (
    <div>
      {user.logged ? (
        <div>
          <p>Bienvenido, {user.email}!</p>
          {children}
        </div>
      ) : (
        <div>
          <p>Inicia sesión para acceder al contenido.</p>
          {login}
        </div>
      )}
    </div>
  );
};

export default AdminLayout;


