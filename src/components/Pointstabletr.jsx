import React from 'react'
import mancity from '../resources/team-logos/man city.svg'

const Pointstabletr = ({ rank, img, club, mp, wins, draw, losses, gf, ga, gd, pts, streak }) => {
  return (
    <tr>
        {/* <td className='px-5 py-1'>1</td>
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
        <td className='px-5 py-1'>W W W W W</td> */}
        <td className='px-5 py-1'>{rank}</td>
        <td className='px-5 py-1'><img src={img} alt="" className='w-10'/></td> {/* Change this to dynamically load logos based on club */}
        <td className='px-5 py-1'>{club}</td>
        <td className='px-5 py-1'>{mp}</td>
        <td className='px-5 py-1'>{wins}</td>
        <td className='px-5 py-1'>{draw}</td>
        <td className='px-5 py-1'>{losses}</td>
        <td className='px-5 py-1'>{gf}</td>
        <td className='px-5 py-1'>{ga}</td>
        <td className='px-5 py-1'>{gd}</td>
        <td className='px-5 py-1'>{pts}</td>
        <td className='px-5 py-1'>{streak}</td>
    </tr>
  )
}

export default Pointstabletr