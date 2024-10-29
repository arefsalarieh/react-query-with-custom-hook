import React from 'react'
import useMutationDelete from '../customHook/useMutationDelete'

const DeleteCourse = ({id}) => {

    const {mutate} = useMutationDelete('list')

    const handleDelete = (id)=>{
        console.log(id);
        mutate(`https://66e301e5494df9a478e3f4f6.mockapi.io/test/test/${id}`)
    }


  return (
    <button onClick={()=>handleDelete(id)} className=' block bg-[red] border-zgh border rounded-xl mx-auto xl:mr-18  py-1 px-4'> 
        delete
    </button>

  )
}

export default DeleteCourse