import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Terms = () => {
    return (
        <div class="card card-side mb-16">
            <div className='flex-1'>
                <figure>
                    <img className='w-96 my-20 border rounded-lg'
                        src={treatment} alt="Movie" />
                </figure>
            </div>
            <div class="card-body my-auto flex-1 w-64">
                <h2 class="card-title text-bold text-3xl">Exceptional Dental Care, on Your Terms   </h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <div className='mx-auto my-12'>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Terms;