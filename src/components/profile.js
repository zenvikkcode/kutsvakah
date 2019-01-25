import React,{Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';

import pic from './vic.jpeg';
class Profile extends Component{
  render(){
    return(
      <div className="contact-body">
       <Grid className="contact-grid">

        <Cell col={6}>
         <h2>Victor Tigere</h2>
          <img
          src={pic}
          alt="avatar"
          className="avatar-img"
          style={{height:'250px'}}
          />

          <p style={{width:'75%' ,margin:'auto',paddingTop:'1em'}}>
          An enthusiastic web and mobile app developer who has found joy in software development and continuous improvement in writing code.
           I like learning new technologies and I am big fan of Machine Learning and Artificial Intelligence.
          </p>

        </Cell>

         <Cell col={6}>
         <h2>Contact Me</h2>
         <hr/>

        <div className="contact-list">
        < List>
         <ListItem>
           <ListItemContent style={{fontSize: '25px',fontFamily:'Anton'}}>
           <i className="fa fa-phone-square" aria-hidden="true"/>
           +263 779477473
           </ListItemContent>
          </ListItem>

          <ListItem>
            <ListItemContent style={{fontSize: '25px',fontFamily:'Anton'}}>
            <i className="fa fa-envelope" aria-hidden="true"/>
            tigerevictoremmanuel@outlook.com
            </ListItemContent>
           </ListItem>

           <ListItem>
             <ListItemContent style={{fontSize: '25px',fontFamily:'Anton'}}>
             <i className="fa fa-linkedin" aria-hidden="true"/>
             tigerevice@gmail.com
             </ListItemContent>
            </ListItem>

           <ListItem>
             <ListItemContent style={{fontSize: '25px',fontFamily:'Anton'}}>
             <i className="fa fa-twitter" aria-hidden="true"/>
             @victor_tigere
             </ListItemContent>
            </ListItem>


         </List>
         </div>


         </Cell>

       </Grid>
      </div>
    )
  }
}

export default Profile;
