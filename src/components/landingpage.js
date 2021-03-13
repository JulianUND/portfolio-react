import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://i.ya-webdesign.com/images/png-avatar-4.png"
                        alt="avatar"
                        className="avatar-img"
                        ></img>

                        <div className="banner-text">
                            <h1>Web Developer</h1>
                            <hr />
                            <p>| HTML / CSS | Javascript | Bootstrap | React |</p>
            
                            <div className="social-links">
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/julian-salazar-31b919139/" rel="noopener noreferrer" tarjet="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/*GitHub*/}
                                <a href="https://github.com/JulianUND" tarjet="_blank">
                                    <i class="fa fa-github" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;