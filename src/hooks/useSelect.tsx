import React, { useState } from 'react'
import { Currencies } from '../models/Currencies'
import { SelectCont } from '../styles/hooks/useSelect.styles';

const useSelect = (labelText: string, options: Currencies[]) => {

  const [select, setSelect] = useState('')

  const SelectValue = () => (
    <SelectCont>
    <label>{labelText}</label>
    <select value={select} onChange={(e) => setSelect(e.target.value)}>
      <option value="">Choose</option>
      {
        options.map((option: Currencies) => {
          return <option key={option.id} value={option.id}>
            {option.name}
          </option>
        })
      }
    </select>
    </SelectCont>
  )
  
  return { select, SelectValue }
}

export default useSelect