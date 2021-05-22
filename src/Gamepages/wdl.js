import React from "react";
import "./games.css";
import { Button } from "react-bootstrap";
function wdl() {
  return (
    <div className="contain">
      <h2>Watch Dogs Legion</h2>
      <iframe
        width="703"
        height="395"
        src="https://www.youtube.com/embed/L20nioDjCxU?autoplay=1"
        title="YouTube video player"
        frameborder="2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        The London branch of DedSec, led by Sabine Brandt and her newly crafted
        AI, Bagley, detect armed intruders planting explosives in the Houses of
        Parliament. DedSec operative Dalton Wolfe goes to defuse the bombs and
        discovers the intruders are members of a rogue hacker group called "Zero
        Day". Although Dalton manages to prevent Parliament's destruction, he is
        swiftly gunned down by drones commanded by Zero Day's leader, who
        detonates additional explosives around London and orders an attack on
        DedSec's hideout, forcing Sabine to shut down Bagley and go into hiding.
        In the wake of the bombings, the British government contract Albion with
        restoring order to London and hunting down DedSec, who are held
        responsible for the chaos, effectively causing social and political
        unrest amongst the city's inhabitants.
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

export default wdl;
