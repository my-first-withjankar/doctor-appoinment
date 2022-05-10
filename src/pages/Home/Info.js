import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoDetails from './InfoDetails';

const info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
            <InfoDetails bgColor='bg-gradient-to-r from-secondary  to-primary' cardTitle='Opening Hours' img={clock}></InfoDetails>
            <InfoDetails bgColor='bg-accent' cardTitle='Visit Our Location' img={marker}></InfoDetails>
            <InfoDetails bgColor='bg-gradient-to-r from-secondary  to-primary' cardTitle='Contact Us Now' img={phone}></InfoDetails>

        </div>
    );
};

export default info;