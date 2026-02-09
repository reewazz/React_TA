import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import React from 'react'

const AddCategory = () => {

    const form = useForm({
    initialValues: {
     
      name : '',
      description : ''
    },

    validate: {
      name : (value) => (value.length >2 ? null : "Title is so short")
    },
  });

  const handleSubmit = async(e)=> {
   e.preventDefault()
  const validation = form.validate()
  if (validation.hasErrors ){
   return;
  }

  const res = await axios.post("http://localhost:8000/category/create",form.values)
  console.log(res)
  form.reset()

  }
 
  return (
    <form onSubmit={(e)=>handleSubmit(e)} className='flex  flex-col gap-4'>
         <TextInput
        withAsterisk
        label="Name"
        placeholder="Enter your category name"
      {...form.getInputProps('name')}
      />
        
         <TextInput
        withAsterisk
        label="Description"
        placeholder="Enter your blog description"
      {...form.getInputProps('description')}
      />
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default AddCategory