import React from 'react'
import { TestimonialContext } from '/src/pages/Testimonials';

export default function Author({ children }) {

    const context = React.useContext(TestimonialContext);
    const avatar = context ? context.avatar : null;

    return (
        <p className={avatar ? "author-with-avatar" : "author-with-logo"}>
            {children}
        </p>
    )
}