import { useState } from 'react'
import ColorList from './ColorList'
import Form from './fORM.JSX'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const [colorsList, setColorsList] = useState(new Values('#FF0000').all(10))
  const addColor = (color) => {
    try {
      // const colorValues = new Values(color)
      // const colorList = colorValues.all(10)
      // setColorsList(colorList)
      setColorsList(new Values(color).all(10))
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colorsList} />
      <ToastContainer position="top-center" />
    </main>
  )
}
export default App
