import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact" style={{ backgroundColor: 'lightgrey', padding: '20px' }}>
            <div className="contact-col">
                <h3>Send us a message
                </h3>
                <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#040a93" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176 0 384c0 35.3 28.7 64 64 64l296.2 0C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/></svg>&nbsp; team@neptribe.tech                    </li>
                    <li>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#040a93" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg> &nbsp; +977 9816494300                    </li>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#040a93" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>&nbsp;Bhairahawa, Rupandehi | Lumibini, Nepal
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form>
                    <label>Your name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required />
                    <label>Your Email</label>
                    <input type="email" name="email" placeholder="Enter your email id" required />
                    <label>Write your messages here</label>
                    <textarea name="message" rows="6" placeholder="Enter your message" required />
                    <div className="h-captcha" data-captcha="true" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" />
                    {/* <iframe src="https://newassets.hcaptcha.com/captcha/v1/503a6fc/static/hcaptcha.html#frame=checkbox&amp;id=0sxzfpm9akol&amp;host=greatstack.in&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=off&amp;custom=false&amp;hl=en&amp;tplinks=on&amp;pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&amp;sitekey=50b2fe65-b00b-4b9e-ad62-3ba471098be2&amp;theme=light&amp;origin=https%3A%2F%2Fgreatstack.in" tabindex="0" frameborder="0" scrolling="no" title="Widget containing checkbox for hCaptcha security challenge" data-hcaptcha-widget-id="0sxzfpm9akol" data-hcaptcha-response="" style={{ pointerEvents: 'auto', width: '303px', height: '78px', overflow: 'hidden' }}> */}
                    {/* </iframe> */}
                    <textarea id="h-captcha-response-0sxzfpm9akol" name="h-captcha-response" style={{ display: 'none' }}></textarea>
                </form>
                <button type="submit" className="btn dark-btn submit-btn">Submit now &nbsp;<i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Contact;
