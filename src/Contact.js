import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Css/Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({contactScr, setContactScr}) => {

  const notify = () => toast("Message sent");

  const form = useRef();
  const scroll = () => {
    if (contactScr) {
      window.scrollTo({
        top: form.current.parentElement.offsetTop,
        behavior: 'smooth'
      })
      setContactScr(false);
    }

  }
  useEffect(() => {
    scroll();
  }, [contactScr])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8on494n', 'template_vkq2jjj', form.current, '7SkPykjafwzhBxlVx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='contact' >
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail} className='contact__form'>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input id='send' onClick={notify} className='contact__button' type="submit" value="Send" />
        <ToastContainer />
      </form>
    </div>
  );
};

export default Contact