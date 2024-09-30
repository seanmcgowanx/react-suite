import React from 'react'
import Testimonial from '../components/testimonial/index'
import headshot from '../images/headshot.jpg'
import businessLogo from '../images/airbnb.svg'

/*

Testimonial Prop Options

avatar: (src) 
--or--
logo: (src)
color: 'royal'(default), 'silver', 'fire', 'forest', 'watermelon', 'dark'

*/

const TestimonialContext = React.createContext()

export default function Testimonials() {
    return (
        <>
            <div className='prop-options'>
                <h2 className='prop-options-title'>Testimonial Context Options</h2>
                <div className='prop-options-text'>
                    <span>&#8594; </span>
                    <span>[optional] </span>
                    <span className='red-text'>avatar: "./avatar-path"</span><span> (replace with path to your avatar), </span><br/>
                    <span>&#8594; </span>
                    <span>[optional] </span>
                    <span className='red-text'>logo: "./image-path"</span><span> (replace with the path to your icon image)</span><br/>
                </div>
            </div>
            <div className='card-example'>
                <h2 className='example-title'>Testimonial Component Example</h2>
                <p className='example'>
                    <span className='red-text'>{`<TestimonialContext.Provider value={{avatar: "./avatar-path"}}>`}</span><br/>
                    <span className='indent'></span><span className='red-text'>{`<Testimonial>`}</span><br/>
                    <span className='indent'></span><span className='red-text indent'>{`<Testimonial.Review>`}</span><br/>
                    <span className='indent'></span><span className='indent'></span><span className='indent'>Insert Testimonial Here</span><br/>
                    <span className='indent'></span><span className='red-text indent'>{`<Testimonial.Review>`}</span><br/>
                    <span className='indent'></span><span className='red-text indent'>{`<Testimonial.Author>`}</span><br/>
                    <span className='indent'></span><span className='indent'></span><span className='indent'>Author Name</span><br/>
                    <span className='indent'></span><span className='red-text indent'>{`<Testimonial.Author>`}</span><br/>
                    <span className='indent'></span><span className='red-text indent'>{`<Testimonial.Credential>`}</span><br/>
                    <span className='indent'></span><span className='indent'></span><span className='indent'>Author Credential</span><br/>
                    <span className='indent'></span><span className='red-text indent'>{`<Testimonial.Credential>`}</span><br/>
                    <span className='indent'></span><span className='red-text'>{`</Testimonial>`}</span><br/>
                    <span className='red-text'>{`<TestimonialContext.Provider>`}</span>
                </p>
            </div>
            <div className='testimonials'>
                <h3 className="testimonials-title">Testimonial with Avatar</h3>
                <div className='testimonials-with-avatar'>
                    <TestimonialContext.Provider value={{avatar: headshot}}>
                        <Testimonial>
                        <Testimonial.Review>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                        </Testimonial.Review>
                        <Testimonial.Author>
                            Author Name
                        </Testimonial.Author>
                        <Testimonial.Credential>
                            Author Credential
                        </Testimonial.Credential>
                        </Testimonial>
                    </TestimonialContext.Provider>
                </div>
                <h3 className="testimonials-title">Testimonial with Logo</h3>
                <div className='testimonials-with-logo'>
                    <TestimonialContext.Provider value={{logo: businessLogo}}>
                        <Testimonial>
                        <Testimonial.Review>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
                        </Testimonial.Review>
                        <Testimonial.Author>
                            Author Name
                        </Testimonial.Author>
                        <Testimonial.Credential>
                            Author Credential
                        </Testimonial.Credential>
                        </Testimonial>
                    </TestimonialContext.Provider>
                </div>
            </div>
        </>
    )
}

export {TestimonialContext}