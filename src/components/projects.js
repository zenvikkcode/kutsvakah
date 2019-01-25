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
        <CardTitle style={{color:'#fff',height:'176px',background :'#240b36'}}>Domasy</CardTitle>
        <CardText>
        An Agricultural based mobile application for allowing farmers to market products using blockchain technology.
        </CardText>
        <CardActions border>
        <Button colored>Github </Button>
        <Button colored>CodePen </Button>
        <Button colored>Heroku </Button>
        </CardActions>
        <CardMenu style={{color:'#fff'}}>
        <IconButton name="share"/>
        </CardMenu>
     </Card>
     {/*project 2*/}
     <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
       <CardTitle style={{color:'#fff',height:'176px',background :'#8E0E00'}}>Kutsvaka Basa</CardTitle>
       <CardText>
       Web based resume ,that has been developed using Reactjs.It works as a resume for anyone to use when job application.
       </CardText>
       <CardActions border>
       <Button colored>Github </Button>
       <Button colored>CodePen </Button>
       <Button colored>Heroku </Button>
       </CardActions>
       <CardMenu style={{color:'#fff'}}>
       <IconButton name="share"/>
       </CardMenu>
    </Card>

    {/*project 3*/}
    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
      <CardTitle style={{color:'#fff',height:'176px',background :'#240b36'}}>Varimi</CardTitle>
      <CardText>
      Web based marketing tool for farmers working on Valley Foods.
      </CardText>
      <CardActions border>
      <Button colored>Github </Button>
      <Button colored>CodePen </Button>
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
           <CardTitle style={{color:'#fff',height:'176px',background :'#240b36'}}>MullaCoin</CardTitle>
           <CardText>
          Digital Curreny mobile app which allows farmers to trade commodities using blockchain technology.
           </CardText>
           <CardActions border>
           <Button colored>Github </Button>
           <Button colored>CodePen </Button>
           <Button colored>Heroku </Button>
           </CardActions>
           <CardMenu style={{color:'#fff'}}>
           <IconButton name="share"/>
           </CardMenu>
        </Card>
        {/*project 2*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height:'176px',background :'#94716B'}}>Den Papi</CardTitle>
          <CardText>
        React.js web application allowing varsity students to find homes to stay during tution period
          </CardText>
          <CardActions border>
          <Button colored>Github </Button>
          <Button colored>CodePen </Button>
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
          <CardTitle style={{color:'#fff',height:'176px',background :'#93291E'}}>Domasy</CardTitle>
          <CardText>
          You won’t ﬁnd a list of every Python web framework available here.
          Rather, you’ll ﬁnd a nice concise list of highly recommended options
          </CardText>
          <CardActions border>
          <Button colored>Github </Button>
          <Button colored>CodePen </Button>
          <Button colored>Heroku </Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
          <IconButton name="share"/>
          </CardMenu>
       </Card>
       {/*project 2*/}
       <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
         <CardTitle style={{color:'#fff',height:'176px',background :'##94716B'}}>Kutsvaka Basa</CardTitle>
         <CardText>
         You won’t ﬁnd a list of every Python web framework available here.
         Rather, you’ll ﬁnd a nice concise list of highly recommended options
         </CardText>
         <CardActions border>
         <Button colored>Github </Button>
         <Button colored>CodePen </Button>
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
       {/*project 1*/}
       <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
         <CardTitle style={{color:'#fff',height:'176px',background :'#240b36'}}>Domasy</CardTitle>
         <CardText>
         You won’t ﬁnd a list of every Python web framework available here.
         Rather, you’ll ﬁnd a nice concise list of highly recommended options
         </CardText>
         <CardActions border>
         <Button colored>Github </Button>
         <Button colored>CodePen </Button>
         <Button colored>Heroku </Button>
         </CardActions>
         <CardMenu style={{color:'#fff'}}>
         <IconButton name="share"/>
         </CardMenu>
      </Card>
      {/*project 2*/}
      <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
        <CardTitle style={{color:'#fff',height:'176px',background :'#240b36'}}>Kutsvaka Basa</CardTitle>
        <CardText>
        You won’t ﬁnd a list of every Python web framework available here.
        Rather, you’ll ﬁnd a nice concise list of highly recommended options
        </CardText>
        <CardActions border>
        <Button colored>Github </Button>
        <Button colored>CodePen </Button>
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
        <CardTitle style={{color:'#fff',height:'176px',background :'#240b36'}}>Domasy</CardTitle>
        <CardText>
        You won’t ﬁnd a list of every Python web framework available here.
        Rather, you’ll ﬁnd a nice concise list of highly recommended options
        </CardText>
        <CardActions border>
        <Button colored>Github </Button>
        <Button colored>CodePen </Button>
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
       <CardTitle style={{color:'#fff',height:'176px',background :'#240b36'}}>My Profile</CardTitle>
       <CardText>
       You won’t ﬁnd a list of every Python web framework available here.
       Rather, you’ll ﬁnd a nice concise list of highly recommended options
       </CardText>
       <CardActions border>
       <Button colored>Github </Button>
       <Button colored>CodePen </Button>
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
          <Tab>ASP.NET</Tab>
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
