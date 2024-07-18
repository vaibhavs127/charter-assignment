import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CustomerRewars from '../Components/CustomerRewars';
import "../assets/css/style.css"

const Home = (props) => {
  const [data, setData] = useState([

  ])

  useEffect(() => {
    axios.get("/Customer.json")
      .then((ele) => setData(ele.data))
      .catch((err) => console.log(err))

  }, [])

  return (
    <>
      <div className='home'>
        <h1>Customer Rewards</h1>
        {data?.map((res) => (
          <CustomerRewars key={res.customer} customerData={res} />
        ))}
      </div>

    </>
  )
}

export default Home