import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import React from 'react'

const AddBlogs = () => {

    const form = useForm({
    initialValues: {
      title: '',
      author: '',
      image : '',
      description : ''
    },

    validate: {
      title : (value) => (value.length >2 ? null : "Title is so short")
    },
  });

  const handleSubmit = async(e)=> {
   e.preventDefault()
  const validation = form.validate()
  if (validation.hasErrors ){
   return;
  }

  const res = await axios.post("http://localhost:8000/blog/create",form.values)
  console.log(res)
  form.reset()

  }
 
  return (
    <form onSubmit={(e)=>handleSubmit(e)} className='flex  flex-col gap-4'>
         <TextInput
        withAsterisk
        label="Title"
        placeholder="Enter your blog title"
      {...form.getInputProps('title')}
      />
         <TextInput
        withAsterisk
        label="Author"
        placeholder="Enter your author "
      {...form.getInputProps('author')}
      />
         <TextInput
        withAsterisk
        label="Image"
        placeholder="Enter your ImageUrl"
      {...form.getInputProps('image')}
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

export default AddBlogs