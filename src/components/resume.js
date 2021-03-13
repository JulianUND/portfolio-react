import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                       <div style={{textAlign:'center'}}>
                           <img 
                                src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"
                                alt="avatar"
                                style={{height:'200px'}}
                           />
                       </div>
                       <h2 style={{paddingTop:'2em'}}>Julian Soto</h2>
                       <h4 style={{color:'grey'}}>Programmer</h4>
                       <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                       <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                       <h5>Address</h5>
                       <p>Street 55B #56-29</p>
                       <h5>Phone</h5>
                       <p>*** *** **62</p>
                       <h5>Email</h5>
                       <p>someome@example.com</p>
                       <h5>mysite.com</h5>
                       <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                   </Cell>
                   <Cell className="resume-rigth-col" col={8}>
                       <h2>Education</h2>
                       <Education 
                            startYear={2013}
                            endYear={2015}
                            schoolName="University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                       />
                       <Education 
                            startYear={2015}
                            endYear={2020}
                            schoolName="University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                        />
                       <hr style={{borderTop:'3px solid #e22947'}} />
                       <h2>Experience</h2>
                       <Experience 
                            startYear={2016}
                            endYear={2017}
                            jobName="First job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                       />
                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            jobName="Second job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                       />
                       <hr style={{borderTop:'3px solid #e22947'}} />
                       <h2>Skills</h2>
                       <Skills 
                            skill="Javascript"
                            progress={50}
                       />
                        <Skills 
                            skill="React"
                            progress={20}
                       />
                        <Skills 
                            skill="HTML | CSS"
                            progress={70}
                       />
                   </Cell>
               </Grid>
            </div>
        );
    }
}
 
export default Resume;
