import React from 'react';



const infoDetails = ({ img, cardTitle, bgColor }) => {
    return (
        <div class={`card lg:card-side  shadow-xl ${bgColor}`}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body text-white    ">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default infoDetails;