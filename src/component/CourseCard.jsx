import laptop from '../assets/images/laptop.png'


const CourseCard = ({item}) => {
  return (
    <div className='border  md:w-[20%]  rounded-xl p-8 shadow-2xl  dark:border-slate-400 '>
            <div className='  rounded-xl shadow-inner bg-[#F0F0F0]'>
                <img className='mx-auto'  src={laptop} alt="" />
            </div>
            <div className=' text-center flex flex-col gap-3'>
                <h2 className='font-bold mt-4 xl:mt-4 truncate cursor-pointer  h-6' >{item.courseOrBlogName}</h2>
                <h2 className=' h-6'>tech : {item.tech} </h2>
                <h2 className=' h-6'>cost : {item.cost}</h2>
                <div className='flex justify-around'>
                <button  className=' block bg-[aqua] border-zgh border rounded-xl mx-auto xl:mr-18  py-1 px-4'> detail</button>
                <button  className=' block bg-[red] border-zgh border rounded-xl mx-auto xl:mr-18  py-1 px-4'> delete</button>

                </div>
            </div>
    </div>  
  )
}

export default CourseCard