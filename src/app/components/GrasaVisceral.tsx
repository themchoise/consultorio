'use client'
import React from 'react'

export const GrasaVisceral = () => {
  return (
<div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto mb-6">
  <h3 className="text-xl font-bold mb-4 text-gray-800">Nivel de Grasa Visceral</h3>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">Nivel de grasa Visceral</th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">Clasificación del Nivel de Grasa Visceral</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border border-gray-200">≤ 9</td>
          <td className="px-4 py-2 border border-gray-200">0 (Normal)</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-200">10 – 14</td>
          <td className="px-4 py-2 border border-gray-200">+ (Alto)</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-200">≥ 15</td>
          <td className="px-4 py-2 border border-gray-200">++ (Muy Alto)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  )
}
