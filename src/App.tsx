import { useState } from 'react'

import { Select, SelectOption } from './Select'

const options = [
  {label: "First", value: 1},
  {label: "Second", value: 2},
  {label: "Third", value: 3},
  {label: "Fourth", value: 4},
]

function App() {
  // return <h1>Hi</h1>
  // const [value, setValue] = useState<typeof options[0] | undefined>(options[0])
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])

  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={o => setValue1(o)} 
        />

        <hr></hr>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <hr></hr>
        
        <Select
          options={options}
          value={value2}
          onChange={o => setValue2(o)} 
        />
    </>
  )
}

export default App
