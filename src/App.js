import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <div className="demo-big-content">
    <Layout >
        <Header className="header-color" title={<Link style={{textDecoration:'none',color:'white'}}
         to="/"> My Portfolio</Link>} scroll>
            <Navigation className="navigation-header">

            <Link to="/resume" >Resume</Link>
          
            <Link to="/profile" >Contact</Link>
          
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none',color:'black'}}
         to="/"> My Portfolio</Link>}>
        <Navigation>
        <Link to="/resume" style={{color:'black'}}>Resume</Link>
         <Link to="/profile" style={{color:'black'}}>Contact</Link>
         </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
      </div>

    );
  }
}

export default App;
