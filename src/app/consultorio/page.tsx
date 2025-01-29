'use client'
import React from 'react';
import MeasurementRegistrationForm from './components/Form';
import { GrasaCorporal } from '../components/GrasaCorporal';
import { GrasaVisceral } from '../components/GrasaVisceral';
import { Imc } from '../components/Imc';
import { PorMusculoEsqueletico } from '../components/PorMusculoEsqueletico';


//const ResponsiveGridLayout = WidthProvider(Responsive);

const Page = () => {
  // Definir el diseño inicial con `useMemo` para evitar recreación en cada render
  /*
  const layouts = useMemo(() => ({
    lg: [
      { i: "form", x: 0, y: 0, w: 1, h: 2 },
      { i: "grasa-corporal", x: 1, y: 0, w: 1, h: 2 },
      { i: "grasa-visceral", x: 2, y: 0, w: 1, h: 2 },
      { i: "imc", x: 0, y: 2, w: 1, h: 2 },
      { i: "musculo-esqueletico", x: 1, y: 2, w: 1, h: 2 },
    ],
    md: [
      { i: "form", x: 0, y: 0, w: 2, h: 2 },
      { i: "grasa-corporal", x: 2, y: 0, w: 1, h: 2 },
      { i: "grasa-visceral", x: 0, y: 2, w: 1, h: 2 },
      { i: "imc", x: 1, y: 2, w: 1, h: 2 },
      { i: "musculo-esqueletico", x: 2, y: 2, w: 1, h: 2 },
    ],
    sm: [
      { i: "form", x: 0, y: 0, w: 3, h: 2 },
      { i: "grasa-corporal", x: 0, y: 2, w: 3, h: 2 },
      { i: "grasa-visceral", x: 0, y: 4, w: 3, h: 2 },
      { i: "imc", x: 0, y: 6, w: 3, h: 2 },
      { i: "musculo-esqueletico", x: 0, y: 8, w: 3, h: 2 },
    ]
  }), []);

  return (
    <div >
      <ResponsiveGridLayout
        className="grid-layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 3, sm: 1, xs: 1, xxs: 1 }}
        rowHeight={120}
        isResizable={false}
        isDraggable={true}
        preventCollision={true}
      >
        <div key="form" className="grid-item"><MeasurementRegistrationForm /></div>
        <div key="grasa-corporal" className="grid-item"><GrasaCorporal /></div>
        <div key="grasa-visceral" className="grid-item"><GrasaVisceral /></div>
        <div key="imc" className="grid-item"><Imc /></div>
        <div key="musculo-esqueletico" className="grid-item"><PorMusculoEsqueletico /></div>
      </ResponsiveGridLayout>
    </div>
  );
  */
  return (
    <div className=' flex flex-col'>
    
        <div key="form" ><MeasurementRegistrationForm /></div>
        <div key="grasa-corporal" ><GrasaCorporal /></div>
        <div key="grasa-visceral" ><GrasaVisceral /></div>
        <div key="imc" ><Imc /></div>
        <div key="musculo-esqueletico" ><PorMusculoEsqueletico /></div>
      
    </div>
  );
};

export default Page;
