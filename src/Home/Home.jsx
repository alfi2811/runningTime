import React from 'react';
import Timer from "../component/Timer/Timer";
import Greetings from "../component/Greetings/Greetings";
import Feeling from '../component/Feeling/Feeling';

function Home(){
    return(
        <div>
            <Timer />
            <Greetings />       
            <Feeling /> 
        </div>
    )
}

export default Home;