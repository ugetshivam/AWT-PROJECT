import React from "react";
import "./games.css";
import { Button } from "react-bootstrap";
function ResVill() {
  return (
    <div className="contain">
      <h2>Resident Evil Village</h2>
      <div className="Ty-container">
      
      
      <p className="gametext">
        The next generation of survival horror rises in the form of Resident
        Evil Village, the eighth major entry in the Resident Evil series. With
        ultra-realistic graphics powered by the RE Engine, fight for survival as
        danger lurks around every corner. Set a few years after the horrifying
        events in the critically acclaimed Resident Evil 7 biohazard, the
        all-new storyline begins with Ethan Winters and his wife Mia living
        peacefully in a new location, free from their past nightmares. Just as
        they are building their new life together, tragedy befalls them once
        again. When BSAA captain Chris Redfield attacks their home, Ethan must
        once again head into hell to get his kidnapped daughter back.
      </p>
      <iframe
        width="703"
        height="395"
        src="https://www.youtube.com/embed/KkWsga0ja-8?autoplay=1"
        title="YouTube video player"
        frameborder="2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
      <div className="rev">
        <h1>What did you think about the game?</h1>
        <textarea name="review" id="res_review" cols="80" rows="10"></textarea>
        <br />
        <Button variant="info" type="submit">
          Submit Review
        </Button>
      </div>
    </div>
  );
}

export default ResVill;
