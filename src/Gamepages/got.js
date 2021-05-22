import React from "react";
import "./games.css";
import { Button } from "react-bootstrap";
function got() {
  return (
    <div className="contain">
      <h2>Ghost of Tsushima</h2>
      <iframe
        width="703"
        height="395"
        src="https://www.youtube.com/embed/b_iU_gnn28U?autoplay=1"
        title="YouTube video player"
        frameborder="2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        In the late 13th century, the Mongol empire has laid waste to entire
        nations along their campaign to conquer the East. Tsushima Island is all
        that stands between mainland Japan and a massive Mongol invasion fleet
        led by the ruthless and cunning general, Khotun Khan. As the island
        burns in the wake of the first wave of the Mongol assault, samurai
        warrior Jin Sakai stands as one of the last surviving members of his
        clan. He is resolved to do whatever it takes, at any cost, to protect
        his people and reclaim his home. He must set aside the traditions that
        have shaped him as a warrior to forge a new path, the path of the Ghost,
        and wage an unconventional war for the freedom of Tsushima.
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

export default got;
