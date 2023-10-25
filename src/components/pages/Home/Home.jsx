import React, { useEffect, useState } from 'react'

export const Home = () => {

    const [state1, setState1] = useState(false);

    useEffect(() => {

      console.log("Cambio el estado 1 ->");
      
    }, [state1])

  return (
    <div>

        <h1>{state1 + ""}</h1>
        <button onClick={() => {setState1(!state1)}}>Presionar!</button>

    </div>
  )
}
