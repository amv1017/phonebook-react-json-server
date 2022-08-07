import { useState } from 'react'
import { nanoid } from 'nanoid'

export default () => {
  const [state, setState] = useState({
    name: '',
    phone: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:8080/phones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: nanoid(),
        ...state
      })
    })
    window.onload = setTimeout("location.reload(true);")
  }

  const handleChange = (e) => {
    e.preventDefault()
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  return (<form onSubmit={handleSubmit}>
    <label>
      Имя:
      <input type="text" name="name" onChange={handleChange} />
    </label>
    <label>
      Телефон:
      <input type="text" name="phone" onChange={handleChange} />
    </label>
    <label>
      <br />
      <input className="submit" type="submit" value="Отправить" />
    </label>
  </form>
  )
}
