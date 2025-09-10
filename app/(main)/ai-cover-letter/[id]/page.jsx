import React from 'react'

const coverLetter = async ({params}) => {
    const id=await params.id;
  return <div>CoverLetter: {id}</div>
}

export default coverLetter;