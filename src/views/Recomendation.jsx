import React from 'react'

const Recomendation = () => {
  return (
    <div style={{margin:'20px'}}>

            <h2>Tu destino recomendado es: {recommendedDestination}</h2>
            <p>
              Aquí puedes encontrar información adicional sobre{" "}
              {recommendedDestination}
            </p>

    </div>
  )
}

export default Recomendation