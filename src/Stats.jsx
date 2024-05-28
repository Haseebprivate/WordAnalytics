import React from 'react'

export default function Stats({
    numberOfCharacters, numberOfWords, instagramCharacterLeft, facebookCharacterLeft
}) {
  return (
    <section className='stats'>
       <Stat statNumber={numberOfWords} heading="Words" />
       <Stat statNumber={numberOfCharacters} heading="Characters" />
       <Stat statNumber={instagramCharacterLeft} heading="InstaGram" />
       <Stat statNumber={facebookCharacterLeft} heading="Facebook" />

    </section>
  )
}

function Stat({statNumber, heading}) {
    return (
        <section className='stat'>
            <span className={`stat__number ${statNumber < 0 ? 'stat__number--limit' : ''}`}>{statNumber}</span>
            <h2 className='second-heading'>{heading}</h2>
        </section>
    )
}