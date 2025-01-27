'use client'
import React from 'react'

export const Imc = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto mb-6">
    <h3 className="text-xl font-bold mb-4 text-gray-800">Índice de Masa Corporal (IMC)</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">IMC</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">IMC (DESIGNACION DE LA OMS)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-200">Menos de 18,5</td>
            <td className="px-4 py-2 border border-gray-200">- (Peso inferior al normal)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">18,5 o más, y menos de 25</td>
            <td className="px-4 py-2 border border-gray-200">0 (Normal)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">25 o más, y menos de 30</td>
            <td className="px-4 py-2 border border-gray-200">+ (Sobrepeso)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">30 o más</td>
            <td className="px-4 py-2 border border-gray-200">++ (Obesidad)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}
