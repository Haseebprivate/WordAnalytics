import {useState} from 'react'
import TextArea from './TextArea'
import Stats from './Stats'


export default function Container() {
  const [text, setText] = useState('')
  const numberOfWords =  text.split(/\s/).filter((word) => word !== '').length
  const numberOfCharacters = text.length
  const instagramCharacterLeft = 280 - numberOfCharacters
  const facebookCharacterLeft = 2200 - numberOfCharacters

  return (
    <main className='container'>
      <TextArea text={text} setText={setText} />
      <Stats numberOfCharacters={numberOfCharacters} numberOfWords={numberOfWords} instagramCharacterLeft={instagramCharacterLeft} facebookCharacterLeft={facebookCharacterLeft} />
    </main>
  )
}