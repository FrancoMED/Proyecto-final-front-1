import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Logout.module.css";

export default function Logout() {
  const { logout } = useAuth0();

  return (
    <div className="d-flex justify-content-center">
      <button
        onClick={() => logout({ returnTo: window.location.origin })}
        className={`${styles.button}`}
      >
        Cerrar sesion
      </button>
    </div>
  );
}
