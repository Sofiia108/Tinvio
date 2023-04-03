import React, {useState} from 'react'
import './changeLanguage.css'

function ChangeLanguage() {

  const [language, setLanguage] = useState('EN');

  return (
    <div id='change-language'>
    {language}
      <span></span>
    </div>
  )
}

export default ChangeLanguage