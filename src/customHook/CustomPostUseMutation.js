import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const handleAdd = async ({url , values}) => {
    const res = await axios.post(url, values);
    return res.data;
};


const CustomPostUseMutation = () => {
    const queryClient = useQueryClient();

    return useMutation((obj) => handleAdd(obj),{

        onSuccess:(data)=>{
            queryClient.invalidateQueries('list2')
            // queryClient.setQueryData('list' , (oldData)=>{
            //     let newData = [...oldData]
            //     newData.push(data)

            //     console.log(oldData);
            //     return newData
                
            // })
        },


        // onMutate :async (data)=>{
        //     await queryClient.cancelQueries('list2')
        //     const lastData = queryClient.getQueriesData('list2')

        //     queryClient.setQueriesData('list2' , (oldQueryData)=>{
        //         let newarr = [...oldQueryData]
        //         newarr.push(data.values)
        //         return newarr
        //     }
            
        //     )
        //     return lastData

        // },


        // onSettled:(data)=>{
        //     queryClient.invalidateQueries('list2')

        // },

        // onError : (error , hero , context)=>{
        //     queryClient.setQueriesData('list2', context[0][1])
        //     // queryClient.setQueriesData('list', [{id:1 ,fname:'ali' , lname:'hasani'}] )
        //     // console.log(context[0][1]);
        // },

    } 
    )



    
};

export default CustomPostUseMutation;