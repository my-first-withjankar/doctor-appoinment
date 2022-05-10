import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            description: ''
        },
        {
            _id: 2,
            img: cavity,
            title: 'Cavity Filling',
            description: ''
        },
        {
            _id: 3,
            img: whitening,
            title: 'Teeth Whitening',
            description: ''
        }
    ]
    return (
        <div className='mt-20 mb-10 '>
            <div className='text-center '>
                <h1 className='text-primary uppercase font-bold text-2xl'>Our Services</h1>
                <h1 className='text-3xl'>Service We Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 '>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;