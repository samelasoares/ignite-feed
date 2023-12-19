//import React from 'react';
import igniteLogo from "../imag/ignite-logo.svg";

export function Header() {
  return (
    <header style={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" style={styles.logo} />
      <strong>Ignite Feed</strong>
    </header>
  );
}

const styles = {
  header: {
    background: "#333",
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.25rem 0",
  },
  logo: {
    marginRight: "1rem",
    maxHeight: "100%",
  },
};
