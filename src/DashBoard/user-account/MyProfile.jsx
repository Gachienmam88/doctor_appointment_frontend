import React, { useEffect, useState } from 'react'


import { useNavigate } from 'react-router-dom'
import uploadCloudinary from '../../utils/uploadCloudinary'
import { BASE_URL, token } from '../../config'
import { toast } from 'react-toastify'
import { HashLoader } from 'react-spinners'
const MyProfile = ({ user }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    useEffect(() => {
        setFormData({ name: user.name, email: user.email, photo: user.photo, gender: user.gender, bloodType: user.bloodType })
    }, [user])
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        photo: null,
        gender: 'male',
        bloodType: ''
    })
    const [loading, setLoading] = useState(false)
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate();
    const handleFileInputChange = async (e) => {
        const file = e.target.files[0]
        const data = await uploadCloudinary(file)
        setSelectedFile(file.name)
        setFormData({ ...formData, photo: data.url })
        //Phan 3 dung cloudnaru gi do dung de upload file

    }
    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch(`${BASE_URL}/users/${user._id}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token()}`
                },
                body: JSON.stringify(formData)
            })
            const { message } = await res.json()
            if (!res.ok) {
                throw new Error(message)
            }
            console.log(message)
            setLoading(false)
            toast.success(message)
            navigate('/users/profile/me')
        } catch (error) {
            toast.error(error.message)
            setLoading(false)
        }
    }
    return (
        <div className='mt-10'>
            <form onSubmit={submitHandler} action="">
                <div className='mb-5'>
                    <input type="text" placeholder='Full Name'
                        value={formData.name}
                        onChange={handleInputChange}
                        name='name'
                        className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer '
                        required />
                </div>
                <div className='mb-5'>
                    <input type="email" placeholder='Enter your email'
                        value={formData.email}
                        onChange={handleInputChange}
                        name='email'
                        className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer '
                        aria-readonly readOnly />
                </div>
                <div className='mb-5'>
                    <input type="password" placeholder='Enter your password'
                        value={formData.password}
                        onChange={handleInputChange}
                        name='password'
                        className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer '
                        readOnly aria-readonly disabled={true}
                    />
                </div>
                <div className='mb-5'>
                    <input type="text" placeholder='Enter your blood type'
                        value={formData.bloodType}
                        onChange={handleInputChange}
                        name='bloodType'
                        className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer '
                        required />
                </div>
                <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7 '>
                    Gender
                    <select name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 '>
                        <option value="male">
                            Male
                        </option>
                        <option value="female">
                            Female
                        </option>
                        <option value="other">
                            Other
                        </option>
                    </select>
                </label>
                <div className='mb-5 flex items-center gap-3 '>
                    {formData.photo &&
                        <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center ' >
                            <img src={formData.photo} alt="" className='w-full h-full rounded-full' />
                        </figure>
                    }
                    <div className='relative w-[130px] h-[50px] '>
                        <input type="file" name='photo' id='customFile' className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' onChange={handleFileInputChange} accept='.jpg,.png' />
                        <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066FF46] text-headingColor font-semibold rounded-lg truncate cursor-pointer' >
                            {selectedFile ? selectedFile : 'Upload photo'}
                        </label>
                    </div>
                </div>
                <div className='mt-7'>
                    <button disabled={loading && true} type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg  py-3 '>
                        {loading ? <HashLoader size={35} color='#fff' /> : 'Update'}
                    </button>
                </div>
                {/* <p className='mt-5 text-textColor text-center '>
                                You already have account ? <Link className='text-primaryColor font-medium ml-1' to='/login'>Login </Link>
                            </p> */}
            </form>
        </div>
    )
}

export default MyProfile
