import "../App.css";
import React, { useEffect, useState } from "react";
import MainBeerList from "./MainBeerList";
import BeerForm from "./BeerForm";
import LikedBeerList from "./LikedBeerList";
import FormSubmission from "./FormSubmission";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";


const { SubMenu } = Menu;


const { Header, Footer, Sider, Content } = Layout;

const API = "http://localhost:3001/beers/";

function App() {
  const [beers, setBeers] = useState([]);
  const [updateBeers, setUpdateBeers] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((beerData) => setBeers(beerData));
  }, [updateBeers]);

  useEffect(() => {
    handleFeatured();
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

    const featuredArray = beers.filter(beer => beer.votes > (avg + (avg/5)));

    setFeatured([...featuredArray]);
  }

  function handleAddBeer(newBeer) {
    setBeers([...beers, newBeer]);
  }

  return (
    <div className="app">
        <BrowserRouter>
          <Switch>
      <Layout>
        <Header style={{ background: "none" }}>Header</Header>
        <Layout>
          <Sider style={{ background: "none" }}>
            <Menu style={{ background: "none" }}  mode="inline">
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Links">
          <Menu.Item key="5"> <NavLink to="/">Home</NavLink></Menu.Item>
          <Menu.Item key="6"> <NavLink to="/beerform">Add New Beer</NavLink></Menu.Item>
          <SubMenu key="sub3" title="Favorite Beers">
          <Menu.Item key="9"><NavLink to='/usersfavs'></NavLink>Our Users' Favorites</Menu.Item>

            <Menu.Item key="7"><NavLink to='/hannahsfavs'>Hannah's Favorites</NavLink> </Menu.Item>
            <Menu.Item key="8"><NavLink to='/danielsfavs'>Daniel's Favorites</NavLink></Menu.Item>
          </SubMenu>
        </SubMenu>
              {/* <NavBar /> */}
            </Menu>
          </Sider>
          <Content>
            <Route path="/likedbeers">
              <LikedBeerList />
            </Route>
            <Route path="/beerform">
              <BeerForm onAddBeer={handleAddBeer} api={API} />
            </Route>
            <Route path="/thanks" component={FormSubmission} />
            <Route exact path="/">
              <MainBeerList beers={beers} handleVoteClick={handleVoteClick} />
            </Route>
        </Content>

        </Layout>
        
        <Footer>Created by Daniel and Hannah 2022</Footer>
      </Layout>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
