import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import {CustomGetUseQuery} from '../customHook/CustomGetUseQuery'
import { Link } from 'react-router-dom'
import CustoDeleteUseMutation from '../customHook/CustoDeleteUseMutation'
import AddCard from './AddCard'
import laptop from '../assets/images/laptop.png'

const list2 = () => {




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
    {status === 'loading' && <h3>loading</h3>}

    <div style={{display:'flex' , flexWrap:'wrap'}}>
        {data && data.map((item , index)=>{
            return(
                <div key={index} style={{margin:'30px' , border:'1px solid red' , width:'200px' , textAlign:'center'}}>
                    <img src={laptop} style={{width:'100%' }} />
                    <h2>{item.fname}</h2>
                    <h2>{item.lname}</h2>
                    <button onClick={()=>{handleDelete(item.id)}}>delete</button>
                    <Link to={`/Detail/${item.id}`}>detail</Link>

                </div>
            )
        })}
    </div>



    <AddCard/>
    </>
  )
}

export default list2