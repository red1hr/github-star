import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";

const CardListItem = styled.section`
  padding: 30px 60px;

  display: flex;
  flex-direction: column;
`;

export default class CardList extends Component {
  render() {
    return (
      <CardListItem>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardListItem>
    );
  }
}
