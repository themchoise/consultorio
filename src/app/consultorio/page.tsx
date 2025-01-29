'use client'
import React from 'react'
import MeasurementRegistrationForm from './components/Form'
import { GrasaCorporal } from '../components/GrasaCorporal'
import { GrasaVisceral } from '../components/GrasaVisceral'
import { Imc } from '../components/Imc'
import { PorMusculoEsqueletico } from '../components/PorMusculoEsqueletico'
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);



const page = () => {

 // Definir el diseño inicial de los elementos en la cuadrícula
 const layouts = {
    lg: [
      { i: "form", x: 0, y: 0, w: 1, h: 2 }, // Columna 1, Fila 1
      { i: "grasa-corporal", x: 1, y: 0, w: 1, h: 2 }, // Columna 2, Fila 1
      { i: "grasa-visceral", x: 2, y: 0, w: 1, h: 2 }, // Columna 3, Fila 1
      { i: "imc", x: 0, y: 2, w: 1, h: 2 }, // Columna 1, Fila 2
      { i: "musculo-esqueletico", x: 1, y: 2, w: 1, h: 2 }, // Columna 2, Fila 2
    ],
  };

  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 3, sm: 3, xs: 3, xxs: 3 }} // Máximo de 3 columnas
        rowHeight={100} // Altura de cada fila
        width={1200} // Ancho del contenedor
        isResizable={false} // Desactivar redimensionamiento
        isDraggable={true} // Permitir arrastrar elementos
        preventCollision={true} // Evitar superposición
        autoSize={true} // Ajustar automáticamente el tamaño del contenedor
      >
        <div key="form">
          <MeasurementRegistrationForm />
        </div>
        <div key="grasa-corporal">
          <GrasaCorporal />
        </div>
        <div key="grasa-visceral">
          <GrasaVisceral />
        </div>
        <div key="imc">
          <Imc />
        </div>
        <div key="musculo-esqueletico">
          <PorMusculoEsqueletico />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}


export default page


