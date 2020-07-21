import React from 'react';
import Sec1 from '../img/Web_design_PNG.png';
import useWebAnimations,{ flip } from '@wellyshen/use-web-animations';

export default () => {

    const { ref: ref1 } = useWebAnimations({keyframes: [
        {transform: 'translateX(0px)'},
        {transform: 'translateX(-10px)'},
        {transform: 'translateX(10px)'},
        {transform: 'translateX(0px)'}
      ],
      timing: {
        duration:5000,
        iterations: Infinity
      }
    })

    const { ref: ref2, getAnimation: btn } = useWebAnimations({...flip})

    return(
        <div className="container-fluid section1">
            <div className="container">
            <div className="row">
           
                <div className="six columns">
                  <h2>
                    WEB DEVELOPMENT
                  </h2>
                  <h4>
                    Using React-Hooks, Web Animations Api and Skeleton CSS. 
                  </h4>
                  <button ref={ref2} className="u-full-width button-primary" onClick={()=> btn().play()}><h6>Make Me Flip</h6></button>
                </div>
                <div className="six columns">
                    <img ref={ref1} src={Sec1}  width="75%" height="auto" alt="web-design"/>
                </div>
            </div>
          </div>
        </div>
    )
}