import React, { Component } from 'react';


export default class Greetings extends Component{    
    constructor(){
        super();        
    }
    state = {
        sayGreet : '',
        motivasi : '',        
    }
    componentDidMount(){        
        let nm = localStorage.getItem('myName');
        while(nm == null || nm == "null"){
            console.log("hae");
            nm = prompt("What is Your Name");
            // setter
            localStorage.setItem('myName', nm);
        } 
        const date = new Date();        
        this.greetingTime(date, nm);        
    }    
    

    greetingTime = (times, nm) => {
        const Hours = times.getHours().toString();        
        const Minutes = times.getMinutes().toString();        
        // getter        
        nm = localStorage.getItem('myName');
    
        if (Hours == 23 && Minutes == 6 && (nm == "Dian" || nm == "dian" )){            
            this.setState({
                sayGreet: 'Love You, ' + nm
            })
        }         
        else if(Hours >= 6 && Hours < 12){
            this.setState({
                sayGreet: 'Good Morning, ' + nm
            })
        } else if (Hours >= 12 && Hours < 17){
            this.setState({
                sayGreet: 'Good Afternoon, ' + nm
            })
        }
        else if (Hours >= 17 && Hours < 21){
            this.setState({
                sayGreet: 'Good Evening, ' + nm
            })
        } else if ((Hours >= 21 && Hours <= 24)){
            this.setState({
                sayGreet: 'Good Night, ' + nm
            })
        } else if ((Hours >= 0 && Hours < 6)){
            this.setState({
                sayGreet: ''
            })
        }
    }
    

    render(){                     
        if(this.state.sayGreet == ''){
            return (
                <div>                   
                    <iframe src="https://giphy.com/embed/kIRicSBQwa23pYExQT" width="240" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>                                                                                                                                
                </div>
            )
        } else {
            return(
                <div>                                                         
                    <p className="says-text">
                        {
                            this.state.sayGreet 
                        }
                    </p>                                     
                </div>
            )
        }
                
    }
}