import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(event) {
    event.preventDefault();
    console.log(`Vill logga in med: ${username} och ${password}`);
  }

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header>
        <h2>Logga in</h2>
      </header>
      <form>
        <motion.input
          type="text"
          placeholder="Användarnamn"
          onChange={handleUsername}
          whileFocus={{ scale: 1.1 }}
        ></motion.input>
        <motion.input
          type="password"
          placeholder="Lösenord"
          onChange={handlePassword}
          whileFocus={{ scale: 1.1 }}
        ></motion.input>
        <motion.button
          className="button"
          onClick={handleClick}
          whileHover={{ backgroundColor: "transparent", borderColor: "#fff" }}
          whileTap={{ scale: 0.8 }}
        >
          Logga in
        </motion.button>
      </form>
    </motion.main>
  );
}

export default App;
