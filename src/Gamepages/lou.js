import React from "react";
import "./games.css";
import { Button } from "react-bootstrap";
function lou() {
  return (
    <div className="contain">
      <h2>The Last of Us Part 2 </h2>
      <iframe
        width="703"
        height="395"
        src="https://www.youtube.com/embed/X0VubwgS2Y4?autoplay=1"
        title="YouTube video player"
        frameborder="2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        Five years after their dangerous journey across the post-pandemic United
        States, Ellie and Joel have settled down in Jackson, Wyoming. Living
        amongst a thriving community of survivors has allowed them peace and
        stability, despite the constant threat of the infected and other, more
        desperate survivors. When a violent event disrupts that peace, Ellie
        embarks on a relentless journey to carry out justice and find closure.
        As she hunts those responsible one by one, she is confronted with the
        devastating physical and emotional repercussions of her actions.
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

export default lou;
