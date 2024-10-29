import axios from 'axios'
import { Field, Formik ,Form } from 'formik'
import React from 'react'
import { useMutation , useQueryClient} from 'react-query'
import CustomPostUseMutation from '../customHook/CustomPostUseMutation'

const AddCard = () => {


    const { mutate } = CustomPostUseMutation();
    

    const handleMutate = (values) => {
        const obj = {url:'https://662652ab052332d553227616.mockapi.io/test/test' , values:values}
        mutate(obj);
    };

  return (
    <div>
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

export default AddCard