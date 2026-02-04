import { Button, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const AddBlogs = () => {
  const form = useForm({
    initialValues: {
      title: "",
      author: "",
      image: "",
      description: "",
      category: "",
    },

    validate: {
      title: (value) => (value.length > 2 ? null : "Title is so short"),
      category: (value) => (value ? null : "Category is required"),
    },
  });

  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const getAllCategory = async () => {
    const res = await axios.get("http://localhost:8000/category/getAll");
    setCategories(res.data);
  };

    const getAllBlogs = async () => {
    const res = await axios.get("http://localhost:8000/blog/get");
    setBlogs(res.data);
  };

  useEffect(() => {
    getAllCategory();
    getAllBlogs()
  }, []);

  console.log(form.values);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = form.validate();
    if (validation.hasErrors) {
      return;
    }

    const res = await axios.post(
      "http://localhost:8000/blog/create",
      form.values,
    );
    console.log(res);
    form.reset();
    getAllBlogs()
  };

  console.log(blogs)

  return (
    <>
    <form onSubmit={(e) => handleSubmit(e)} className="flex  flex-col gap-4">
      <TextInput
        withAsterisk
        label="Title"
        placeholder="Enter your blog title"
        {...form.getInputProps("title")}
      />
      <TextInput
        withAsterisk
        label="Author"
        placeholder="Enter your author "
        {...form.getInputProps("author")}
      />
      <TextInput
        withAsterisk
        label="Image"
        placeholder="Enter your ImageUrl"
        {...form.getInputProps("image")}
      />
      <TextInput
        withAsterisk
        label="Description"
        placeholder="Enter your blog description"
        {...form.getInputProps("description")}
      />

      {/* <select name="" id="">
        {categories.map((item, index) => (
          <option value={item._id}>{item._id}</option>
        ))}
      </select> */}

      <Select
        // data={[
        //   { label: "sports", value: "abc" },
        //   { label: "tech", value: "hshsh" },
        // ]}
         data={categories.map((item, index) => ({
          label: item.name,
          value: item._id,
        }))}
        label="Category "
        withAsterisk
        placeholder="Select a category"
        {...form.getInputProps("category")}
      />

      <Button type="submit">Submit</Button>
    </form>
  <table className="min-w-full bg-gray-100 table-auto border-separate border-spacing-4 my-4">
    <thead>
        <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left font-bold">Title</th>
            <th className="px-6 py-3 text-left font-bold">Description</th>
            <th className="px-6 py-3 text-left font-bold">Author</th>
            <th className="px-6 py-3 text-left font-bold">Category</th>
            <th className="px-6 py-3 text-left font-bold">Actions</th>
        </tr>
    </thead>
    <tbody>
        {blogs.map((item,index)=>(
 <tr key={index} className="bg-white border-b">
            <td className="px-6 py-4">{item.title}</td>
            <td className="px-6 py-4">{item.description}</td>
            <td className="px-6 py-4">{item.author}</td>
            <td className="px-6 py-4">{item.category.name}</td>
            <td className="px-6 py-4">
             <div className="flex gap-2 items-center">
                   <MdEdit className="text-blue-400" />
                <FaRegTrashAlt className="text-red-400" />
             </div>


            </td>
        </tr>
        ))}
       
        <tr className="bg-gray-50 border-b">
            <td className="px-6 py-4">dcdc</td>
            <td className="px-6 py-4">dcdc</td>
            <td className="px-6 py-4">dcdc</td>
            <td className="px-6 py-4">dcdc</td>
            <td className="px-6 py-4">dcdc</td>
        </tr>
    </tbody>
</table>

    </>
  );
};

export default AddBlogs;
