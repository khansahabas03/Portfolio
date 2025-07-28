import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { FaPaperPlane } from 'react-icons/fa';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles.scss';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <PageHeaderContent headerText="Contact" icon={<FaPaperPlane size={40} />} />

            <form className="contact__form" onSubmit={handleSubmit}>
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
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
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
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.message}
                            onChange={handleChange}
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
                            <p className="contact__success">✅ Message sent successfully!</p>
                        )}
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </form>
        </section>
    );
};

export default Contact;
