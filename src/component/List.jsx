import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import useQueryGet from '../customHook/useQueryGet'
import { Link } from 'react-router-dom'
import AddCard from './AddCard'
import CourseCard from './CourseCard'

const List = () => {

    // simple useQuery
    // const getlist = async ()=>{
    //     const result = await axios.get('https://671d123d09103098807c2afb.mockapi.io/arefsalarieh/courseandblogs')
    //     return result.data 
    //     console.log(result);
    // }
    // const {data , status} = useQuery('list' , getlist)




    // custom hook
     const {data , status , refetch} = useQueryGet(['list'] ,'https://66e301e5494df9a478e3f4f6.mockapi.io/test/test'  )







  return (
    <>
    {status === 'loading' && <h1 className='mt-10 text-center font-extrabold text-2xl'>loading</h1>}

    {status === 'success' && <h1 className='mt-10 text-center font-extrabold text-2xl'>Courses list</h1>}

    <div  className='flex flex-wrap justify-between gap-5 w-[90%] mx-auto'>

        {data && data.map((item , index)=>{
            return(
                <CourseCard item={item}/>
            )
        })}
    </div>



    </>
  )
}

export default List