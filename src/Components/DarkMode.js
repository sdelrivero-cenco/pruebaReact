import React, {useState, useRef} from 'react'


const DarkMode = () => {

    const [darkMode, setDark] = useState(false)
    const boton = useRef()

  const handlerButton = () =>{
    boton.current.classList.toggle("dark-mode")
    setDark(!darkMode)
    console.log(darkMode)

  }
  return (
    <>
    <h1>Hola</h1>
    <button ref={boton} onClick={()=>handlerButton()}>Apagar las luces</button>
    </>
  )
}

export default DarkMode