import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import {CustomGetUseQuery} from '../customHook/CustomGetUseQuery'
import { Link } from 'react-router-dom'
import CustoDeleteUseMutation from '../customHook/CustoDeleteUseMutation'
import AddCard from './AddCard'
import CourseCard from './CourseCard'

const List = () => {




    const getlist = async ()=>{
        const result = await axios.get('https://671d123d09103098807c2afb.mockapi.io/arefsalarieh/courseandblogs')
        return result.data 
        console.log(result);
    }

    const {data , status} = useQuery('list' , getlist)

    // const {data , status , refetch} = CustomGetUseQuery('https://662652ab052332d553227616.mockapi.io/test/test' , 'list2' )




    const {mutate} = CustoDeleteUseMutation()

    const handleDelete = (id)=>{
        mutate(`https://662652ab052332d553227616.mockapi.io/test/test/${id}`)
    }


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