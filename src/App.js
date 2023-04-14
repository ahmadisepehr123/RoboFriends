/* eslint-disable react/style-prop-object */
import React from "react";
import CardList from "./CardList";
import SerchBox from './SerchBox'
import './App.css'
import Scroll from './Scroll.js'
import ErrorBoundry from "./ErrorBoundry";

class App extends React.Component {
    constructor(){
        super()
        this.state ={
            robots : [],
            Serchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json())
        .then(users => this.setState({robots:users}))
        
    }

    onSerchChange=(event)=>{
        this.setState ({Serchfield:event.target.value});
    }

    render() {
        const filteredRobot = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.Serchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
               return(
                    <div class="rocket">
                    <div class="rocket-body">
                        <div class="body"></div>
                        <div class="fin fin-left"></div>
                        <div class="fin fin-right"></div>
                        <div class="window"></div>
                    </div>
                    <div class="exhaust-flame"></div>
                    <ul class="exhaust-fumes">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul class="star">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
               )
        } else{
            return (
                <div className="tc">
                    <h1 className="f1">Robo Friends</h1>
                    <SerchBox serchChange = {this.onSerchChange}/>
                    <Scroll>
                    <ErrorBoundry>
                        <CardList robots = {filteredRobot}/>
                    </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
        
    }
   
}

export default App;