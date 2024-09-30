import React from 'react'
import { TestimonialContext } from '/src/pages/Testimonials';

export default function Credential({ children }) {

    const context = React.useContext(TestimonialContext);
    const avatar = context ? context.avatar : null;

    return (
        <p className={avatar ? "credential-with-avatar" : "credential-with-logo"}>
            {children}
        </p>
    )
}