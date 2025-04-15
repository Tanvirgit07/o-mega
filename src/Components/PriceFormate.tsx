import React from 'react'
interface Props {
    amount?: number;
}
function PriceFormate({amount}: Props) {
    const formattedPrice = new Number(amount).toLocaleString("en-Us",{
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    })
  return (
    <span className='font-medium'>
        {formattedPrice}
    </span>
  )
}

export default PriceFormate