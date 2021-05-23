import React from "react";
import "./games.css";
import { Button } from "react-bootstrap";
function spiderman() {
  return (
    <div className="contain">
      <h2>Marvel's Spider-Man: Miles Morales</h2>
      <div className="Ty-container">
      
      
      <p className="gametext">
        In the latest adventure in the Marvel’s Spider-Man universe, teenager
        Miles Morales is adjusting to his new home while following in the
        footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a
        fierce power struggle threatens to destroy his new home, the aspiring
        hero realizes that with great power, there must also come great
        responsibility. To save all of Marvel’s New York, Miles must take up the
        mantle of Spider-Man and own it.
      </p>
      <iframe
        width="703"
        height="395"
        src="https://www.youtube.com/embed/gHzuHo80U2M?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
      <div className="rev">
        <h1>What did you think about the game?</h1>
        <textarea name="review" id="got_review" cols="80" rows="10"></textarea>
        <br />
        <Button variant="info" type="submit">
          Submit Review
        </Button>
      </div>
    </div>
  );
}

export default spiderman;
