import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options: SelectOpts[]
}

export interface SelectOpts {
  value: string
  label: string
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  ...selectProps
}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...selectProps}>
        <option value="" disabled selected hidden>Selecione uma opção</option>

        {options.map((opt) => {
          return <option key={opt.value} value={opt.value}>{opt.label}</option>
        })}
      </select>
    </div>
  )
}
