import React, { Component } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

import * as moment from 'moment';

const CardItem = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin: 15px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.5s ease;

  display: flex;
`;

const RepoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Badge = styled.label`
  display: inline;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;

  background-color: #337ab7;

  margin-right: 5px;
`;

const PrimaryBadge = styled(Badge)`
  background-color: #337ab7;
`;

const DangerBadge = styled(Badge)`
  background-color: #df223a;
`;

export default class Card extends Component {

  kFormatter = num => {
    return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
  };

  render() {
    const {
      avatar,
      name,
      description,
      stars,
      issues,
      date,
      owner
    } = this.props.repo;
    return (
      <CardItem>
        <Avatar avatar={avatar} />
        <RepoInfo>
          <h2>{name}</h2>
          <p style={{ fontSize: 14 }}>{description}</p>
          <div>
            <PrimaryBadge>Starts {this.kFormatter(stars)}</PrimaryBadge>
            <DangerBadge>Issues {this.kFormatter(issues)}</DangerBadge>
            <span>
              Submitted {moment().from(date)} by {owner}
            </span>
          </div>
        </RepoInfo>
      </CardItem>
    );
  }
}
