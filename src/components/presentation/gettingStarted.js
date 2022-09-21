import React, { useEffect, useRef, useState } from 'react';
import {skinCodes} from '../../constants/typeCodes';
// import * as actionTypes from '../../actions/actionTypes';
// import { bindActionCreators } from 'redux';

// import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Lottie from 'lottie-web';
function GettingStarted(props) {
     let history = useHistory();
     const onChange = async (skinCd) => {

        // if(props.document.id){
        //     //  props.updateDocument(props.document.id, skinCd);        
        // }
        // else{
        //     //  props.setDocument(skinCd); 
        // }
        history.push('/contact');
      }

      const lottie ={
        width: 200,
        height: 200,
        overflow:"hidden",
        marginLeft:500,
        marginTop:20,
        marginBottom:100

      }


      const container = useRef(null);
      const [isLoaded, setIsLoaded] = useState(false);

      useEffect(() => {
        if (isLoaded) {
          Lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../../animation/48427-resume.json"),
          });
        } else {
          setIsLoaded(true);
        }
      }, [isLoaded]);
      
        return (  
            <div className="container med gettingStarted">
                <div style={lottie} ref={container}/>
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == 'demo-value'? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    
}
  


export default GettingStarted

