import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import appwriteService from '../appwrite/config'
import { PostCard } from '../components'

function MyPosts() {
  
  const [posts, setPosts] = useState(null)
  const userData = useSelector((state) => state.auth.userData)
  
  useEffect(() => {
    appwriteService.getUserPosts(userData?.email).then((posts) => {
      if (posts) {
          setPosts(posts.documents)
      }
    })
  }, [])

  return (
    <div className='w-full py-8'>
            <div className='flex flex-wrap justify-center items-center'>
                {posts?.slice().reverse().map((post) => (
                    <div key={post.$id} className='p-2 w-full mx-80 hover:bg-blue-500'>
                        <PostCard {...post} myPost={true}/>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default MyPosts