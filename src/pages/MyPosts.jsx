import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import appwriteService from '../appwrite/config'
import { PostCard } from '../components'



function MyPosts() {
  const [posts, setPosts] = useState([])

  const userData = useSelector((state) => state.auth.userData)
  useEffect(() => {
    appwriteService.getUserPosts(userData.email).then((posts) => {
      if (posts) {
          setPosts(posts.documents)
      }
    })
  }, [])
  
  return (
    <div className='w-full py-8'>
            <div className='flex flex-wrap justify-center items-center'>
                {posts.slice().reverse().map((post) => (
                    <div key={post.$id} className='p-2 w-full mx-80'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
    </div>
  )
}

export default MyPosts