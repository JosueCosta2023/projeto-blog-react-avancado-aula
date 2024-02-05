import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

async function getPost(id) {
    const response = await fetch(`http://localhost:3000/json/post-${id}.json`)
    return response.json()
}

const PostDetails = () => {
    const [post, setPost] = useState({})

    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const post = await getPost(id)

            setPost(post.data)
        }
         fetchData()
    }, [])

    return (
        <section>
            <div className='container-blog post'>
                <div className='content'>
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                </div>
                <img src={post.image} alt={post.title} />
            </div>
            <Link to='/'>Voltar ao inicio</Link>
        </section>
    )
}

export { PostDetails }