import React, { Component } from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types';


const AvatarWrapper = styled.div`
    width: 150px;
    background: #c5d2d9 no-repeat 50%;
    background-size: cover;
    display: block;
    margin-right: 15px;

    flex-shrink: 0;
`;



export default class Avatar extends Component {
  render() {
    return (
      <AvatarWrapper>
        <img src={this.props.avatar} alt="Owner avatar" />
      </AvatarWrapper>
    )
  }
}

Avatar.propTypes = {
    avatar: PropTypes.string.isRequired
}