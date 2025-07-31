import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PageHeaderContent from '../../components/pageHeaderContent';
import { FaPaperPlane } from 'react-icons/fa';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles.scss';

const Contact = () => {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ro930l1',     // EmailJS service ID
            'template_npu97sd',    // template ID
            form.current,
            '3TEnnAXtFZDnuwdu9'      //  public key
        ).then(
            () => {
                setSubmitted(true);
                form.current.reset();
                setTimeout(() => setSubmitted(false), 4000);
            },
            (error) => {
                console.error('Failed to send:', error);
            }
        );
    };

    return (
        <section id="contact" className="contact">
            <PageHeaderContent headerText="Contact" icon={<FaPaperPlane size={40} />} />

            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
                    <VerticalTimelineElement
                        iconStyle={{
                            background: 'var(--yellow-theme-background-color)',
                            color: 'var(--yellow-theme-main-color)',
                        }}
                        icon={<FaPaperPlane />}
                        contentStyle={{
                            background: 'transparent',
                            border: '1.5px solid var(--yellow-theme-main-color)',
                            color: 'var(--yellow-theme-sub-text-color)',
                        }}
                    >
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                        />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{
                            background: 'var(--yellow-theme-background-color)',
                            color: 'var(--yellow-theme-main-color)',
                        }}
                        icon={<FaPaperPlane />}
                        contentStyle={{
                            background: 'transparent',
                            border: '1.5px solid var(--yellow-theme-main-color)',
                            color: 'var(--yellow-theme-sub-text-color)',
                        }}
                    >
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            required
                        />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{
                            background: 'var(--yellow-theme-background-color)',
                            color: 'var(--yellow-theme-main-color)',
                        }}
                        icon={<FaPaperPlane />}
                        contentStyle={{
                            background: 'transparent',
                            border: '1.5px solid var(--yellow-theme-main-color)',
                            color: 'var(--yellow-theme-sub-text-color)',
                        }}
                    >
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            required
                        ></textarea>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{
                            background: 'var(--yellow-theme-main-color)',
                            color: '#000',
                        }}
                        icon={<FaPaperPlane />}
                        contentStyle={{
                            background: 'transparent',
                            border: '1.5px solid var(--yellow-theme-main-color)',
                            color: 'var(--yellow-theme-sub-text-color)',
                            textAlign: 'center',
                        }}
                    >
                        <button type="submit">Send Message</button>
                        {submitted && (
                            <p className="contact__success">✅ Message sent successfully! <br />
                                We'll get back to you soon.
                            </p>
                        )}
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </form>
        </section>
    );
};

export default Contact;
