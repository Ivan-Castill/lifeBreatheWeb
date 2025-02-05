import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar'; // Asegúrate de tener importado NavBar
import PgHome from './componentes/PgHome/PgHome';
import Footer from './componentes/footer/footer'; // Asegúrate de tener importado Footer

function App() {
  return (
    <>
      <NavBar />
      <div className="App"> {/* Utilizamos container-fluid para que ocupe el 100% del ancho */}
        <PgHome />
      </div>
      <Footer/>
    </>
  );
}

export default App;

