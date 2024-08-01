import React from 'react'
import SearchBar from '../../components/SearchBar'
import Homepage from '../../components/Homepage'

const index = () => {
  return (
    <div className='px-4 sm:px-16 flex flex-col gap-8'>
      <div className='w-full bg-light py-12 rounded-lg flex justify-center items-center'>
        <SearchBar />
      </div>
      <div className='w-full py-12'>
        <Homepage />
      </div>
    </div>
  )
}

export default index