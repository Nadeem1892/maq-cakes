import React from 'react'
import Listing from './Listing'

type Props = {}

function ListingWrapper({}: Props) {
  return (
    <div className='mt-32 mb-20'>
        <Listing/>
    </div>
    
  )
}

export default ListingWrapper