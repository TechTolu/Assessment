import React from 'react'

const YearlyFinishUp = ({onNextStep, onPreviousStep}) => {
  return (
    <div className='flex place-content-center w-full'>
        <div className='w-full'>
        <div className='leading-8'>
            <p className='font-semibold text-2xl text-[#1b3450]'>Finishing up</p>
            <p className='font-normal text-[#a4a5a9]'>Double-check everything looks OK before confirming.</p>
        </div>
        <div className='mt-[15px] w-full'>
            <div className=''>
            <div className='w-full h-[180px] bg-[#f8f9fe] rounded gap-4 flex flex-col justify-center items-center p-[5%]'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='leading'>
                        <p className='font-semibold text-[#2e3f5a]'>Arcade (Yearly)</p>
                        <p className='text-[#bbbbc5] font-normal text-sm'>Change</p>
                    </div>
                    <p className='font-semibold text-[#2e3f5a]'>$90/yr</p>
                </div>
                <div className='w-full border-slate-400 border-2'></div>
                <div className='flex flex-col justify-between items-center w-full'>
                    <div className='flex flex-row leading justify-between w-full'>
                        <p className='text-[#bbbbc5] font-normal text-sm'>Online service</p>
                        <p className='text-blue-900 font-normal text-sm'>+$10/yr</p>
                    </div>

                    <div className='flex flex-row leading-9 justify-between w-full'>
                        <p className='text-[#bbbbc5] font-normal text-sm'>Larger storage</p>
                        <p className='text-[#445263] font-normal text-sm'>+$20/yr</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row gap-20 pt-[15px] justify-between items-center '>
                <p className='text-slate-400 font-normal text-sm'>Total (per year)</p>
                <p className='text-[#4f44cf] font-semibold text-xm'>+$120/yr</p>
            </div>
            </div> 

            <div className='w-full place-content-between mt-[30px] flex flex-row'>
            <button className='text-[#b0b0ba] w-[120px] h-[40px]' onClick={onPreviousStep}>Go Back</button>    
            <button className='text-white rounded h-[40px] w-[120px] bg-[#483eff]' onClick={onNextStep}>Confirm</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default YearlyFinishUp