import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {register, handleSubmit, watch, getValues, setValue, formState:{errors}} = useForm();

  function onSubmit(data) {
    console.log('submit', data)
  }

  // Función que se ejecuta
  useEffect(() => {
    console.log('Los valores actuales son:', getValues())
  },
    // Cada vez que cambia el valor de un campo
    [watch(getValues())]
  )

  // Función que se ejecuta
  useEffect(() => {
    console.log("Ha cambiado el campo2")
  },
    // Cada vez que cambia el valor de campo2
    [watch("campo2")]
  )

  // Cambia el valor del campo3 según los cambios del campo1
  const onChange = (e) => {
    setValue("campo3", e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("campo1", {onChange: (e) => onChange(e)})} /><br></br>
        <input {...register("campo2", {required:true})} /><br></br>
        <input {...register("campo3")} /><br></br>
        {errors.campo2 && <span>El campo es requerido</span>}
        <input type="submit" />
      </form>
      {JSON.stringify(getValues())}
    </>
  )
}

export default App
