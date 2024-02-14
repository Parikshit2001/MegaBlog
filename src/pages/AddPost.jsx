import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import appwriteService from '../appwrite/config'
import { Button, Input, Select } from '../components'
import { useNavigate } from 'react-router-dom'


function AddPost() {
  const userData = useSelector((state) => state.auth.userData)
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData.email);
    appwriteService.createPost({
      title,
      content,
      status,
      email: userData.email
    })
    .then(() => {
      navigate('/my-posts')
    })
    .finally(() => {
        setContent('');
        setTitle('');
      }
    )
  }

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatus(selectedStatus === 'Active');
  };

  return (
    <div className='py-8'>
      <form onSubmit={(e) => handleSubmit(e)} className='flex flex-wrap'>
        <div className='w-2/3 px-2'>
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-4 bg-slate-600 focus:bg-slate-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="content">Content:</label>
          <textarea
              id="content"
              name="content"
              rows={10}
              className="border p-2 w-full rounded-xl text-black bg-slate-600 focus:bg-slate-400"
              placeholder="Enter your content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className='w-1/3 px-2 py-10 text-black'>
          <select className='w-full my-3 p-5 rounded-xl bg-slate-600 focus:bg-slate-400' value={status ? 'Active' : 'InActive'} onChange={handleStatusChange}>
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