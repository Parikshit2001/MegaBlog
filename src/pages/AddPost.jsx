import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import appwriteService from "../../appwrite/config";
import appwriteService from '../appwrite/config'
import authService from '../appwrite/auth'
import { Button, Input, Select } from '../components'


function AddPost() {
  const userData = useSelector((state) => state.auth.userData)
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dbPost = await appwriteService.createPost({
      title,
      content,
      status,
      email: userData.email
    })
    setTitle('');
    setContent('');
  }

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatus(selectedStatus === 'Active');
  };

  return (
    <div className='py-8'>
      <form onSubmit={(e) => handleSubmit(e)} className='flex flex-wrap'>
        {/* <label htmlFor="">Title</label>
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <br />
        <label htmlFor="">Content</label>
        <input type="text" placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)}/>
        <br />
        <label htmlFor="">Status</label>
        <input type="checkbox" checked={status} onChange={() => setStatus(!status)}/>
        <br />
        <button type='submit' onClick={handleSubmit}>Submit</button> */}
        <div className='w-2/3 px-2'>
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="content">Content:</label>
          <textarea
              id="content"
              name="content"
              rows={10}
              className="border p-2 w-full"
              placeholder="Enter your content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className='w-1/3 px-2 py-10'>
          {/* <select className='w-full my-3 p-5'>
            <option value="Active" onClick={() => setStatus(true)}>Active</option>
            <option value="InActive" onClick={() => setStatus(false)}>InActive</option>
          </select> */}
          <select className='w-full my-3 p-5' value={status ? 'Active' : 'InActive'} onChange={handleStatusChange}>
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
          </select>
          <Button type="submit" className="w-full py-7">
            POST
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddPost