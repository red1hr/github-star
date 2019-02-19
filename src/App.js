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
    topRepos: [],
    page: 1,
    hasMoreRepos: true
  };

  loadRepos = () => {
    const { page, topRepos } = this.state;
    const url = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`;
    fetch(url)
      .then(response => {
        if (response.status === 403) {
          console.log("No More Repos...");
          this.setState({ hasMoreRepos: false });
        } else {
          return response.json();
        }
      })
      .then(json => {
        if (json.items) {
          const repos = json.items.map((item, index) => ({
            id: item.git_url + index, // Duplicate Key Problem
            avatar: item.owner.avatar_url,
            name: item.name,
            description: item.description,
            stars: item.stargazers_count,
            issues: item.open_issues_count,
            date: item.created_at,
            owner: item.owner.login
          }));

          this.setState({
            topRepos: [...topRepos, ...repos]
          });
        } else {
          this.setState({ hasMoreRepos: false });
        }
      })
      .catch(err => {
        console.log("an error occurred -> ", err);
      });
  };

  loadMore = () => {
    if (!this.state.hasMoreRepos) return;

    this.setState(
      prevState => ({
        page: prevState.page + 1
      }),
      this.loadRepos
    );
  };

  handleScroll = () => {
    var lastelm = document.querySelector("section#reposlist > div:last-child");

    var lastelmOffset = lastelm.offsetTop + lastelm.clientHeight;
    var pageOffset = window.pageYOffset + window.innerHeight;

    if (pageOffset > lastelmOffset) {
      this.loadMore();
    }
  };

  componentWillMount() {
    this.loadRepos();
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />

        <Wrapper
          ref={scroller => {
            this.scroller = scroller;
          }}
        >
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
