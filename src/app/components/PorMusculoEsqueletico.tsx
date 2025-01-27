'use client'
import React from 'react'

export const PorMusculoEsqueletico = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto mb-6">
    <h3 className="text-xl font-bold mb-4 text-gray-800">Porcentaje de Músculo Esquelético</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">Género</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">Edad</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">-(Bajo)</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">0(Normal)</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">+(Alto)</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">++(Muy Alto)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-200">MUJER</td>
            <td className="px-4 py-2 border border-gray-200">18 – 39</td>
            <td className="px-4 py-2 border border-gray-200">&lt; 24,3</td>
            <td className="px-4 py-2 border border-gray-200">24,3 – 30,3</td>
            <td className="px-4 py-2 border border-gray-200">30,4 – 35,3</td>
            <td className="px-4 py-2 border border-gray-200">≥ 35,4</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">MUJER</td>
            <td className="px-4 py-2 border border-gray-200">40 – 59</td>
            <td className="px-4 py-2 border border-gray-200">&lt; 24,1</td>
            <td className="px-4 py-2 border border-gray-200">24,1 – 30,1</td>
            <td className="px-4 py-2 border border-gray-200">30,2 – 35,1</td>
            <td className="px-4 py-2 border border-gray-200">≥ 35,2</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">MUJER</td>
            <td className="px-4 py-2 border border-gray-200">60 – 80</td>
            <td className="px-4 py-2 border border-gray-200">&lt; 23,9</td>
            <td className="px-4 py-2 border border-gray-200">23,9 – 29,9</td>
            <td className="px-4 py-2 border border-gray-200">30,0 – 34,9</td>
            <td className="px-4 py-2 border border-gray-200">≥ 35,0</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">HOMBRE</td>
            <td className="px-4 py-2 border border-gray-200">18 – 39</td>
            <td className="px-4 py-2 border border-gray-200">&lt; 33,3</td>
            <td className="px-4 py-2 border border-gray-200">33,3 – 39,3</td>
            <td className="px-4 py-2 border border-gray-200">39,4 – 44,0</td>
            <td className="px-4 py-2 border border-gray-200">≥ 44,1</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">HOMBRE</td>
            <td className="px-4 py-2 border border-gray-200">40 – 59</td>
            <td className="px-4 py-2 border border-gray-200">&lt; 33,1</td>
            <td className="px-4 py-2 border border-gray-200">33,1 – 39,1</td>
            <td className="px-4 py-2 border border-gray-200">39,2 – 43,8</td>
            <td className="px-4 py-2 border border-gray-200">≥ 43,9</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">HOMBRE</td>
            <td className="px-4 py-2 border border-gray-200">60 – 80</td>
            <td className="px-4 py-2 border border-gray-200">&lt; 32,9</td>
            <td className="px-4 py-2 border border-gray-200">32,9 – 38,9</td>
            <td className="px-4 py-2 border border-gray-200">39,0 – 43,6</td>
            <td className="px-4 py-2 border border-gray-200">≥ 43,7</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}
