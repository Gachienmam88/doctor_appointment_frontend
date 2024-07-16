import React, { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formatDate } from '../../utils/formatDate'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'
const Feedback = ({ reviews, totalRating }) => {
    const [showFeedbackForm, setShowFeedbackFrom] = useState(false);
    return (
        <div>
            <div className='mb=[50px] '>
                <h4 className='text-[20px] leading-[30px] font-bold text-textColor '>
                    All reviews ({totalRating})
                </h4>
                {reviews?.map((item, index) => {
                    return (
                        <>
                            <div key={index} className='flex justify-between gap-10 mt-[30px]  '>
                                <div className='flex gap-3'>
                                    <figure className='w-10 h-10 rounded-full  '>
                                        <img className='w-full h-full rounded-full' src={item?.user?.photo} alt="" />
                                    </figure>
                                    <div className=''>
                                        <h5 className='text-[16px] leading-6 text-primaryColor font-bold '>
                                            {item?.user?.name}
                                        </h5>
                                        <p className='text-[14px] leading-6 text-textColor  '>
                                            {formatDate(item?.createdAt)}
                                        </p>
                                        <p className='text__para mt-3 font-medium text-[15px] '>
                                            {item.reviewText}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-1' >
                                    {[...Array(item?.rating).keys()].map((_, index) => {
                                        return (
                                            <>
                                                <AiFillStar key={index} color='#0067FF' />
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            {
                !showFeedbackForm && <div className='text-center  '>
                    <button className='btn' onClick={() => {
                        setShowFeedbackFrom(true);
                    }}>
                        Give feedback
                    </button>
                </div>
            }
            {
                showFeedbackForm && <FeedbackForm />
            }
        </div>
    )
}

export default Feedback
