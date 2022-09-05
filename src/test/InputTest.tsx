import { Input } from '../components'
import { useState } from 'react'

export const InputTest = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
    </>
  )
}
