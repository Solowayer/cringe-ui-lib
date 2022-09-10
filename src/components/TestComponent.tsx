import React, { useState } from 'react'
import { Input } from './input'

export const TestComponent = () => {
  const [value, setValue] = useState('Cringe')
  return (
    <>
      <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
    </>
  )
}
