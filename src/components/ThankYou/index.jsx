import React from 'react'
import thanks from '../../assets/imgs/icon-thank-you.svg'

const ThankYou = () => {
  return (
    <div className='flex place-content-center'>
        <div className='flex flex-col justify-center items-center pt-[90px]'> 
            <img className='mb-[20px]' src={thanks} alt=''/>
            <h1 className='font-bold text-3xl text-[#032959] mb-[10px]'>Thank You!</h1>
            <p className='text-[#b8b9bc] font-normal text-sm'>Thanks for confirming Your subscription! We hope you have<br/>
            fun using our platform. If you ever need support, please feel<br/>
            free to email us at support@loremgaming.com</p>
        </div>
    </div>
  )
}

export default ThankYou