import React from 'react'
import mancity from '../resources/team-logos/man city.svg'

const Pointstabletr = () => {
  return (
    <tr>
        <td className='px-5 py-1'>1</td>
        <td className='px-5 py-1'><img src={mancity} alt="" className='w-10'/></td>
        <td className='px-5 py-1'>Man City</td>
        <td className='px-5 py-1'>38</td>
        <td className='px-5 py-1'>28</td>
        <td className='px-5 py-1'>7</td>
        <td className='px-5 py-1'>3</td>
        <td className='px-5 py-1'>96</td>
        <td className='px-5 py-1'>34</td>
        <td className='px-5 py-1'>62</td>
        <td className='px-5 py-1'>91</td>
        <td className='px-5 py-1'>W W W W W</td>
    </tr>
  )
}

export default Pointstabletr