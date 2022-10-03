import React from 'react'
// import Canva from '../components/Canva'
import dynamic from 'next/dynamic'

 const Canva = dynamic(() => import('../../components/Canva'), {
   ssr: false,
 })
function Editores() {
  return (
    <div><Canva /></div>
  )
}

export default Editores