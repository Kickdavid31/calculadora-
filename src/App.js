import './App.css';
import freeCodeCamplogo from './img/freecodecamp-logo.png';
import Boton from './component/boton';
import Pantalla from './component/pantalla';
import BotonClear from './component/botonClear';
import { useState } from 'react';
import{evaluate} from 'mathjs'; // uso la libreria para calcular las operaciones

function App() {

    //Estado 
    const [input, setInput]= useState('');
    const agregarInput = val =>{
      setInput(input + val);
    }

    //Evalua la operacion
    const calcularResultado = () =>{
      if(input && /[+\-*/]/.test(input)){
        setInput(evaluate(input));
      }
      else{
        alert("Por favor ingrese valores para realizar los calculos");
      }
    }



  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
      <img
        src={freeCodeCamplogo}
        className='freecodecamp-logo'  
        alt='Logo de freeCodeCamp'
      />

      </div>
      <div className='contenedor-calculadora'>
        <Pantalla  input={input}/>
        <div className='fila'>
          <Boton manejarClc={agregarInput}>1</Boton>
          <Boton manejarClc={agregarInput}>2</Boton>
          <Boton manejarClc={agregarInput}>3</Boton>
          <Boton manejarClc={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClc={agregarInput}>4</Boton>
          <Boton manejarClc={agregarInput}>5</Boton>
          <Boton manejarClc={agregarInput}>6</Boton>
          <Boton manejarClc={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClc={agregarInput}>7</Boton>
          <Boton manejarClc={agregarInput}>8</Boton>
          <Boton manejarClc={agregarInput}>9</Boton>
          <Boton manejarClc={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClc={calcularResultado}>=</Boton>
          <Boton manejarClc={agregarInput}>0</Boton>
          <Boton manejarClc={agregarInput}>.</Boton>
          <Boton manejarClc={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=> setInput('')}>
            Limpiar</BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
