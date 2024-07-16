import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import { authContext } from '../context/AuthContext.jsx'
import { HashLoader } from 'react-spinners';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleInputChange = (e) => {
        console.log(e);
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const { dispatch } = useContext(authContext)
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const result = await res.json()
            console.log(result)
            if (!res.ok) {
                throw new Error(result.message)
            }
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    user: result.data,
                    token: result.token,
                    role: result.role
                }
            })
            setLoading(false)
            toast.success(result.message)
            navigate('/home')
        } catch (error) {
            toast.error(error.message)
        }
    }
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    return (
        <section className='px-5 lg:px-0'>
            <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 ">
                <h3 className='text-headingColor text-[22px] leading-9 font-blod mb-10 '>
                    Hello !
                    <span className='text-primaryColor  '>
                        Welcome
                    </span>
                    Back 🎉
                </h3>
                <form onSubmit={submitHandler} action="" className='py-4 md:py-0  '>
                    <div className='mb-5'>
                        <input type="email" placeholder='Enter your email'
                            value={formData.email}
                            onChange={handleInputChange}
                            name='email'
                            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer '
                            required />
                    </div>
                    <div className='mb-5'>
                        <input type="password" placeholder='Password'
                            value={formData.password}
                            onChange={handleInputChange}
                            name='password'
                            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer '
                            required />
                    </div>
                    <div className='mt-7'>
                        <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg  py-3 '>
                            {loading ? <HashLoader size={25} color='#fff' /> : 'Login'}
                        </button>
                    </div>
                    <p className='mt-5 text-textColor text-center '>
                        I have an account ? <Link className='text-primaryColor font-medium ml-1' to='/register'>Register </Link>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Login
