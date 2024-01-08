import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, content}) {
    
  return (
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
            <p>{content}</p>
        </div>
  )
}


export default PostCard