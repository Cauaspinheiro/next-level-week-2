import React, { InputHTMLAttributes } from 'react'

import './styles.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export const Input: React.FC<InputProps> = ({ name, label, ...inputProps }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...inputProps} />
    </div>
  )
}
