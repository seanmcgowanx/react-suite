import React from 'react'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import dotPattern from '/src/images/dot-pattern.png'
import { TestimonialContext } from '/src/pages/Testimonials';

export default function Testimonial({ children }) {

    const context = React.useContext(TestimonialContext);
    const avatar = context ? context.avatar : null;
    const logo = context ? context.logo : null;

    return (
        <>
            <div className='testimonial-wrapper'>
                {avatar && <img className='avatar' src={avatar} alt="avatar" />}
                <div className={avatar ? "testimonial-with-avatar" : "testimonial-with-logo"}>
                    {!avatar && <img className='dot-pattern' src={dotPattern} alt="dot pattern" />}
                    {!avatar && logo && <img className="business-logo" src={logo} alt="business logo" style={{width: '2.5rem'}}/>}
                    {avatar && <BiSolidQuoteAltLeft className='quote-icon'/>}
                    {<div>
                        {children}
                    </div>}
                </div>
            </div>
        </>
    )
}