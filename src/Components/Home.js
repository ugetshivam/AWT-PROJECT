import React from "react";
import Cards from "./Cards";
import Social from "./Social";
function Home() {
  return (
    <div>
      <h1
        style={{
          marginTop: "70px",
          textAlign: "center",
          font: "Helvetica, Sans-Serif",
          letterSpacing: "-5px",
          color: "rgba(0, 0, 255, 0.5)",
        }}
      >
        Editor's Pick
      </h1>
      <hr />
      <Cards />
      <Social />
    </div>
  );
}

export default Home;
