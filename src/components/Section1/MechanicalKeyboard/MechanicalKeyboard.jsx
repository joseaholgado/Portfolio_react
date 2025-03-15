import React, { useState, useEffect } from 'react'
import './MechanicalKeyboard.scss'


// FUnction that handles the writting and deleting of the text
const writeRemove = (textos, setText, indexTexto = 0, indexCharacter = 0) => {
  const currentText = textos[indexTexto]

  // To write the text
  if (indexCharacter < currentText.length) {
    setText(currentText.substring(0, indexCharacter + 1));  
    setTimeout(() => {
      writeRemove(textos, setText, indexTexto, indexCharacter + 1);
    }, 200)
  } else {
    // When it finishes writing, wait and then delete
    setTimeout(() => {
      remove(textos, setText, indexTexto, indexCharacter);
    }, 2000)
  }
}

// Function that handles the deletion of the text
const remove = (textos, setText, indexTexto, indexCharacter) => {
  if (indexCharacter >= 0) {
    setText(textos[indexTexto].substring(0, indexCharacter)); 
    setTimeout(() => {
      remove(textos, setText, indexTexto, indexCharacter - 1);
    }, 50)
  } else {
    // When it finishes deleting, wait and then write the next text
    setTimeout(() => {
      const siguienteIndexTexto = (indexTexto + 1) % textos.length;
      writeRemove(textos, setText, siguienteIndexTexto, 0);
    }, 1000)
  }
}

const MechanicalKeyboard = () => {
  const [text, setText] = useState('') // State that show the text
  const rotatingTexts = ['Desarrollador Web', 'Entusiasta de la Programación', 'Full-Stack Developer'] 

 
  useEffect(() => {
    writeRemove(rotatingTexts, setText)
  }, [])

  return (
    <div className="mechanicalKeyboard">
      <h2>Hola, me llamo</h2>
      <h1>Jose Antonio</h1>
      <h2>y soy <span className='mechanicalKeyboard__text'>{text}</span></h2>
      <p>
        Entusiasta del mundo de la programación con una sólida base de conocimientos y una gran motivación,
        a pesar de mi limitada experiencia profesional en el sector, ya que soy recién graduado. Durante mi
        formación, me he especializado en el desarrollo frontend, adquiriendo competencias firmes en diversos
        lenguajes y frameworks, incluyendo JavaScript, Angular, y CSS, así como en tecnologías backend como php y Laravel.
        He dedicado este tiempo a desarrollar proyectos personales que me han permitido aplicar y consolidar estos
        conocimientos.
      </p>
    </div>
  )
}

export default MechanicalKeyboard
