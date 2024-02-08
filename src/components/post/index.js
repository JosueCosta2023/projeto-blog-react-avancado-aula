import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

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
        <Section>
            <Link to='/'>Voltar ao inicio</Link>
            <Container>
                <div className='content'>
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                </div>
                <Image src={post.image} alt={post.title} />
            </Container>
        </Section>
    )
}

const Section = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-itens:center;
    flex-wrap:wrap;
    text-align:center;
    padding:50px;
    font-size:20px;
    background-color:blue;
    ${props => props.red && css `
        background-color:red; 
    `}
`

const Container = styled.div`
    width:90%;
    height:auto;
    padding:10px;
    &:hover{
        background-color:yellow;
    }

`

const Image = styled.img`
    width:100%;
    margin-top:20px;
`

export { PostDetails }