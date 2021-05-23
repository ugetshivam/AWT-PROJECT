import React from "react";
import "./games.css";
import { Button } from "react-bootstrap";
function returnal() {
  return (
    <div className="contain">
      <h2>Returnal</h2>
      <div className="Ty-container">
      
      <p className="gametext">
        After crash-landing on this shape-shifting world, Selene must search
        through the barren landscape of an ancient civilization for her escape.
        Isolated and alone, she finds herself fighting tooth and nail for
        survival. Again and again, she’s defeated – forced to restart her
        journey every time she dies. Through relentless roguelike gameplay,
        you’ll discover that just as the planet changes with every cycle, so do
        the items at your disposal. Every loop offers new combinations, forcing
        you to push your boundaries and approach combat with a different
        strategy each time. Brought to life by stunning visual effects, the dark
        beauty of the decaying world around you is packed with explosive
        surprises. From high stakes, bullet hell-fuelled combat, to visceral
        twists and turns through stark and contrasting environments. You’ll
        explore, discover and fight your way through an unforgiving journey,
        where mystery stalks your every move. Designed for extreme
        replayability, the procedural world of Returnal invites you to dust
        yourself off in the face of defeat and take on new, evolving challenges
        with every rebirth.
      </p>
      <iframe
        width="703"
        height="395"
        src="https://www.youtube.com/embed/k4nSLa8a588?autoplay=1"
        title="YouTube video player"
        frameborder="2"
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

export default returnal;
