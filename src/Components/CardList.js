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
          {
              this.props.repos.map(item => {
                return (
                    <Card key={item.id} repo={item} />
                )
              })
          }
      </CardListItem>
    );
  }
}
