import React from 'react';
import Sec2 from '../img/app_development_PNG.png';
import useWebAnimations, { shakeY } from '@wellyshen/use-web-animations';

export default () => {

    const { ref } = useWebAnimations({keyframes: [
        {transform: 'scale(0)'},
        {transform: 'scale(0.25)'},
        {transform: 'scale(0.5)'},
        {transform: 'scale(0.75)'},
        {transform: 'scale(1)'},
        {transform: 'scale(0.75)'},
        {transform: 'scale(0.5)'},
        {transform: 'scale(0)'},

      ],
      timing: {
        duration:10000,
        iterations: Infinity,
        easing: 'ease-in-out'
      }
    })

    const { ref: ref2, getAnimation: btn } = useWebAnimations({...shakeY})

    return(
        <div className="container-fluid section2">
            <div className="container">
            <div className="row">
            <div className="six columns">
                  <h2>
                    APP DEVELOPMENT
                  </h2>
                  <h4>
                    Using React-Hooks, Web Animations Api and Skeleton CSS. 
                  </h4>
                  <button ref={ref2} className="u-full-width button-primary" onClick={()=>btn().play()}><h6>Shake ME</h6></button>
                </div>
            <div className="six columns">
                    <img ref={ref} src={Sec2}  width="75%" height="auto" alt="web-design"/>
                </div>
                
               
            </div>
          </div>
        </div>
    )
}