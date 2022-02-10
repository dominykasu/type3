import React from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
    // { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    // { option: '1', style: { backgroundColor: 'white' } },
    { option: '0' },
    {option:"1", style: { backgroundColor: 'red' }},
    { option: '2' },
    {option:"3", style: { backgroundColor: 'red' }},
    { option: '4' },
    {option:"5", style: { backgroundColor: 'red' }},
    { option: '6' },
    {option:"7", style: { backgroundColor: 'red' }},
    { option: '8' },
    {option:"9", style: { backgroundColor: 'red' }},
    { option: '10' },
    {option:"11", style: { backgroundColor: 'red' }},
    { option: '12' },
    {option:"13", style: { backgroundColor: 'red' }},
    { option: '14' },
    {option:"15", style: { backgroundColor: 'red' }},

]
const prizeNumber = Math.round(Math.random()*data.length-1)

export default ({mustSpin, stopSpin, getWinNumber, setWinNumber}) => (
    <>
        <Wheel
            onStopSpinning = {stopSpin}
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={['#3e3e3e', '#df3428']}
            textColors={['#ffffff']}

        />
    </>
)