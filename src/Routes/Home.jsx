import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {data} = useContextGlobal()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {data?.map(item => {
          return <Card id={item.id} name={item.name} username={item.username}></Card> 
        })}
      </div>
    </main>
  )
}

export default Home