import React from 'react'
import ClimaReport from '../ClimaReport/ClimaReport'
import RecomendacionesDia from '../recomendacionDia/recomendacionesDia'
import NavBar from '../NavBar/NavBar'

const PgHome = () => {
    return (
    <div>
        <section className="header">
            <NavBar/>
        </section>
        <section className="clima">
            <ClimaReport/>
        </section>
    </div>
    )
}

export default PgHome
