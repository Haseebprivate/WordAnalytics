import React, { useState } from 'react'
import Warning from './Warning'

export default function TextArea({text, setText}) {
    
  
    const [showWarningText, setShowWarningText] = useState('')

    const numberOfCharacters = text.length

    const handleChange = (event) => {
        let newText =  event.target.value
        if (newText.includes('<script>')) {
          
            setShowWarningText('No script taq allowed')
            newText = newText.replace('<script>', '')
        } else if (newText.includes('@')) {
         
            setShowWarningText('No @ symbal allowed')
            newText = newText.replace('@', '')
        } else {
           setShowWarningText('')
        }
        setText(newText)
    }
  return (<div className='textarea'>
    <textarea  placeholder='Enter your text' spellCheck='false' value={text} onChange={handleChange} />
    {showWarningText ? <Warning showWarningText={showWarningText} /> : ''}
    </div>
  )
}
