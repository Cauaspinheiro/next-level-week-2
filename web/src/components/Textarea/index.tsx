import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
}

export const Textarea: React.FC<TextareaProps> = ({ name, label, ...TextareaProps }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...TextareaProps} />
    </div>
  )
}
