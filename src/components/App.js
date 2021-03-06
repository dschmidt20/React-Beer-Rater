import "../App.css";
import React, { useEffect, useState } from "react";
import MainBeerList from "./MainBeerList";
import BeerForm from "./BeerForm";
import FormSubmission from "./FormSubmission";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import Featured from "./Featured";
import DanielsFavs from "./DanielsFavs";
import HannahsFavs from "./HannahsFavs";
import HeroHeader from "./HeroHeader";

const { Footer, Header, Content } = Layout;

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
    console.log(avg+avg/5)
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
                src="https://loveincorporated.blob.core.windows.net/contentimages/main/31b9d195-01d5-4d75-93ef-5305a4063ce1-best-alcohol-free-beers.jpg"
              />
            ) : (
              <Featured featured={featured} />
            )}
              <Header style={{ background: '#d7d7d7', paddingTop: '60px', paddingBottom: '125px' }}>

                <Menu style={{ background: '#d7d7d7', borderBottom: '#d7d7d7' }} mode="horizontal">
                  {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Links"> */}
                    <Menu.Item key='5'>
                      {" "}
                      <NavLink to="/"><strong>Home</strong></NavLink>
                    </Menu.Item>
                    <Menu.Item key="6">
                      {" "}
                      <NavLink to="/beerform"><strong>Add New Beer</strong></NavLink>
                    </Menu.Item>
                    {/* <SubMenu key="sub3" title="Favorite Beers"> */}
                      <Menu.Item key="7">
                        <NavLink to="/hannahsfavs"><strong>Hannah's Favorites</strong></NavLink>
                      </Menu.Item>
                      <Menu.Item key="8">
                        <NavLink to="/danielsfavs"><strong>Daniel's Favorites</strong></NavLink>
                      </Menu.Item>
                    {/* </SubMenu>
                  </SubMenu> */}
                  {/* <NavBar /> */}
                </Menu>
              </Header>
            <Layout>
              <Content>
                <Route path="/danielsfavs">
                  <DanielsFavs daniel={daniel} handleVoteClick={handleVoteClick} />
                </Route>
                <Route path="/hannahsfavs">
                  <HannahsFavs hannah={hannah} handleVoteClick={handleVoteClick} />
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
            <Footer>Copyright &copy; Daniel & Hannah 2022</Footer>
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
