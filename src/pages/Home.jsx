import React from 'react'
import icon from '../images/component-icon.jpg'
import Badge from '../components/Badge'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Testimonial from '../components/testimonial/index'
import headshot from '../images/headshot.jpg'
import businessLogo from '../images/airbnb.svg'
import { TestimonialContext } from '/src/pages/Testimonials';

export default function Home() {
    return (
        <>
            <img class="home-icon" src={icon} width="300px" style={{borderRadius: "10px"}} alt="icon" />
            <h1 class="home-title">Welcome to React Suite, a component library to help streamline your development</h1>
            <hr></hr>
            <div>
                <h2 class="home-section-title">Badges</h2>
                <div className='square-badges'>
                <div className="badges">
                    <Badge>Custom Text</Badge>
                    <Badge color="red">Custom Text</Badge>
                    <Badge color="yellow">Custom Text</Badge>
                    <Badge color="green">Custom Text</Badge>
                    <Badge color="blue">Custom Text</Badge>
                    <Badge color="purple">Custom Text</Badge>
                </div>
            </div>
            </div>
            <div>
            <h2 class="home-section-title">Banners</h2>
                <div className='single-line-banners'>
                <div className='banners'>
                        <Banner header="Update available"></Banner>
                        <Banner status="success" header="Congratulations!"></Banner>
                        <Banner status="error" header="There is a problem with your application"></Banner>
                        <Banner status="warning" header="Attention"></Banner>
                </div>
            </div>
            </div>
            <div>
            <h2 class="home-section-title">Cards</h2>
                <div className='cards-home'>
                    <Card icon="default" title="Easy Deployment" >
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                    <Card icon="default" color="silver" title="Easy Deployment" >
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                    <Card icon="default" color="fire" title="Easy Deployment" >
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                </div>
            </div>
            <div>
            <h2 class="home-section-title">Testimonials</h2>
                <div className='testimonials-with-logo'>
                    <TestimonialContext.Provider value={{avatar: headshot}}>
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
    );
}

