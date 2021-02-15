import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { posts } from "./data";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [toggle, setToggle] = useState(true);
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }

    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");

    return theme;
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <header>
        <Navbar toggleTheme={toggleTheme} toggle={toggle} />
      </header>
      {posts.map((item) => {
        return (
          <section className="post-wrap">
            <Article key={item.id} {...item} />
          </section>
        );
      })}
      <Footer />
    </main>
  );
}

export default App;
