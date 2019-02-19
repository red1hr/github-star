import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import CardList from "./Components/CardList";

const Wrapper = styled.div`
  margin-top: 50px;
`;
const Title = styled.h1`
  margin-left: 30px;
  font-style: italic;
`;

class App extends Component {

  state = {
    topRepos: []
  }

  componentDidMount() {
    fetch(
      "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc"
    )
      .then(data => data.json())
      .then(result => {
        const topRepos = result.items.map(item => ({
          id: item.id,
          avatar: item.owner.avatar_url,
          name: item.name,
          description: item.description,
          stars: item.stargazers_count,
          issues: item.open_issues_count,
          date: item.created_at,
          owner: item.owner.logi
        }));

        this.setState({
          topRepos
        });

      });
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Wrapper>
          <Title>GitHub Star</Title>
          <CardList repos={this.state.topRepos} />
        </Wrapper>
      </React.Fragment>
    );
  }
}





const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  ol, ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  /* other styles */

  body {
    background-color: #f6f8fa;
    color: #24292e;
    font-family: 'Roboto', sans-serif;
  }
`;

export default App;
