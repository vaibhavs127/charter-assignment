import React, { useEffect } from 'react'

const RewardsTable = (props) => {

  useEffect(() => {

    console.log(props,"test");
  }, [props?.monthlyRewards])
  return (
    <>
      <ul className='rewardTable'>
        {Object.keys(props?.monthlyRewards).map((res) => (
          <li key={res}>
            {res}:<b>{props?.monthlyRewards[res]}</b> points
          </li>
        ))}
      </ul>
    </>
  )
}

export default RewardsTable