import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import '../index.css';

const Cards = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg className="photo" top width="100%" src={require('./joker.jpg')} alt="Card image cap"  />
        <CardBody>
          <CardTitle style={{fontSize:"25px"}}>JOKER</CardTitle>
          <CardSubtitle style={{marginTop:"20px", fontSize:"25px"}}>Category : Thriller</CardSubtitle>
          <CardText style={{marginTop:"10px", fontSize:"16px"}}>Il raconte, dans une histoire originale, la transformation d'Arthur Fleck en Joker, un dangereux tueur psychopathe qui deviendra, par la suite, le plus grand ennemi de Batman.</CardText>
          <Button>WATCH</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg className="photo" top width="100%" src={require('./the-100.jpg')} alt="Card image cap" />
        <CardBody>
          <CardTitle  style={{fontSize:"25px"}}>THE 100</CardTitle>
          <CardSubtitle style={{marginTop:"20px", fontSize:"25px"}}>Category : American Serie</CardSubtitle>
          <CardText style={{marginTop:"10px", fontSize:"16px"}}>La série décrit le parcours de survivants humains à bord d'une station spatiale suite à un cataclysme nucléaire ayant ravagé la Terre et décimé sa population un siècle auparavant, puis le retour sur Terre d'un groupe de cent jeunes personnes toutes mineures et leur survie face à de multiples dangers inconnus.</CardText>
          <Button>WATCH</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg className="photo" top width="100%" src={require('./mulan.jpg')} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{fontSize:"25px"}}>MULAN</CardTitle>
          <CardSubtitle style={{marginTop:"20px", fontSize:"25px"}}>Category : American Action drama film</CardSubtitle>
          <CardText style={{marginTop:"10px", fontSize:"16px"}}>inspiré du personnage légendaire chinois, Hua Mulan. Le film s'inscrit dans une volonté de Walt Disney Pictures d'adapter en films en prises de vues réelles ses films d’animation.</CardText>
          <Button>WATCH</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Cards;