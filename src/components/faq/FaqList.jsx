import React from 'react'
import { faqs } from '../../assets/data/faqs'
import FaqItem from './FaqItem'
const FaqList = () => {
    return (
        <ul className='mt-[38px] '>
            {faqs.map((item, index) => {
                return (
                    <>
                        <FaqItem item={item} index={index} key={index} />
                    </>
                )
            })}
        </ul>
    )
}

export default FaqList
