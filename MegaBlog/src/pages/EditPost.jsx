import React,{useEffect,useState} from 'react'
import appwriteService from '../appwrite/config'
import {Container,PostCard} from '../components'
import { useNavigate, useParams } from 'react-router-dom'
function EditPost() {
    const [posts,setposts] =useState(null)
    const {slug}= useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (slug) {
            appwriteService.getPosts(slug).then((posts)=>{
                if (posts) {
                    setposts(posts)
                } else{
                    navigate('/')
                }
            })
        }
      
    }, [slug,navigate])
    
    return posts ? (
        <div className='py-8'>
            <Container>
                <PostForm post={posts} />
            </Container>
        </div>
      ) : null
    }
    

export default EditPost