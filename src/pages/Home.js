import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CustomerRewars from '../Components/CustomerRewars';
import "../assets/css/style.css"

const Home = (props) => {
  const [data, setData] = useState([
    {
      "customer": "Vaibhav",
      "transaction": [
        {
          "date": "2024-01-15",
          "amount": 120
        },
        {
          "date": "2024-01-25",
          "amount": 75
        },
        {
          "date": "2024-02-10",
          "amount": 150
        },
        {
          "date": "2024-02-20",
          "amount": 45
        },
        {
          "date": "2024-03-5",
          "amount": 220
        }
      ]
    },
    {
      "customer": "VSS",
      "transaction": [
        {
          "date": "2024-01-15",
          "amount": 120
        },
        {
          "date": "2024-01-25",
          "amount": 75
        },

      ]
    }
  ])

  useEffect(() => {
    // fetch("../db/customers.json")
    //   .then((res) => res.json())
    //   .then((ele) => setData(ele))

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