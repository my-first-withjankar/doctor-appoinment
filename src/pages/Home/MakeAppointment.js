import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div
            style={{
                background: `url(${appointment})`
            }}
            className='flex mb-16 p-6'>
            <div className='flex-1 mt-[-150px] hidden lg:block'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 my-auto mx-auto'>
                <h3 className=' my-5 text-secondary font-bold text-xl'>Appointment</h3>
                <h4 className=' text-white my-5 text-4xl'>Make an appointment Today</h4>
                <p className='text-white pr-16'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className='my-5'>
                    <PrimaryButton>get started</PrimaryButton>
                </div>
            </div>
        </div >
    );
};

export default MakeAppointment;