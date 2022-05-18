import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AvailableAppointments from './AvailableAppointment';
import AppointmentBanner from './AppointmentBanner'

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;