import React from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import { Field, Formik ,Form } from 'formik'
import axios from 'axios'
import CustomPutUseMutation from '../customHook/CustomPutUseMutation'
import useQueryGet from '../customHook/useQueryGet'
import detailPic from '../assets/images/detailPic.webp'


const Detail = () => {
    const {id} = useParams()
    console.log(id);
     const {data , status , refetch} = useQueryGet('detail' , `https://66e301e5494df9a478e3f4f6.mockapi.io/test/test/${id}` )
    data && console.log(data);




    // const handleAdd =async (v) =>{
    //     const res =await axios.put(`https://662652ab052332d553227616.mockapi.io/test/test/${id}` , v);
    //     // console.log(res);
    //     return res.data

    // }

    // const queryClient = useQueryClient()

    // const {mutate , status } = useMutation(handleAdd , {
    //     onSuccess:(data)=>{
    //         queryClient.invalidateQueries('list2')
    //         // queryClient.setQueryData('list2' , (oldData)=>{
    //         //     let newData = [...oldData]
    //         //     newData.push(data)

    //         //     console.log(oldData);
    //         //     return newData
                
    //         // })
    //     },

    //     // onMutate :async (data)=>{
    //     //     await queryClient.cancelQueries('list2')
    //     //     const lastData = queryClient.getQueriesData('list2')
    //     //     // console.log(previosHeroData[0][1])

    //     //     queryClient.setQueriesData('list2' , (oldQueryData)=>{
    //     //         // return [...previosHeroData , NewHero]
    //     //         let newarr = [...oldQueryData]
    //     //         newarr.push(data)
    //     //         return newarr
    //     //     }
            
    //     //     )
    //     //     return lastData

    //     // },


    //     // onSettled:(data)=>{
    //     //     queryClient.invalidateQueries('list2')
    //     //     // queryClient.setQueryData('list2' , (oldData)=>{
    //     //     //     let newData = [...oldData]
    //     //     //     newData.push(data)

    //     //     //     console.log(oldData);
    //     //     //     return newData
                
    //     //     // })


    //     // },

    //     // onError : (error , hero , context)=>{
    //     //     // queryClient.setQueriesData('list2', context[0][1])
    //     //     // queryClient.setQueriesData('list2', [{id:1 ,fname:'ali' , lname:'hasani'}] )
    //     //     // console.log(context[0][1]);
    //     // },

    // })

    const {mutate} = CustomPutUseMutation()


    const handleMutate = (values)=>{
        let obj = {url:`https://662652ab052332d553227616.mockapi.io/test/test/${id}`, values:values}
        mutate(obj)
    }



  return (
    <div>
        <div className='w-[80%] flex bg-[#F0F0F0] h-96 mx-auto mt-10'>
             <div className='w-1/2 flex flex-col gap-6 mt-10 px-6'>
                <h2>course name : {data && data.courseOrBlogName}</h2>
                <h2 className='h-36'>describe : {data && data.describe}</h2>
                <h2 >tech : {data && data.tech}</h2>
                <h2 >cost : {data && data.cost}</h2>
             </div>
             <div className='w-1/2'>
                <img src={detailPic} alt="" />
             </div>
        </div>
    </div>
  )
}

export default Detail