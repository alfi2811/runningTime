import React, { Component } from 'react';
import Select from 'react-select';

export default class Greetings extends Component{    
    constructor(){
        super();   
        this.state = {
            sayGreet : '',
            motivasi : '',   
            undur    : 0, 
            dataPuasa : 0,
            selectedNumber : null,    
        }        
    }    
    componentDidMount(){                          
        let nm = localStorage.getItem('myName');
        while(nm == null || nm == "null"){            
            nm = prompt("What is Your Name");
            // setter
            localStorage.setItem('myName', nm);
        } 
        const date = new Date();        
        this.greetingTime(date, nm);          
        let tgl = date.getDate();
        let bln = date.getMonth();
        if(bln != 4){
            console.log(date);
            this.setState({
                undur : tgl - 23 ,  
                dataPuasa : tgl - 23,               
            }) 
        } else {
            console.log("AYE");
            this.setState({
                undur : 7 + tgl,                              
                dataPuasa : 7 + tgl,
            }) 
        } 
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
    
    numberChange = selectedNumber  => {
        this.setState({ selectedNumber });        
        let ubah = this.state.dataPuasa - selectedNumber.value;
        console.log(ubah);
        if( ubah >= 0 ){
            this.setState({
                undur : ubah,
            }) 
        }          
    }

    render(){ 
        const { selectedNumber, dataPuasa } = this.state;                
        const options = [];  
        for (let i = 1; i <= dataPuasa; i++){
            options.push({
                value: i, label: i
            })
        }
        if(this.state.sayGreet == ''){
            return (
                <div>                   
                    <iframe src="https://giphy.com/embed/kIRicSBQwa23pYExQT" width="240" height="240" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>                                                                                                                                
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
                    {/* <p className="puasa">
                        Puasa Hari ke-
                        {
                            this.state.undur                          
                        }
                    </p>  
                    <div className="skipPuasa">  
                        <div className="textSkip">                            
                            <p>Sudah Berapa Kali Tidak Puasa? </p>
                        </div>
                        <div className="selectSkip">
                            <Select
                                placeholder = 'Choose'
                                value={selectedNumber}
                                onChange={this.numberChange}
                                options={options}
                            /> 
                        </div>                                             
                    </div>                                  */}
                </div>
            )
        }
                
    }
}