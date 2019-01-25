import React ,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

import pic from './vic.jpeg';

class Landingpage extends Component{
  render(){
    return(
      <div style={{width:'100%',margin:'auto' }}>
          <Grid className='landingpage'>
            <Cell col = {12}>
              <img
              src={pic}
              alt="Avatar"
              className="avatar-img"
            />

            <div className="banner-text">
               <h1>Mobile & Web App Developer</h1>
               <hr/>
               <p>Python | C# | Flask | React.js | Laravel | Ionic</p>
            </div>

            <div className="socialinks">

            {/*linkedin profile*/}
            <a href="http://linkedin.com/in/vicet"  rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square "  aria-hidden="true"/>
            </a>

            {/*Github profile*/}
            <a href="https://github.com/zenvikkcode"  rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square "  aria-hidden="true"/>
            </a>

            {/*Twitter profile*/}
            <a href="https://twitter.com/victor_tigere"  rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square "  aria-hidden="true"/>
            </a>

            {/*Youtube profile*/}
            <a href="https://gitlab.com/codepalapa"  rel="noopener noreferrer" target="_blank">
            <i className="fab fa-gitlab-square"  aria-hidden="true"/>
            </a>
            </div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Landingpage;
