import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import { posts } from "./data";

function App() {
  const [toggle, setToggle] = useState(true);

  const toggleTheme = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <main>
      <header>
        <Navbar toggleTheme={toggleTheme} toggle={toggle} />
      </header>
      {posts.map((item) => {
        return <Article key={item.id} {...item} />;
      })}
    </main>
  );
}

export default App;
