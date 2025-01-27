'use client'
import React from 'react'

export const GrasaCorporal = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto mb-6">
    <h3 className="text-xl font-bold mb-4 text-gray-800">Porcentaje de Grasa Corporal</h3>
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
            <td className="px-4 py-2 border border-gray-200">20 – 39</td>
            <td className="px-4 py-2 border border-gray-200">&lt; 21,0</td>
            <td className="px-4 py-2 border border-gray-200">21,0 – 32,9</td>
            <td className="px-4 py-2 border border-gray-200">33,0 – 38,9</td>
            <td className="px-4 py-2 border border-gray-200">≥ 39,0</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">MUJER</td>
            <td className="px-4 py-2 border border-gray-200">40 – 59</td>
            <td className="px-4 py-2 border border-gray-200">&lt; 23,0</td>
            <td className="px-4 py-2 border border-gray-200">23,0 – 33,9</td>
            <td className="px-4 py-2 border border-gray-200">34,0 – 39,9</td>
            <td className="px-4 py-2 border border-gray-200">≥ 40,0</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">MUJER</td>
            <td className="px-4 py-2 border border-gray-200">60 – 79</td>
            <td className="px-4 py-2 border border-gray-200">&lt; 24,0</td>
            <td className="px-4 py-2 border border-gray-200">24,0 – 35,9</td>
            <td className="px-4 py-2 border border-gray-200">36,0 – 41,9</td>
            <td className="px-4 py-2 border border-gray-200">≥ 42,0</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">HOMBRE</td>
            <td className="px-4 py-2 border border-gray-200">20 – 39</td>
            <td className="px-4 py-2 border border-gray-200">&lt; 8,0</td>
            <td className="px-4 py-2 border border-gray-200">8,0 – 19,9</td>
            <td className="px-4 py-2 border border-gray-200">20,0 – 24,9</td>
            <td className="px-4 py-2 border border-gray-200">≥ 25,0</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">HOMBRE</td>
            <td className="px-4 py-2 border border-gray-200">40 – 59</td>
            <td className="px-4 py-2 border border-gray-200">&lt; 11,0</td>
            <td className="px-4 py-2 border border-gray-200">11,0 – 21,9</td>
            <td className="px-4 py-2 border border-gray-200">22,0 – 27,9</td>
            <td className="px-4 py-2 border border-gray-200">≥ 28,0</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">HOMBRE</td>
            <td className="px-4 py-2 border border-gray-200">60 – 79</td>
            <td className="px-4 py-2 border border-gray-200">&lt; 13,0</td>
            <td className="px-4 py-2 border border-gray-200">13,0 – 24,9</td>
            <td className="px-4 py-2 border border-gray-200">25,0 – 29,9</td>
            <td className="px-4 py-2 border border-gray-200">≥ 30,0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}
