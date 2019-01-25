import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';



class About extends Component{

  render(){
    return(
      <Grid className="about-grid">
           <Cell col={6}>
           left
           </Cell>

           <Cell col={6}>
           right
           </Cell>


      </Grid>

    )
  }
}

export default About;
