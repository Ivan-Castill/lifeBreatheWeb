import React from 'react'
import ClimaActual from "../climaActual/ClimaActual"

function ClimaReport() {
    return (
        <div>
            <div className="product-card">
                <div>
                    <ClimaActual ciudad="Quito" />
                </div>
            </div>
        </div>
    )
}

export default ClimaReport

