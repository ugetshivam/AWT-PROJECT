import React from "react";
import Cards from "./Cards";

function Home() {
  return (
    <div>
      <h1 style={{ marginTop: "70px", textAlign: "center" }}>Editor's Pick</h1>
      <hr />
      <Cards />
      <hr />
    </div>
  );
}

export default Home;
