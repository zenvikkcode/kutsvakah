import React , {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


import pic from './vic.jpeg';


class Resume extends Component{
  render(){
    return(
  <div  style={{width:'100%',margin:'auto' }}>
      <Grid className="resume-grid">
        <Cell col={4} style={{textAlign:'center'}}>

        <img
        src={pic}
        alt="Avatar"
        className="avatar-img"
        style={{height:'250px'}}
        />
        <h3 style={{paddingTop:'1em'}}>Victor E Tigere</h3>
        <h4 style={{color:'grey'}}>Software Developer</h4>
        <hr style={{borderTop:'3px solid #b31217',width:'50%',margin:'auto'}}/>

        <p style={{width:'75%' ,margin:'auto',paddingTop:'1em'}}>
        A self-motivated Software Engineering Graduate who is seeking to find an opportunity
        to work in an exciting and challenging working environment that will encourage to improve
        and learn new skills that will give the company and him the technological edge in the field of Software Engineering.
       </p>

       <hr style={{borderTop:'3px solid #b31217',width:'50%',margin:'auto'}}/>

        <h5>Address</h5>

         <p >4194 Katanga,Norton,Zimbabwe</p>
         <h5>Phone</h5>
         <p>+263 779 477473</p>
         <h5>Email</h5>
         <p>tigerevictoremmanuel@outlook.com</p>
         <hr style={{borderTop:'3px solid #b31217',width:'50%',margin:'auto'}}/>

        </Cell>


        <Cell className="resume-right-col" col={8}>
        <h3>Education</h3>
        <Education
        startYear={2008}
        endYear={2013}
        schoolName="St Mary Magdalene’s High School Nyanga"
        schoolDescription_1= "• 3 A Level’s Mathematics  Physics  Computer Studies" 
        schoolDescription_2= "• 10 O Level’s including Mathematics, English and Computing"
        /> 

        <Education
        startYear={2014}
        endYear={2018}
        schoolName="Harare Institute of Technology"
        schoolDescription="BTech (Hons) in Software Engineering. (2.1 Degree Class)"
        />

        <hr style={{borderTop:'3px solid #e22947'}}/>

        <h3>Experience</h3>

        <Experience
        startYear={2016}
        endYear={2017}
        Name="IT Intern : •  First Mutual Holdings"
        Description_1 = " • Software design and development for inhouse applications."
        Description_2 = "• Network and Database Administration.            "
        Description_3 = " • Support."
        Description_4 = " • Configuring and monitoring Business Application Systems and Computer resources."
        />

        <Experience
        startYear={2018}
        endYear={2019}
        Name="Software Developer : MRS Afrika"
        Description_5 = "• Software Analysis, Design and Documentation on the APPI Tool (current project)."
        Description_6 = "• Software Development using Laravel (current project, APPI Tool)."
        
        />

        <hr style={{borderTop:'3px solid #e22947', align:'center'}}/>
        <h3>Skills</h3>
        <Skills
        skill="Python"
        progress={80}
        />
        <Skills
        skill="C#"
        progress={70}
        />
        <Skills
        skill="Flask"
        progress={70}
        />
        <Skills
        skill="Ionic"
        progress={40}
        />
        <Skills
        skill="Laravel"
        progress={80}
        />
        <Skills
        skill="React.js"
        progress={90}
        />


        </Cell>

      </Grid>
    </div>
    )
  }
}

export default Resume;
