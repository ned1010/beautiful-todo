import React from 'react'

function Error({error}) {
  return (
    <div className='error'>
        <h1>{error}</h1>
    </div>
  )
}

export default Error