import React from 'react'
import { DateContext } from '../../context/DateProviderContext'

const Booking = () => {
  const { book, sDate, eDate } = React.useContext(DateContext);
  console.log(sDate, eDate,book);
  return (
    <div>
      <h1>giii</h1>
    </div>
  )
}

export default Booking
