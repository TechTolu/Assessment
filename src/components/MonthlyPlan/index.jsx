import React, { useState } from 'react';
import arcade from '../../assets/imgs/icon-arcade.svg';
import advance from '../../assets/imgs/icon-advanced.svg';
import pro from '../../assets/imgs/icon-pro.svg';

const MonthlyPlan = ({ onNextStep, onPreviousStep }) => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };

  const ToggleButton = ({ value, onClick }) => (
    <label
      className={`relative inline-block w-14 h-7 cursor-pointer bg-${value ? 'blue' : 'gray'}-500 rounded-full`}
      onClick={onClick}
    >
      <div
        className={`absolute w-7 h-7 bg-white rounded-full transition-transform transform ${
          value ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
    </label>
  );

  const plans = {
    monthly: [
      { title: 'Arcade', price: '$90/month' },
      { title: 'Advanced', price: '$120/month' },
      { title: 'Pro', price: '$150/month' },
    ],
    yearly: [
      { title: 'Arcade', price: '$90/year', promo: '2 months free' },
      { title: 'Advanced', price: '$120/year', promo: '2 months free' },
      { title: 'Pro', price: '$150/year', promo: '2 months free' },
    ],
  };

  const selectedPlans = isYearly ? plans.yearly : plans.monthly;

  return (
    <div className='w-full bg-[white] h-full'>
      <div className='w-full'>
        <h1 className='font-bold text-2xl text-[#0b2d59]'>Select Your Plan</h1>
        <p className='text-base text-[#adadb1]'>
          You have the option of monthly or yearly billing.
        </p>

        <div className='flex flex-row gap-3 mt-[35px]'>
          {selectedPlans.map((plan, index) => (
            <div
              key={index}
              className='w-[120px] border border-[#837eb3] h-[130px] rounded bg-slate-100 p-3'
            >
              <img src={index === 0 ? arcade : index === 1 ? advance : pro} alt='' />
              <div>
                <p className='text-blue-900'>{plan.title}</p>
                <p className='text-sm text-slate-300'>{plan.price}</p>
                {plan.promo && <p className='text-xs'>{plan.promo}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='pt-[15px]'>
        <div className='flex flex-row w-[390px] h-[40px] bg-[#f8f9fe] rounded space-x-2 justify-center items-center mt-[20px]'>
          <p className={`text-sm ${!isYearly ? 'text-blue-900' : 'text-slate-400'}`}>
            Monthly
          </p>
          <ToggleButton value={isYearly} onClick={handleToggle} />
          <p className={`text-sm ${isYearly ? 'text-blue-900' : 'text-slate-400'}`}>
            Yearly
          </p>
        </div>

        <div className='w-full place-content-between mt-[30px] flex flex-row'>
          <button
            className='text-[#31435c]  w-[120px] h-[40px]'
            onClick={onPreviousStep}
          >
            Go Back
          </button>
          <button
            className='text-[#ffffff] rounded h-[40px] w-[120px] bg-[#03295a]'
            onClick={onNextStep}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonthlyPlan;
