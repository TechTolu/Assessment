import React, { useState } from 'react';

const PersonalInfo = ({ onNextStep }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validateEmail = () => {
    const emailRegex =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      setTimeout(() => {
        setEmailError('');
      }, 5000);
      return false;
    }

    return true;
  };

  const validatePhoneNumber = () => {
    const phoneRegex = /^\+?[0-9]\d{0,17}$/;

    if (!phoneRegex.test(phoneNumber)) {
      setPhoneNumberError('Please enter a valid phone number.');
      setTimeout(() => {
        setPhoneNumberError('');
      }, 5000);
      return false;
    }

    return true;
  };

  const handleNextStep = () => {
    if (!name || !validateEmail() || !validatePhoneNumber()) {
      return;
    }

    
    onNextStep();
  };

  return (
    <div className='w-full bg-[white] h-full'>
      <div>
        <h1 className='font-bold text-2xl text-[#0d2648]'>Personal Info</h1>
        <p className='text-sm text-[#a6a6ad] font-normal'>
          Please provide your name, email address, and phone number.
        </p>

        <form className='flex flex-col gap-3 mt-[25px]'>
          <div className='flex flex-col'>
            <label className='text-[#152535]'>Name</label>
            <input
              className='w-full h-[35px] border-[#e9e8eb] border rounded text-blue-950'
              placeholder='Vanessa Mint'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-[#152535]'>Email Address</label>
            <input
              className={`w-full h-[35px] border-[#e6e0f2] border rounded ${
                emailError ? 'border-red-500' : ''
              }`}
              placeholder='Vanessamint@'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className='text-red-500 text-xs'>{emailError}</p>
            )}
          </div>

          <div className='flex flex-col'>
            <label className='text-[#152535]'>Phone Number</label>
            <input
              className={`w-full h-[35px] border-[#ffeff6] border rounded ${
                phoneNumberError ? 'border-red-500' : ''
              }`}
              placeholder='e.g. +1 234 567 890'
              type='text'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {phoneNumberError && (
              <p className='text-red-500 text-xs'>{phoneNumberError}</p>
            )}
          </div>
        </form>

        <div className='justify-end w-full flex mt-[50px]'>
          <button
            className='text-white rounded h-[35px] w-[120px] bg-[#174a8b]'
            onClick={handleNextStep}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
