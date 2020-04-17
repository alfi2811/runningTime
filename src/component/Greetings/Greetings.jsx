import React, { Component } from 'react';
import Select from 'react-select';


export default class Greetings extends Component{    
    state = {
        sayGreet : '',
        motivasi : '',
        selectedOption : null,
    }
    componentDidMount(){
        const date = new Date()
        this.greetingTime(date)  
    }
    feelChange = selectedOption  => {
        this.setState({ selectedOption });     
        console.log(selectedOption.value);
        if(selectedOption.value === 'kesel'){
            console.log("HAE");
            this.setState({
                motivasi: 'Kesel gara-gara rindu aku yah? heuhuehue coba deh liat foto aku, pasti tambah kesel :)'
            }) 
        } else if(selectedOption.value === 'badmood'){
            this.setState({
                motivasi:  'Aku harus apa nih biar ga badmood lagi? Pergi kerumah kamu? hehhehe :)'
            }) 
        } else if(selectedOption.value === 'happy'){            
            this.setState({
                motivasi : 'Bagus deh kalo Happy, boleh lah cerita kenapa bisa happy hehehhe :)'                                   
            })
        }  else if(selectedOption.value === 'mager'){
            this.setState({
                motivasi: 'Dian ga boleh magerr donggggg, Katanya mau IPK bagus hehehhe yok ah semangat :)'                       
            })
        }
        console.log(this.state.motivasi)
    }
    

    greetingTime = (times) => {
        const Hours = times.getHours().toString();        
        const nm = 'Dian'
        if(Hours >= 6 && Hours < 12){
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
        } else if ((Hours >= 21 && Hours <= 24) || (Hours >= 0 && Hours < 6)){
            this.setState({
                sayGreet: 'Good Night, ' + nm
            })
        }
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
                <p className="says-text">
                    {this.state.sayGreet}
                </p>                 
                <div className="selectStyle">
                    <Select
                        placeholder = 'Feeling Right Now'
                        value={selectedOption}
                        onChange={this.feelChange}
                        options={options}
                    />                      
                </div>   
                <p className="motivasi">{this.state.motivasi}</p>                        
            </div>
        )
    }
}