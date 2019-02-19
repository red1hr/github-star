import React, { Component } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

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
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;

    background-color: #337ab7;

    margin-right: 5px;
`;

const PrimaryBadge = styled(Badge)`
    background-color: #337ab7;
`;

const DangerBadge = styled(Badge)`
    background-color: #ec3939;
`;

export default class Card extends Component {
  render() {
    return (
      <CardItem>
        <Avatar />
        <RepoInfo>
          <h2>Special title treatment</h2>
          <p style={{fontSize: 14}}>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <div>
            <PrimaryBadge>Starts 16k</PrimaryBadge>
            <DangerBadge>Issues 29</DangerBadge>
            <span>Submitted 30 day ago by red1hr</span>
          </div>
        </RepoInfo>
      </CardItem>
    );
  }
}
