import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
    <>
        <p>I'd love to hear from you. Send a message below, or follow along with me on <a href="#" class="twit-link">Twitter</a>.</p>
                
        <form>
        <label name="name" class="name">Name</label>
            <input type="text" class="name-input" />
            <label name="email" class="name">Email</label>
            <input type="email" class="email-input" />
            <label name="textarea" class="name">Message</label>
            <textarea cols="75" rows="7"></textarea>
            <button type="submit">Send</button>
        </form>
        </>
    );
};

export default Contact;