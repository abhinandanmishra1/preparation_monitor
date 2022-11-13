import React from 'react'
import Header from '../Header';
import Gym from '../Gym';
import CreateGymForm from '../Gym/CreateGymForm';

const Home = () => {
  return (
    <div className='w-full'>
      <Header />
      <div className='w-full flex'>
        <Gym />
        <CreateGymForm />
      </div>
    </div>
  )
}

export default Home