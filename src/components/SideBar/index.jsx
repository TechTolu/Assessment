import React, { useState } from 'react';
import background from '../../assets/imgs/background.jpg';
import PersonalInfo from '../PersonalInfo';
import MonthlyPlan from '../MonthlyPlan';
import MonthlyPick from '../MonthlyPick';
import YearlyFinishUp from '../YearlyFinishUp';
import ThankYou from '../ThankYou';

const StepTitles = [
  'YOUR INFO',
  'SELECT PLAN',
  'ADD-ONS',
  'SUMMARY',
];

const SideBar = () => {
  const containerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [currentStep, setCurrentStep] = useState(1);

  const navigateNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const navigatePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const activeStyle = {
    borderRadius: '50%',
    border: '2px solid white',
    width: '40px',
    height: '40px',
    color: 'white',
  };

  const renderComponent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo onNextStep={navigateNext} />;
      case 2:
        return <MonthlyPlan onNextStep={navigateNext} onPreviousStep={navigatePrevious} />;
      case 3:
        return <MonthlyPick onNextStep={navigateNext} onPreviousStep={navigatePrevious} />;
      case 4:
        return <YearlyFinishUp onNextStep={navigateNext} onPreviousStep={navigatePrevious} />;
      case 5:
        return <ThankYou />;
      default:
        return null;
    }
  };

  return (
    <div className='bg-[#ffffff] w-[750px] h-[80%] rounded-lg flex flex-row p-[10px]'>
      <div className="w-[250px] h-full rounded-lg flex align-center justify-center" style={containerStyle}>
        <div>
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className={`w-[180px] flex between gap-3 pt-[20px] ${currentStep === step ? 'active-step' : ''}`}>
              <button
                className={`rounded-full border-white border-2 w-[40px] h-[40px] text-white ${currentStep === step ? 'active-button' : ''}`}
                onClick={() => setCurrentStep(step)}
                style={{
                  ...activeStyle,
                  background: currentStep === step ? '#bee5fd' : '#483eff',
                }}
              >
                {step}
              </button>
              <div className='flex flex-col'>
                <p className='text-sm text-white'>{`STEP ${step}`}</p>
                <h1 className='text-white'>{StepTitles[step - 1]}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-[#ffffff] w-[500px] h-full px-[50px] pt-[40px] pb-[10px]'>
        {renderComponent()}
      </div>
    </div>
  );
};

export default SideBar;
