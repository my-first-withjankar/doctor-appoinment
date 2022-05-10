import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus omnis soluta, saepe aliquam quaerat.</p>

            </div>
            <div className='flex align-center pb-6'>
                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ml-5">
                        <img className='' src={review.img} alt='' />
                    </div>
                </div>
                <div className='ml-5'>
                    <h3 className=''>{review.name}</h3>
                    <h3 className=''>{review.city}</h3>

                </div>
            </div>
        </div>
    );
};

export default Review;