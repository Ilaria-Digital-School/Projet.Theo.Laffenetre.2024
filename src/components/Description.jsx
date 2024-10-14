import '../style/Description.css';
import AboutTexte1 from './AboutTexte1';
import AboutTexte2 from './AboutTexte2';
import AboutTexte3 from './AboutTexte3';
import MagneticGrid from './SplineScene/magneticGrid';
import Bulb from './SplineScene/bulb';
import Dropdown from './SplineScene/Dropdown';
import React from 'react';
import { useMediaQuery } from '@mui/material';


function Description() {

    const isMobile = useMediaQuery('(max-width:800px)');

    return (

        <div className='description-container'>
            <div className='flex-container'>
                <AboutTexte1 />
                {!isMobile && (
                    <div className='description-anim'>
                        <MagneticGrid />
                    </div>
                )}
            </div>
            <div className='flex-container reverse'>
                {!isMobile && (
                    <div className='description-anim'>
                        <Bulb />
                    </div>
                    )}
                <AboutTexte2 />
            </div>
            <div className='flex-container'>
                <AboutTexte3 />
                {!isMobile && (
                    <div className='description-anim'>
                        <Dropdown />
                    </div>
                )}
            </div>
        </div>
    );

};

export default Description;