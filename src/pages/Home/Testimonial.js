import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Harry',
            img: people1,
            city: 'california'
        },
        {
            _id: 2,
            name: 'justin Harry',
            img: people2,
            city: 'california'
        },
        {
            _id: 3,
            name: 'Abrahama Harry',
            img: people3,
            city: 'california'
        }
    ]
    return (
        <div className=' mb-24'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-secondary font-bold text-xl'>Testimonial</h3>
                    <h1 className='text-xl lg:text-3xl'>What Our Patients Says</h1>
                </div>
                <div >
                    <img className='lg:w-48 w-12' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =>
                        <Review
                            key={review._id}
                            review={review}>

                        </Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;