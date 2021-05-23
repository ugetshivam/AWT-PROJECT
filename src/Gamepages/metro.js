import React from "react";
import "./games.css";
import { Button } from "react-bootstrap";
function metro() {
  return (
    <div className="contain">
      <h2>Metro Exodus</h2>
      <div className="Ty-container">
      
      
      <p className="gametext">
        After the attack on D6, Artyom becomes disillusioned with the constant
        infighting and corruption within the Metro and leaves the Spartan Order.
        He soon becomes obsessed with proving that other human survivors exist
        outside of Moscow and makes numerous dangerous expeditions to the
        surface, much to Anna's concern and Miller's frustration. However, on
        one such expedition with Anna, they witness a working train running on
        the surface. Before they can follow it, they are captured by Hansa
        soldiers, along with a group of people who claim to be from outside of
        Moscow. The Hansa soldiers execute the other prisoners, and Artyom is
        shot and left for dead, taking Anna to their base. Surviving the
        gunshot, Artyom follows the soldiers to rescue Anna, and in the process
        inadvertently destroys a signal jammer that was blocking all
        communications going in and out of Moscow. Radio transmissions from all
        over the world begin to be picked up, and Artyom and Anna realise
        humanity has not gone extinct. They escape by stealing one of Hansa's
        locomotives, the "Aurora", with the aid of a defected Hansa train
        engineer called Yermak.
      </p>
      <iframe
        width="703"
        height="395"
        src="https://www.youtube.com/embed/fbbqlvuovQ0?autoplay=1"
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

export default metro;
