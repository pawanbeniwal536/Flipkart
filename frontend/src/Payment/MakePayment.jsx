import React from 'react'
import { useParams } from 'react-router-dom';

const MakePayment = () => {

  const { amount } = useParams();
  console.log('the amount is :',amount)

  return (
    <div>
      <h2>Make your payment from here </h2>
    </div>
  )
}

export default MakePayment
