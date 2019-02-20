import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Experience extends Component{
  render(){
    return(
      <Grid>

      <Cell col={4}>
      <p>{this.props.startYear} - {this.props.endYear}</p>
      </Cell>

      <Cell col={8}>
      <h4 style={{marginTop:'0px'}}>{this.props.Name}</h4>
      <list>
      <p>{this.props.Description_1}</p>
      <p>{this.props.Description_2}</p>
      <p>{this.props.Description_3}</p>
      <p>{this.props.Description_4}</p>
      <p>{this.props.Description_5}</p>
      <p>{this.props.Description_6}</p>
      </list>
      </Cell>


      </Grid>


    )
  }
}

export default Experience;
