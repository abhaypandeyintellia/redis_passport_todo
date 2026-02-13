import React from 'react'

const TopDriver = ({
    avatar,
    name,
    contact,
    orders,
    currency,
    income,
    className="",
    onClick
}) => {

    // const {name, contact, orders, currency, income} = data;

  return (
    <div className={`inline-flex flex-row justify-between items-center rounded-xl m-2 gap-10 ${className}`} onClick={onClick}>
        {/* left side */}
        <div className='flex flex-1 justify-center items-center'>
            <img src={avatar} alt="img" 
            className='w-14 h-14 rounded-lg object-cover'/>
            <div className='font-normal text-lg text-gray-800'>
                {name}<br/>
                <span className='text-sm text-gray-500'>{contact}</span>
            </div>
        </div>
        {/* right side */}
        <div className='text-right space-y-1 ml-3'>
            <div className='text-md text-gray-500'>orders: <span className='font-semibold text-gray-800'>{orders}</span></div>
            <div className='text-md text-gray-500 border-t border-t-gray-500/30'>income: <span className='font-semibold text-gray-800'>{currency} {income}</span></div>
        </div>
    </div>
  )
}

export default TopDriver;