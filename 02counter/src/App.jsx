import { useState } from 'react'


function App() {
  const [count, setCount] = useState(5)

  const addValue=()=>{
    setCount(prevcount=>prevcount+1)
    console.log(count)
  }

  const decValue=()=>{
    setCount(prevcount=>prevcount-1)
    console.log(count)
  }

  return (
    <>
      <div className='px-10 py-10 mt-10 mb-10 max-w-sm mx-auto bg-gray-400'>
        <button onClick={addValue} className='mt-10 mb-10 bg-yellow-200'>Add {count}</button>
        <br />
        <button onClick={decValue} className='mt-10 mb-10 bg-red-400'>Dec {count}</button>
      </div>
    </>
  )
}

export default App


// function App() {

//   const [counter, setCounter]  = useState(15)

//   //let counter = 15

//   const addValue = () => {
//     //counter = counter + 1
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1 )
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1)
    
//   }

//   const removeValue = () => {
//     setCounter(counter - 1)
//   }
  
//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <h2>Counter value: {counter}</h2>

//       <button
//       onClick={addValue}
//       >Add value {counter}</button> 
//       <br />
//       <button
//       onClick={removeValue}
//       >remove value {counter}</button>
//       <p>footer: {counter}</p>
//     </>
//   )
// }

// export default App
