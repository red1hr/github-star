import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

import Card from "./Card";

const CardListItem = styled.section`
  padding: 30px 60px;

  display: flex;
  flex-direction: column;
`;


CardList.propTypes = {
    repos: PropTypes.array
}

export default class CardList extends Component {
  render() {
    return (
      <CardListItem id="reposlist">
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
