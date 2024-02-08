import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

async function getPosts() {
    const response = await fetch('http://localhost:3000/json/posts.json')
    return await response.json()
}

const PostsList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const posts = await getPosts()
            setPosts(posts.data)
        }

        fetchData()
    }, [])

    return (
        <Container>
            {posts.map((post, index) => 
                <ContentCard key={index} className='container-blog'>
                    <CardImg src={post.image} alt="" />
                    <Link to={`/post/${post.id}`}>
                    <h2>{post.title}</h2>
                    </Link>
                </ContentCard>
            )}
        </Container>
    )
}

const Container = styled.section`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
`

const ContentCard = styled.div`
    width:350px;
    height:auto;
    text-align:center;
`

const CardImg = styled.img`
    width:300px;
`

export { PostsList }