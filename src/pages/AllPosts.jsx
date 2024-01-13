import React, {useState, useEffect} from 'react'
import { PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { FaTrash } from 'react-icons/fa'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    
    
  return (
    <div className='w-full py-8'>
            <div className='flex flex-wrap justify-center items-center w-full'>
                {posts.slice().reverse().map((post) => (
                    <div key={post.$id} className='p-2 w-full mx-80'>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default AllPosts