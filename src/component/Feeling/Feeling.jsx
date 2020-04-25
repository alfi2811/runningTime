import React, { Component } from 'react';
import Select from 'react-select';


export default class Feeling extends Component{    
    state = {
        motivasi : '',
        selectedOption : null,
    }    
    feelChange = selectedOption  => {
        this.setState({ selectedOption });     
        console.log(selectedOption.value);
        if(selectedOption.value === 'kesel'){            
            this.setState({
                motivasi: 'Kesel? Kenapa kesel? Cerita dong. Jangan ketika lagi bahagia baru cerita, ketika kesal pun harus bercerita, ok!'
            }) 
        } else if(selectedOption.value === 'badmood'){
            this.setState({
                motivasi:  'coba dengarkan lagu yang membuat mood mu naik. Lagunya jangan yang galau ya! Yang happy, seperi lagunya Randy Pandugo - Float in the sky. '
            }) 
        } else if(selectedOption.value === 'happy'){            
            this.setState({
                motivasi : 'Happy kenapa nih? Boleh dong cerita. Kalo udah happy jangan sampe badmood yaaaa!'                                   
            })
        }  else if(selectedOption.value === 'mager'){
            let nm = localStorage.getItem('myName');
            this.setState({
                motivasi: 'Hey ' + nm + ' jangan mager ya, tetep semangat buat ngerjain tugasnya. Kalo udah ambis jangan lupa istirahat ya. Tubuh juga butuh istirahat, bukan hati doangan hehe. '                       
            })
        }
        console.log(this.state.motivasi)
    }        
    

    render(){  
        const { selectedOption } = this.state;
        const options = [
            {value: 'kesel', label: 'Kesel'},
            {value: 'badmood', label: 'Badmood'},
            {value: 'happy', label: 'Happy'},
            {value: 'mager', label: 'Mager'}
        ]      
        
            return(
                <div>                
                    <p className="labelF">Feeling Right Now</p>
                    <div className="selectStyle">                    
                        <Select
                            placeholder = 'Choose'
                            value={selectedOption}
                            onChange={this.feelChange}
                            options={options}
                        />                      
                    </div> 
                    <div style={{
                        width: '50vw',
                        margin: '0 auto'
                    }}>
                        <p className="motivasi">{this.state.motivasi}</p>                                        
                    </div>                                                                          
                </div>
            )        
                
    }
}