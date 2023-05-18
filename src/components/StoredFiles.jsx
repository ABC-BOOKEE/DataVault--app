// eslint-disable-next-line no-unused-vars
import React from 'react'
import FileCard from './FileCard'
import { Table, Button } from '@mantine/core'

const StoredFiles = () => {

  const elements = [
    { position: 6, mass: 230000, symbol: 'Temeke', name: 'Marvelous Medicines Arusha' },
    { position: 7, mass: 120000, symbol: 'Natron', name: 'Panacea Prescriptions ' },
    { position: 39, mass: 6070000, symbol: 'Yombo dovya', name: 'Hale & Health Pharmacy' },
    { position: 56, mass: 5870000, symbol: 'Tabata', name: 'Ailments & Antidotes' },
    { position: 58, mass: 3270000, symbol: 'Central', name: 'QuickUp Prescriptions' },
    { position: 6, mass: 230000, symbol: 'Temeke', name: 'Marvelous Medicines Arusha' },
    { position: 7, mass: 120000, symbol: 'Natron', name: 'Panacea Prescriptions ' },
    { position: 39, mass: 6070000, symbol: 'Yombo dovya', name: 'Hale & Health Pharmacy' },
    { position: 56, mass: 5870000, symbol: 'Tabata', name: 'Ailments & Antidotes' },
    { position: 58, mass: 3270000, symbol: 'Central', name: 'QuickUp Prescriptions' },
    { position: 6, mass: 230000, symbol: 'Temeke', name: 'Marvelous Medicines Arusha' },
    { position: 7, mass: 120000, symbol: 'Natron', name: 'Panacea Prescriptions ' },
    { position: 39, mass: 6070000, symbol: 'Yombo dovya', name: 'Hale & Health Pharmacy' },
    { position: 56, mass: 5870000, symbol: 'Tabata', name: 'Ailments & Antidotes' },
    { position: 58, mass: 3270000, symbol: 'Central', name: 'QuickUp Prescriptions' },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.position}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));


  return (
    <div>
    
    <h3 className='font-epilogue ml-3 my-3 font-bold sm:text-[20px] text-[16px] leading-[38px] text-white'>Recent files</h3>
    
    <div className='flex flex-row ' >
    <FileCard owner='Mbunji Mohamed' title='Lecture 2' description='Lecture 2 assignment'/>
    <FileCard owner='Julius MARENGA' title='Lecture 2' description='Lecture 2 assignment'/>
    <FileCard owner='GABRIEL DEE' title='Lecture 2' description='Lecture 2 assignment'/>
    {/* <FileCard owner='Mbunji Mohamed' title='Lecture 2' description='Lecture 2 assignment'/> */}
    </div>

    <h3 className='font-epilogue ml-3 my-3 font-bold sm:text-[20px] text-[16px] leading-[38px] text-white'>All files</h3>

    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] py-2 px-10">
    <Table horizontalSpacing="md" verticalSpacing="xs" fontSize="md">
    <thead>
      <tr>
        <th>File name</th>
        <th>size</th>
        <th>Uploaded on</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody className='text-white'>{rows}</tbody>
  </Table>
    </div>

    </div>
  )
}

export default StoredFiles