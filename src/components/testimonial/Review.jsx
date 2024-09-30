import React from 'react'
import { TestimonialContext } from '/src/pages/Testimonials';

export default function Review({ children }) {

    const context = React.useContext(TestimonialContext);
    const avatar = context ? context.avatar : null;

    return (
        <p className={avatar ? "review-with-avatar" : "review-with-logo"}>
            {children}
        </p>
    )
}