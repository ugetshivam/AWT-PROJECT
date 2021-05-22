import React from "react";
import "./games.css";
import { Button } from "react-bootstrap";
function hitman() {
  return (
    <div className="contain">
      <h2>Hitman 3</h2>
      <iframe
        width="703"
        height="395"
        src="https://www.youtube.com/embed/avAXhnbs69w?autoplay=1"
        title="YouTube video player"
        frameborder="2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        During the events of Hitman 2, professional assassin Agent 47 and his
        handler, Diana Burnwood, defected from the International Contract Agency
        (ICA) and joined forces with rogue mercenary Lucas Grey to destroy
        Providence: an alliance of corporate executives and industrialists
        collectively wielding vast global political, military, and economic
        influence. While 47 and Grey seek revenge on Providence for creating and
        exploiting them both as cloned assassins from birth, Diana is motivated
        by Providence's assassination of her parents, unaware that 47 carried
        out the killing under Providence's control.
      </p>
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

export default hitman;
