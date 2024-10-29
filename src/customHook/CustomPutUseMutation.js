import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const handlePut = async ({url , values}) => {
    console.log(values);
    const res = await axios.put(url, values);
    return res.data;
};

const CustomPutUseMutation = () => {
    const queryClient = useQueryClient();

    return useMutation((obj) => handlePut(obj), {
        onSuccess: () => {
            queryClient.invalidateQueries('list2');
        },
    });

    
};

export default CustomPutUseMutation;