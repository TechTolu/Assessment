import React, { useState } from 'react';

const MonthlyPick = ({ onNextStep, onPreviousStep }) => {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (addon) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons((prevAddons) =>
        prevAddons.filter((selectedAddon) => selectedAddon !== addon)
      );
    } else {
      setSelectedAddons((prevAddons) => [...prevAddons, addon]);
    }
  };

  return (
    <div className='w-full bg-[white] h-full'>
      <div className='leading-8'>
        <p className='font-semibold text-2xl text-[#082c53]'>Pick add-ons</p>
        <p className='font-normal text-[#afafb7]'>
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className='mt-[15px] w-full'>
        <div className='w-full h-full'>
          
          <div className='flex flex-row w-[400px] h-[60px] bg-[#f8f9fe] rounded gap-4 justify-evenly items-center border-[#837eb3] border-[1px] mb-[10px]'>
            <div>
              <input
                type='checkbox'
                checked={selectedAddons.includes('Online Service')}
                onChange={() => toggleAddon('Online Service')}
              />
            </div>
            <div>
              <p className='text-xm text-[#2f4160]'>Online service</p>
              <p className='text-sm text-[#b4b4bc]'>Access to multiplayer games</p>
            </div>
            <p className='text-sm text-[#6256c7]'>+$1/mo</p>
          </div>

          
          <div className='flex flex-row w-[400px] h-[60px] bg-[#f8f9fe] rounded gap-4 justify-evenly items-center border-[#837eb3] border-[1px] mb-[10px]'>
            <div>
              <input
                type='checkbox'
                checked={selectedAddons.includes('Larger Storage')}
                onChange={() => toggleAddon('Larger Storage')}
              />
            </div>
            <div>
              <p className='text-xm text-[#2f4160]'>Larger storage</p>
              <p className='text-sm text-[#b4b4bc]'>Extra 1TB of cloud save</p>
            </div>
            <p className='text-sm text-[#6256c7]'>+$2/mo</p>
          </div>

          
          <div className='flex flex-row w-[400px] h-[60px] bg-[#f8f9fe] rounded gap-4 justify-evenly items-center border-[#eeedf0] border-[1px]'>
            <div>
              <input
                type='checkbox'
                checked={selectedAddons.includes('Customizable Profile')}
                onChange={() => toggleAddon('Customizable Profile')}
              />
            </div>
            <div>
              <p className='text-xm text-[#2f4160]'>Customizable profile</p>
              <p className='text-sm text-[#b4b4bc]'>Custom theme on your profile</p>
            </div>
            <p className='text-sm text-[#6256c7]'>+$2/mo</p>
          </div>
        </div>

        <div className='w-full place-content-between mt-[40px] flex flex-row'>
          <button className='text-[#b0b0ba] w-[120px] h-[40px]' onClick={onPreviousStep}>
            Go Back
          </button>
          <button className='text-white rounded h-[40px] w-[120px] bg-[#03295a]' onClick={onNextStep}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonthlyPick;
