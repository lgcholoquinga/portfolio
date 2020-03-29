import React from 'react';
import '../styles/Contact.css';
import Icon from './Icon';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <h2 className="contact-title" id="contact">¿Shall we create something together?</h2>
                <div className="row contact-row">
                    <div className="col contact-col">
                        <div className="contact-email">
                            <i className="contact-email-color">
                                <Icon size="2.2rem" icon="email" />
                            </i>
                            <h4>luisg.choloquinga@gmail.com</h4>
                        </div>
                    </div>
                    <div className="col contact-col">
                        <div className="contact-phone">
                            <i className="contact-phone-color">
                                <Icon size="2.2rem" icon="phone" />
                            </i>
                            <h4>(+593) 0987846972</h4>
                        </div>
                    </div>
                    <div className="col-12 contact-col">
                        <div className="contact-network">
                            <a href='https://www.facebook.com/luis.cocha.549' target='_blank' rel='noopener noreferrer'>
                                <i>
                                    <Icon size='2.8rem' icon='facebook' />
                                </i>
                            </a>
                            <a href='https://www.linkedin.com/in/luis-choloquinga-389134192/' target='_blank' rel='noopener noreferrer'>
                                <i>
                                    <Icon size='2.8rem' icon='linkedin' />
                                </i>
                            </a>
                            <a href='https://github.com/lgcholoquinga' target='_blank' rel='noopener noreferrer'>
                                <i>
                                    <Icon size='2.8rem' icon='github' />
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
