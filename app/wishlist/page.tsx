import React from 'react'
import { NextResponse } from 'next/server'
const page = () => {
  const res= NextResponse.next().cookies
  console.log(res);
  
  return (
    <div>page</div>
  )
}

export default page