import "../App.css";
import React, { useEffect, useState } from "react";
import MainBeerList from "./MainBeerList";
import BeerForm from "./BeerForm";
import FormSubmission from "./FormSubmission";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { Layout } from "antd";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import Featured from "./Featured";
import DanielsFavs from "./DanielsFavs";
import HannahsFavs from "./HannahsFavs";
import HeroHeader from "./HeroHeader";

const { SubMenu } = Menu;

const { Footer, Sider, Content, Header } = Layout;

const API = "http://localhost:3001/beers/";

function App() {
  const [beers, setBeers] = useState([]);
  const [updateBeers, setUpdateBeers] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [daniel, setDaniel] = useState([]);
  const [hannah, setHannah] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((beerData) => setBeers(beerData));
  }, [updateBeers]);

  useEffect(() => {
    handleFeatured();
    handleDaniel();
    handleHannah();
  }, [beers]);

  // add votes
  function handleVoteClick(id, votes) {
    fetch(API + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        votes: votes + 1,
      }),
    })
      .then((res) => res.json())
      // setUpdateBeers to trigger re-render with new vote
      .then(setUpdateBeers([updateBeers]));
  }

  function handleFeatured() {
    let count = 0;

    for (let i = 0; i < beers.length - 1; i++) {
      count += beers[i].votes;
    }

    let avg = count / (beers.length - 1);

    const featuredArray = beers.filter((beer) => beer.votes > avg + avg / 5);

    setFeatured([...featuredArray]);
  }

  function handleDaniel() {
    const danielsFavs = beers.filter((beer) => beer.daniel > 0);
    setDaniel([...danielsFavs]);
  }
  function handleHannah() {
    const hannahsFavs = beers.filter((beer) => beer.hannah > 0);
    setHannah([...hannahsFavs]);
  }

  function handleAddBeer(newBeer) {
    setBeers([...beers, newBeer]);
  }
  return (
    <div className="app">
      <BrowserRouter forceRefresh={true}>
        <Switch>
          <Layout>
          {window.location.pathname === '/' && <HeroHeader />}
            {window.location.pathname === "/danielsfavs" ||
            window.location.pathname === "/hannahsfavs" ? (
              <img
                className="group"
                src="https://previews.123rf.com/images/nyul/nyul1208/nyul120800329/14821374-group-of-happy-young-people-drinking-beer-having-fun-in-pub-laughing-.jpg"
              />
            ) : (
              <Featured featured={featured} />
            )}
              <Header style={{background: '#ce5f0448'}}>

                <Menu style={{ background: "none" }} mode="horizontal">
                  {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Links"> */}
                    <Menu.Item key="5">
                      {" "}
                      <NavLink to="/">Home</NavLink>
                    </Menu.Item>
                    <Menu.Item key="6">
                      {" "}
                      <NavLink to="/beerform">Add New Beer</NavLink>
                    </Menu.Item>
                    {/* <SubMenu key="sub3" title="Favorite Beers"> */}
                      <Menu.Item key="7">
                        <NavLink to="/hannahsfavs">Hannah's Favorites</NavLink>
                      </Menu.Item>
                      <Menu.Item key="8">
                        <NavLink to="/danielsfavs">Daniel's Favorites</NavLink>
                      </Menu.Item>
                    {/* </SubMenu>
                  </SubMenu> */}
                  {/* <NavBar /> */}
                </Menu>
              </Header>
            <Layout>
              <Content>
                <Route path="/danielsfavs">
                  <DanielsFavs daniel={daniel} />
                </Route>
                <Route path="/hannahsfavs">
                  <HannahsFavs hannah={hannah} />
                </Route>
                <Route path="/beerform">
                  <BeerForm onAddBeer={handleAddBeer} beers={beers} api={API} />
                </Route>
                <Route path="/thanks" component={FormSubmission} />
                <Route exact path="/">
                  <MainBeerList
                    beers={beers}
                    handleVoteClick={handleVoteClick}
                  />
                </Route>
              </Content>
            </Layout>
            {window.location.pathname === "/danielsfavs" ||
              window.location.pathname === "/hannahsfavs" ? <Featured featured={featured}  /> : null
              }
            <Footer>Created by Daniel and Hannah 2022</Footer>
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
