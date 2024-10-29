import React from 'react'
import { useParams } from 'react-router-dom'
import { CustomGetUseQuery } from '../customHook/CustomGetUseQuery'
import { useMutation, useQueryClient } from 'react-query'
import { Field, Formik ,Form } from 'formik'
import axios from 'axios'
import CustomPutUseMutation from '../customHook/CustomPutUseMutation'


const Detail = () => {
    const {id} = useParams()
    // console.log(id);
    const {data , status2 , refetch} = CustomGetUseQuery(`https://662652ab052332d553227616.mockapi.io/test/test/${id}` , 'detail' , [])
    // console.log(data);




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
        <h2>
             {data?.fname}-{data?.lname}            
        </h2>

        <Formik initialValues={{fname:'' , lname:''}} onSubmit={handleMutate}>
            <Form>
                <Field type='text' name='fname' placeholder='fname'/>
                <Field type='text' name='lname' placeholder='lname'/>
                <button type='submit'>Add</button>
            </Form>
        </Formik>

    </div>
  )
}

export default Detail