import React, {useState, useEffect} from 'react'
import { Loading, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
        .finally(setLoading(false));
    }, [])

    
    
  return !loading ? (
    <div className='w-full py-8'>
            <div className='flex flex-wrap justify-center items-center w-full'>
                {posts?.slice().reverse().map((post) => (
                    <div key={post.$id} className='p-2 w-full mx-80 hover:bg-yellow-500'>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
    </div>
  ) : <Loading />
}

export default AllPosts