import React , {Component} from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class Project extends Component{
  constructor(props){
    super(props);
    this.state =  {activeTab: 0};
  }

toggleCategories(){
  if(this.state.activeTab === 0){
    return(
      <div className="projects-grid">
      {/*project 1*/}
      <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
        <CardTitle style={{color:'#fff',height:'176px',background :'#93291E'}}>Supplier Recommender System</CardTitle>
        <CardText>
        A web Application that links suppliers and consumers using Association Rule Mining(FP Growth Algorithm).
        </CardText>
        <CardActions border>
        <Button colored>Github </Button>
        <Button colored>Heroku </Button>
        </CardActions>
        <CardMenu style={{color:'#fff'}}>
        <IconButton name="share"/>
        </CardMenu>
     </Card>
     

   
   </div>
    )
     }else if (this.state.activeTab ===1) {
       return(
         <div className="projects-grid">
         {/*project 1*/}
         <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
           <CardTitle style={{color:'#fff',height:'176px',background :'#240b36'}}>Zen Shopping Cart</CardTitle>
           <CardText>
          A Web application that acts as a shopping Cart for accessories for Zen Followers.
           </CardText>
           <CardActions border>
           <Button colored>Github </Button>
           <Button colored>Heroku </Button>
           </CardActions>
           <CardMenu style={{color:'#fff'}}>
           <IconButton name="share"/>
           </CardMenu>
        </Card>
        </div>
        
       )

       
    }else if (this.state.activeTab ===2) {
      return(
        <div className="projects-grid">
        {/*project 1*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height:'176px',background :'#93291E'}}>Supplier Recommender System</CardTitle>
          <CardText>
          A web Application that links suppliers and consumers using Association Rule Mining(FP Growth Algorithm).
          </CardText>
          <CardActions border>
          <Button colored>Github </Button>
          <Button colored>Heroku </Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
          <IconButton name="share"/>
          </CardMenu>
       </Card>
       {/*project 2*/}
       <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
         <CardTitle style={{color:'#fff',height:'176px',background :'#94716E'}}>Find Tutor</CardTitle>
         <CardText>
        Still in development.
         </CardText>
         <CardActions border>
         <Button colored>Github </Button>
         <Button colored>Heroku </Button>
         </CardActions>
         <CardMenu style={{color:'#fff'}}>
         <IconButton name="share"/>
         </CardMenu>
      </Card>


     </div>
      )
   }
   else if (this.state.activeTab ===3) {
     return(
       <div className="projects-grid">
       {/*project 3*/}
       <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
         <CardTitle style={{color:'#fff',height:'176px',background :'#240b36'}}>Find Gardener</CardTitle>
         <CardText>
         Laravel Web Application for finding gardners using geolocation.
         </CardText>
         <CardActions border>
         <Button colored>Github </Button>
         <Button colored>Heroku </Button>
         </CardActions>
         <CardMenu style={{color:'#fff'}}>
         <IconButton name="share"/>
         </CardMenu>
      </Card>
      {/*project 2*/}
      <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
        <CardTitle style={{color:'#fff',height:'176px',background :'#6be585'}}>Some Projects under NDA</CardTitle>
        <CardText>
       ........
        </CardText>
        <CardActions border>
        <Button colored>Github </Button>
        <Button colored>Heroku </Button>
        </CardActions>
        <CardMenu style={{color:'#fff'}}>
        <IconButton name="share"/>
        </CardMenu>
     </Card>


    </div>
     )
  }else if (this.state.activeTab ===4) {
    return(
      <div className="projects-grid">
      {/*project 1*/}
      <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
        <CardTitle style={{color:'#fff',height:'176px',background :'#240b36'}}>Kutsvaka Basa</CardTitle>
        <CardText>
       My Personal website acting as my portfolio.
        </CardText>
        <CardActions border>
        <Button colored>Github </Button>
        <Button colored>Heroku </Button>
        </CardActions>
        <CardMenu style={{color:'#fff'}}>
        <IconButton name="share"/>
        </CardMenu>
     </Card>

   </div>
    )
 }else if (this.state.activeTab ===5) {
   return(
     <div className="projects-grid">
     {/*Ionic */}
     <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
       <CardTitle style={{color:'#fff',height:'176px',background :'#2C7744'}}>Dommasy</CardTitle>
       <CardText>
       Under NDA.
       </CardText>
       <CardActions border >
       <Button colored>Github </Button>
       <Button colored>Heroku </Button>
       </CardActions>
       <CardMenu style={{color:'#fff'}}>
       <IconButton name="share"/>
       </CardMenu>
    </Card>

   </div>
   )
}
  }

render(){
    return(
      <div className="category-tab">
       <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Python</Tab>
          <Tab>C#</Tab>
          <Tab>Flask</Tab>
          <Tab>Laravel</Tab>
          <Tab>Reactjs</Tab>
          <Tab>Ionic</Tab>
       </Tabs>

         <Grid>
           <Cell col={12}>
           {this.toggleCategories()}
           </Cell>
         </Grid>


      </div>
    )
  }
}

export default Project;
