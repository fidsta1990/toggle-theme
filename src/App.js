import React from "react";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import { posts } from "./data";

function App() {
  return (
    <main>
      <Navbar />
      {posts.map((item) => {
        return <Article key={item.id} {...item} />;
      })}
    </main>
  );
}

export default App;
