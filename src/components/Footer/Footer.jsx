import React from 'react'
import logo from '../../assets/images/logo.png'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
    const socialLinks = [
        {
            path: 'https://www.youtube.com/watch?v=K4_J3ShsUOY&t=5604s',
            icon: <AiFillYoutube className='group-hover:text-white w-4 h-5 ' />
        },
        {
            path: 'https://github.com/Gachienmam88',
            icon: <AiFillGithub className='group-hover:text-white w-4 h-5 ' />
        },
        {
            path: 'https://www.facebook.com/manh.chip.963',
            icon: <AiFillFacebook className='group-hover:text-white w-4 h-5 ' />
        }, {
            path: 'https://www.instagram.com/manhnohope123/',
            icon: <AiFillInstagram className='group-hover:text-white w-4 h-5 ' />
        }
    ]
    const quickLinks01 = [
        {
            path: "/home",
            display: 'Home'
        },
        {
            path: '/',
            display: 'About Us'
        }, {
            path: 'services',
            display: 'Services'
        }, {
            path: '/',
            display: 'Blog'
        }
    ]
    const quickLinks02 = [
        {
            path: '/find-a-doctor',
            display: 'find a doctors'
        }, {
            path: '/',
            display: 'Request an Appointment'
        }, {
            path: '/',
            display: 'Find a Location'
        }, {
            path: '/',
            display: 'Get a Opinion'
        }
    ]
    const quickLinks03 = [
        {
            path: '/',
            display: 'Donate'
        }, {
            path: '/contact',
            display: 'Contact us'
        }
    ]
    const year = new Date().getFullYear()
    return (
        <footer className='pb-16 pt-10'>
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px] ">
                    <div>
                        <img src={logo} alt="image" />
                        <p className='text-[16px] leading-7 font-[400] text-textColor mt-4 '>Copyright % {year} developed by Nguyen Trung Manh all right reserved . </p>
                        <div className='flex items-center gap-3 mt-4'>
                            {socialLinks.map((item, index) => {
                                return (
                                    <>
                                        <Link to={item.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none  '>
                                            {item.icon}
                                        </Link>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[20px] leading-[30px] font-[700]
                        mb-6 text-headingColor '>Quick links</h2>
                        <ul>
                            {quickLinks01.map((item, index) => {
                                return (
                                    <>
                                        <li key={index} className='mb-6'>
                                            <Link to={item.path} className='text-
                                            [16px] leading-7 font-400 text-textColor ' >
                                                {item.display}

                                            </Link>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[20px] leading-[30px] font-[700]
                        mb-6 text-headingColor '>I want to :</h2>
                        <ul>
                            {quickLinks02.map((item, index) => {
                                return (
                                    <>
                                        <li key={index} className='mb-6'>
                                            <Link to={item.path} className='text-
                                            [16px] leading-7 font-400 text-textColor ' >
                                                {item.display}

                                            </Link>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[20px] leading-[30px] font-[700]
                        mb-6 text-headingColor '>Support</h2>
                        <ul>
                            {quickLinks03.map((item, index) => {
                                return (
                                    <>
                                        <li key={index} className='mb-6'>
                                            <Link to={item.path} className='text-
                                            [16px] leading-7 font-400 text-textColor ' >
                                                {item.display}

                                            </Link>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
