import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
const Cards = () => {
  const cardInfo = [
    {
      id: 1,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png",
      title: "Resident Evil Village",
      text: "The next generation of survival horror rises in the form of Resident Evil Village, the eighth major entry in the Resident Evil series.",
      pageLink: "/ResVill",
    },
    {
      id: 2,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202011/1621/fYZQHZ42eXXUt7c6D5YjLrq5.png",
      title: "Returnal",
      text: "Returnal is a third-person shooter roguelike video game developed by Housemarque and published by Sony Interactive Entertainment",
      pageLink: "/returnal",
    },
    {
      id: 3,
      image:
        "https://cdn.vox-cdn.com/thumbor/64Nxeg_0JkgZomEEqohzrIqlhFg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22263462/Chongqing_Location.jpg",
      title: "Hitman 3",
      text: "HITMAN 3 is the dramatic conclusion to the World of Assassination trilogy. Agent 47 returns as a ruthless professional for the most important contracts of his entire career.",
      pageLink: "/hitman",
    },
    {
      id: 4,
      image:
        "https://cdn.vox-cdn.com/thumbor/ak2hDHzblpvcoUlk_Yl53CHMbEw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20058797/ellie.jpeg",
      title: "Last Of Us Part II",
      text: " Set five years after The Last of Us (2013), the game focuses on two playable characters in a post-apocalyptic United States whose lives intertwine.",
      pageLink: "/lou",
    },
    {
      id: 5,
      image:
        "https://cdn.vox-cdn.com/thumbor/NPprzOTT1h1bDy1wcPNks5mcYYs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20031822/miles_morales_spider_man_hero_3840.jpg",
      title: "Spiderman Miles Morales",
      text: "The rise of Miles Morales. Miles Morales discovers explosive powers that set him apart from his mentor, Peter Parker.",
      pageLink: "/spiderman",
    },
    {
      id: 6,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9y1PxNvYmDfb8QFD.png",
      title: "Ghost of Tsushima",
      text: "Featuring an open world, the player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.",
      pageLink: "/got",
    },
    {
      id: 7,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202007/0217/OX5mEmwgRPeSQrhGFU3n4moZ.png",
      title: "Watch Dogs Legion",
      text: "Set within a fictionalised representation of a futuristic, dystopian London, the game's story follows the hacker syndicate DedSec as they seek to clear their names after being framed for a series of terrorist bombings.",
      pageLink: "/wdl",
    },
    {
      id: 8,
      image:
        "https://image.api.playstation.com/vulcan/img/rnd/202010/2814/jhNIE3yH1SNEe9CmxTVHAdme.png",
      title: "Metro Exodus",
      text: "Set in the post-apocalyptic wasteland of the former Russian Federation and Republic of Kazakhstan, the player must cope with the new hazards and engage in combat against mutated creatures as well as hostile humans.",
      pageLink: "/metro",
    },
  ];
  const [Deets, setDeets] = useState([]);
  // const PersonNames = cardInfo.map(person => person.text) ;
  const renderCard = (card) => {
    return (
      <Card
        style={{ width: "18rem", padding: "0" }}
        key={card.id}
        className="box"
        onClick={() => setDeets(card)}
      >
        <Card.Body>
          <Card.Link href={card.pageLink}>
            <Card.Img
              variant="top"
              style={{ width: "100%" }}
              src={card.image}
            />
            <Card.Title>{card.title}</Card.Title>
          </Card.Link>

          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  console.log(Deets);
  return (
    <div>
      <div className="grid">{cardInfo.map(renderCard)}</div>
      <Router>
        <Route exact path="/"></Route>
      </Router>
    </div>
  );
};

export default Cards;
