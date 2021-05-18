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
      text: "Some Info",
      pageLink: "#",
    },
    {
      id: 2,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202011/1621/fYZQHZ42eXXUt7c6D5YjLrq5.png",
      title: "Returnal",
      text: "Some info",
      pageLink: "#",
    },
    {
      id: 3,
      image:
        "https://cdn.vox-cdn.com/thumbor/64Nxeg_0JkgZomEEqohzrIqlhFg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22263462/Chongqing_Location.jpg",
      title: "Hitman 3",
      text: "Some Info",
      pageLink: "#",
    },
    {
      id: 4,
      image:
        "https://cdn.vox-cdn.com/thumbor/ak2hDHzblpvcoUlk_Yl53CHMbEw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20058797/ellie.jpeg",
      title: "Last Of Us Part II",
      text: "Some info",
      pageLink: "#",
    },
    {
      id: 5,
      image:
        "https://cdn.vox-cdn.com/thumbor/NPprzOTT1h1bDy1wcPNks5mcYYs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20031822/miles_morales_spider_man_hero_3840.jpg",
      title: "Spiderman Miles Morales",
      text: "Some info",
      pageLink: "#",
    },
    {
      id: 6,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9y1PxNvYmDfb8QFD.png",
      title: "Ghost of Tsushima",
      text: "Some info",
      pageLink: "#",
    },
    {
      id: 7,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202007/0217/OX5mEmwgRPeSQrhGFU3n4moZ.png",
      title: "Watch Dogs Legion",
      text: "Some info",
      pageLink: "#",
    },
    {
      id: 8,
      image:
        "https://image.api.playstation.com/vulcan/img/rnd/202010/2814/jhNIE3yH1SNEe9CmxTVHAdme.png",
      title: "Metro Exodus",
      text: "Some info",
      pageLink: "#",
    },
  ];
  const [Deets, setDeets] = useState([]);
  const numb = 2;
  // const PersonNames = cardInfo.map(person => person.text) ;
  const renderCard = (card) => {
    return (
      <Card
        style={{ width: "18rem", padding: "1%" }}
        key={card.id}
        className="box"
        onClick={() => setDeets(card)}
      >
        <Card.Link href={card.pageLink}>
          <Card.Img variant="top" style={{ width: "100%" }} src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
    );
  };
  console.log(Deets);
  return (
    <div>
      <div className="grid">{cardInfo.map(renderCard)}</div>
      <Router>
        <Route exact path="/">
          <p>hello</p>
        </Route>
      </Router>
    </div>
  );
};

export default Cards;
