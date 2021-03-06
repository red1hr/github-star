import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

import Card from "./Card";

const CardListItem = styled.section`
  padding: 30px 60px;

  display: flex;
  flex-direction: column;
`;




export default class CardList extends Component {
  render() {
    return (
      <CardListItem id="reposlist">
          {
              this.props.repos.map(item => {
                return (
                    <Card key={item.id} {...item} />
                )
              })
          }
      </CardListItem>
    );
  }
}

CardList.propTypes = {
    repos: PropTypes.array
}