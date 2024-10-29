import React from 'react'

const DeleteCourse = ({id}) => {

    const handleDelete = (id) =>{
        console.log(id);
    }
  return (
    <button onClick={()=>handleDelete(id)} className=' block bg-[red] border-zgh border rounded-xl mx-auto xl:mr-18  py-1 px-4'> 
        delete
    </button>

  )
}

export default DeleteCourse