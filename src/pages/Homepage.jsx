import React, { useEffect, useRef, useState } from 'react'
import './style.css';
import laptop from '../assets/laptop-mokeup.png'
import mobile from "../assets/phone-background.png"
import services_icon from "../assets/Services Icon.png"
import whatsapp_icon from "../assets/WhatsApp-icon.png"
import insta_icon from "../assets/insta-icon.png"
import telegram_icon from "../assets/Telegram.png"
import { useLocation, useNavigate } from 'react-router-dom';


const Homepage = (props) => {


    const navigate = useNavigate();
    // const location = useLocation();
    const homeSectionRef = useRef(null);
    const servicesSectionRef = useRef(null);
    const plansSectionRef = useRef(null);
    const contactsSectionRef = useRef(null);


    useEffect(() => {
        // Scroll to the specific section when the route changes
        if (props.sectionRef && props.sectionRef === 'homeSectionRef') {
            homeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (props.sectionRef && props.sectionRef === 'servicesSectionRef') {
            servicesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (props.sectionRef && props.sectionRef === 'plansSectionRef') {
            plansSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (props.sectionRef && props.sectionRef === 'contactsSectionRef') {
            contactsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [props.sectionRef]);


    return (
        <>
            <div ref={homeSectionRef} className="body">
                <section id='laptop' className="laptop">
                    <div className="container">
                        <div className="c1">
                            <img src={laptop} alt="laptop" />
                        </div>
                        <div className="c2">
                            <h1>Experience Next Level trading with us !</h1>
                        </div>
                    </div>
                </section>

                <section className="mobile">
                    <div className="container">
                        <div className="c2">
                            <h1>Perfect Signals with 90% Accuracy</h1>
                        </div>
                        <div className="c1">
                            <img src={mobile} alt="laptop" />
                        </div>
                    </div>
                </section>

                <section ref={servicesSectionRef} id='services' className="services">
                    <div className="container">
                        <div className="title">
                            <h1>Our Products and Services</h1>
                            <p className="text">We provide convenient and highly accurate services which can boost your Trading Journey.</p>
                        </div>
                        <div className="content">
                            <div className="c1">
                                <img src={services_icon} alt="" />
                            </div>
                            <div className="c2">
                                <div className="glass" onClick={() => navigate('products',{replace:true})}>
                                    <h1>Indicator</h1>
                                    <p className="text">Get High Accuracy Indicators which are easy to use with tradingview</p>
                                </div>
                                <div className="glass" onClick={() => navigate('products')}>
                                    <h1>Bot</h1>
                                    <p className="text">Boost your earnings with our trading bots and save your time.</p>
                                </div>
                                <div className="glass" onClick={() => navigate('products')}>
                                    <h1>Account Handling</h1>
                                    <p className="text">We will trade for you. leave everything up to us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section ref={plansSectionRef} id='plans' className="plans">
                    <div className="container">
                        <div className="title">
                            <h1>Make the wise Decision for your bussiness</h1>
                            <p className="text">Choose from our alternate 3 package</p>
                        </div>
                        <div className="content">
                            <div className="c2">
                                <div className="glass" >
                                    <h1 className=' mb-3'>Indicator</h1>
                                    <p className="text">Get High Accuracy Indicators which are easy to use with tradingview</p>
                                </div>
                                <div className="glass" >
                                    <h1 className=' mb-3'>Bot</h1>
                                    <p className="text">Boost your earnings with our trading bots and save your time.</p>
                                </div>
                                <div className="glass" >
                                    <h1 className=' mb-3'>Account Handling</h1>
                                    <p className="text">We will trade for you. leave everything up to us.</p>
                                </div>
                            </div>
                            <div className="c1">
                                <h1>Indicators</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section ref={contactsSectionRef} id='contacts' className="contacts">
                    <div className="container">
                        <div className="title">
                            <h1>Contact us</h1>
                            <p className="text">We are eager to assist you any time.</p>
                        </div>
                        <div className="content">
                            <div className="r1">
                                <a href="https://wa.me/9373784639" target='_blank' rel="noopener noreferrer">
                                    <div className="glass" >
                                        <i><img src={whatsapp_icon} alt="" /></i>
                                        <h1>Whatsapp</h1>
                                    </div>
                                </a>
                            </div>
                            <div className="r2">
                                <div className="c1">
                                    <a href="https://instagram.com/ssvgfxstockgainer_indicators" target='_blank' rel="noopener noreferrer">
                                        <div className="glass">
                                            <i><img src={insta_icon} alt="" style={{ width: '48px' }} /></i>
                                            <h1>Instagram</h1>
                                        </div>
                                    </a>
                                </div>
                                <div className="c2">
                                    <a href="https://t.me/+919373784639" target='_blank' rel="noopener noreferrer">
                                        <div className="glass">
                                            <i><img src={telegram_icon} alt="" /></i>
                                            <h1>Telegram</h1>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}

export default Homepage