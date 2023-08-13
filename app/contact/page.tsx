'use client'

import { useState } from 'react';
import Contacts from '@/components/Contacts';
import Socials from '@/components/Socials';
import Input from '@/components/Input';
import Radio from '@/components/Radio';

interface IContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const PageContacts = () => {
  const [contactForm, setContactForm] = useState<IContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  function handleChangeInput(event: any) {
    const { name, value } = event.target as HTMLInputElement;
    setContactForm(prevContactForm => ({
      ...prevContactForm,
      [name]: value,
    }));
  }

  return (
    <>
      <h1 className="text-2xl xl:text-[40px] font-bold text-center mb-2.5 xl:mt-8">
        Contact Us
      </h1>
      <h4 className="text-sm xl:text-lg font-medium text-center text-[#717171] mb-5 xl:mb-12">
        Any question or remarks?<br className="sm:hidden" />
        Just write us a message!
      </h4>
      <div className="contact-form xl:flex mb-12">
        <div className="xl:w-[491px]">
          <div className="contact-information m-[-14px] xl:flex xl:flex-col xl:justify-between xl:m-[-10px] xl:h-[calc(100%+20px)]">
            <div className="text-xs text-center xl:text-left text-white">
              <h4 className="text-xl xl:text-2xl font-semibo mb-1.5">
                Contact Information
              </h4>
              <div className="text-xs xl:text-lg text-[#C9C9C9] mb-3">
                Say something to start a live chat!
              </div>
            </div>
            <Contacts />
            <Socials className="mt-14 mb-1.5" />
          </div>
        </div>
        <form className="mt-10 xl:flex-auto xl:px-8 xl:ml-2.5">
          <div className="xl:flex">
            <div className="xl:w-1/2 xl:px-5">
              <Input
                className="mb-5 xl:mb-11"
                label="First Name"
                type="text"
                name="firstName"
                value={contactForm.firstName}
                onChange={handleChangeInput}
              />
            </div>
            <div className="xl:w-1/2 xl:px-5">
              <Input
                className="mb-5 xl:mb-11"
                label="Last Name"
                type="text"
                name="lastName"
                value={contactForm.lastName}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="xl:flex">
            <div className="xl:w-1/2 xl:px-5">
              <Input
                className="mb-5 xl:mb-11"
                label="Email"
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleChangeInput}
              />
            </div>
            <div className="xl:w-1/2 xl:px-5">
              <Input
                className="mb-5 xl:mb-11"
                label="Phone Number"
                type="tel"
                name="phone"
                value={contactForm.phone}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="pt-1 pb-2.5 xl:px-5 xl:pb-7">
            <div className="text-sm font-semibold mb-2.5">
              Select Subject?
            </div>
            <div className="flex flex-wrap">
              <div className="w-2/4 xl:w-auto pb-3.5">
                <Radio
                  className="xl:mr-5"
                  label="General Inquiry"
                  name="subject"
                  value="subject1"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="w-2/4 xl:w-auto pb-3.5">
                <Radio
                  className="xl:mr-5"
                  label="General Inquiry"
                  name="subject"
                  value="subject2"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="w-2/4 xl:w-auto pb-3.5">
                <Radio
                  className="xl:mr-5"
                  label="General Inquiry"
                  name="subject"
                  value="subject3"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="w-2/4 xl:w-auto pb-3.5">
                <Radio
                  className="xl:mr-5"
                  label="General Inquiry"
                  name="subject"
                  value="subject4"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
          </div>
          <div className="xl:px-5">
            <Input
              className="mb-5 xl:mb-11"
              name="message"
              value={contactForm.message}
              placeholder="Write your message..."
              onChange={handleChangeInput}
            />
          </div>
          <div className="pt-1 mb-10 xl:mb-28 xl:px-5 xl:flex">
            <button
              type="button"
              className="base-button xl:ml-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PageContacts;