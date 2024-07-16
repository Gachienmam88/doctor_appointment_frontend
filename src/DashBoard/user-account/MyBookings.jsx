import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Loading from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'

const MyBookings = () => {
    const { data: appointments, loading, err } = useFetchData(`${BASE_URL}/users/appointments/my-appointment`)
    return (
        <div>
            {loading && !err && <Loading />}
            {err && !loading && <Error errMessage={err} />}
            {!loading && !err && <div className='grid grid-cols-1 lg:grid-cols-2 gap-5  '>
                {appointments.map((doctor, index) => {
                    return (
                        <>
                            <DoctorCard doctor={doctor} key={index} />
                        </>
                    )
                })}
            </div>}
            {!loading && !err && appointments.length === 0 && <h2 className='mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold   '>You did not book any appointment yet </h2>}
        </div>
    )
}

export default MyBookings
