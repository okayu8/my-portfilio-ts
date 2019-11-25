import * as React from "react";
import styled from "styled-components";
import "./App.css";
import LogoImg from "./images/atomicstyle_logo_comic.png";
import Top from "./components/pages/top";
import Profile from "./components/pages/profile";
import SideBar from "./components/organisms/side-bar";
import Footer from "./components/organisms/footer";
import Ripples from "./components/atoms/ripples";
import {
  Route,
  // Link,
  HashRouter as Router
} from "react-router-dom";

class App extends React.Component {
  public render() {
    
    // 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
    const vh = window.innerHeight * 0.01;

    return (
      <Router>
        <div className="App">
          <ContentWrapper vh={vh}>
            <div className="App-content">
              <IMG src={LogoImg} />
              <StyledContent>
                <Route exact={true} path="/" component={Top} />
                <Route path="/profile" component={Profile} />
              </StyledContent>
            </div>
            <Footer />
            <SideBar />
            <RippeleWrapper>
              <Ripples
                width={840}
                height={840}
                vertical_top={-430}
                horizon_right={-430}
              />
              <Ripples
                width={840}
                height={840}
                vertical_top={-430}
                horizon_left={-430}
              />
            </RippeleWrapper>
          </ContentWrapper>
        </div>
      </Router>
    );
  }
}

interface IStylProps {
  vh: number;
}

const ContentWrapper = styled.div<IStylProps>`
  width: 100%;
  height: 100vh; /* 変数をサポートしていないブラウザのフォールバック */
  height: calc(var(${props => props.vh}, 1vh) * 100);
`

const IMG = styled.img`
  position: absolute;
  top: 16px;
  right: 4vw;
  width: 160px;

  @media only screen and (max-width: 780px) {
    width: 100px;
    top: 64px;
  }
`;

const StyledContent = styled.div`
  margin-left: 15vw;
  width: 80%;
  z-index: 1;
`;

const RippeleWrapper = styled.div`
  animation: fadeIn-0 5s ease 0s 1 normal;
  -webkit-animation: fadeIn-0 4s ease 0s 1 normal;
  z-index: 0;
  @keyframes fadeIn-0 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default App;
