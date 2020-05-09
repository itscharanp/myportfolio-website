import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profilech.png';
import Title from './Title';


class App extends Component {


    state = {displayBio : false};


    toggle = () =>{
        this.setState({displayBio : !this.state.displayBio });
    }

    render()
    {
            return(

            <div>
             <img src={profile} alt='profile'  className = 'profile'/> 
            <h1> My name is Charan.</h1>
             {this.state.displayBio ? <Title /> : null } 
            <p>Im always looking forward to work on meaningful projects </p>

            {

            this.state.displayBio ? (
            <div>
            <p>I Live in Hyderabad. </p> 
            <p>My favorite Languages are JS,Java </p>
            <p>Besides coding, I love music and biryani</p>  
            <button onClick={this.toggle}> Show Less </button> 
            </div>) : (
                  <div> 
                    <button onClick = {this.toggle} >Read more</button>     
                  </div>  
            )

            }
             <hr/>
             <Projects/>
             <hr/>
             <SocialProfiles /> 


            </div>


            )
    }
}
export default App;