import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/">Home</Link>} scroll>
                <Navigation>
                    <Link to="/resume"><strong>Resume</strong></Link>
                    <Link to="/Projects"><strong>Projects</strong></Link>
                    <Link to="/contact"><strong>Contact</strong></Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration:'none', color:'Black'}} to="/">Home</Link>}>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>
  );
}

export default App;
