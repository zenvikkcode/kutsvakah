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
         to="/"> <h3> My Portfolio</h3> </Link>} scroll>
            <Navigation className="navigation-header">

            <Link to="/resume" ><h6>Resume</h6></Link>
            <Link to="/projects" ><h6>Projects</h6></Link>
            <Link to="/profile" ><h6>Contact</h6></Link>
          
            </Navigation>
        </Header>
        <Drawer className ="drawer" title={<Link style={{textDecoration:'none',color:'black'}}
         to="/"> <h3>My Portfolio</h3></Link>}>
        <Navigation>
        <Link to="/resume" style={{color:'black'}}><h6>Resume</h6></Link>
        <Link to="/projects" style={{color:'black'}}><h6>Projects</h6></Link>
         <Link to="/profile" style={{color:'black'}}><h6>Contact</h6></Link>
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
