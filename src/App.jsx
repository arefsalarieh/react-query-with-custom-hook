import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import List from './component/List'
import Layout from './component/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCard from './component/AddCard'
import Detail from './component/Detail'

function App() {
  const client = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false, staleTime: 1000*6*5}, mutations:{}}})
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<List/>
        },

        {
          path:'/Detail/:id',
          element:<Detail/>
        },        
      ]
    }
  ])

  return (
    <>
    <QueryClientProvider client={client}>
      <RouterProvider router={router}/>
      {/* <List/>
      <AddCard/> */}
    </QueryClientProvider>
    </>
  )
}

export default App
