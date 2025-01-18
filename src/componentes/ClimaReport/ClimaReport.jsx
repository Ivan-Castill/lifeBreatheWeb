import React from 'react'
import HoraActual from '../horaActual/horaActual'
import ClimaActual from '../climaActual/climaActual'

function ClimaReport(){
    return (
        <div style={{ textAlign: "center", fontFamily: "Arial", }}>
            <h1>Clima y Hora Actual</h1>
            <HoraActual />
            <ClimaActual ciudad="Quito" />
        </div>
    )
}

export default ClimaReport
