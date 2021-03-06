import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';



const headerElement = () => {
    return(
        <div>
            <div>
                <HeaderTitle />
            </div>
            <div className="p" >
                <p>
                    Begin by exploring the `components` directory. You'll notice we have a
                    few files that we've already included in there to get you started right
                    away building components. You'll need to make sure you include your
                    components that you build in this file to watch your app come to life
                </p>
            </div>
        </div>
    );
};
    
export default headerElement;