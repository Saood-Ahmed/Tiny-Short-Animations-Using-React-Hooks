import React from 'react';
import head from '../img/Business_PNG.png';
import useWebAnimations,{ backInLeft, bounce } from '@wellyshen/use-web-animations';

export default () => {

  const { ref: ref1 } = useWebAnimations({keyframes: [
    {transform: 'translateY(0px)'},
    {transform: 'translateY(-10px)'},
    {transform: 'translateY(10px)'},
    {transform: 'translateY(0px)'}
  ],
  timing: {
    duration:5000,
    iterations: Infinity
  }
})

const { ref: ref2 } = useWebAnimations({...backInLeft})

const { ref: ref3, getAnimation: btnBounce } = useWebAnimations({...bounce})

    return(
        <div className="header container-fluid">
          <div className="container">
            <div className="row">
           
                <div className="six columns">
                  <h2 ref={ref2}>
                   PROJECT-4B
                  </h2>
                  <h4>
                    Using React-Hooks, Web Animations Api and Skeleton CSS. 
                  </h4>
                  <button ref={ref3} className="u-full-width button-primary" onClick={()=> btnBounce().play()}><h6>Click to BOUNCE!</h6></button>
                </div>
                <div className="six columns">
                    <img ref={ref1} src={head}  width="75%" height="auto" alt="header"/>
                </div>
            </div>
          </div>
        </div>
    )
}