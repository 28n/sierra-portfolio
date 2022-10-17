import Layout from "../components/layouts/article";
import { Container, Box, Heading, FormControl, Form, Textarea, Button, FormLabel, FormErrorMessage, FormHelperText, Input, Spacer, Tag } from '@chakra-ui/react'
import Section from "../components/section";
import { useState, useEffect } from 'react'
import axios from "axios"

const Comment = ({ c, index, isLast }) => {
  return (
    <Box key={index} as="div" p={3} borderBottomWidth={isLast ? 0 : 1}>
      <Container display={"flex"} alignItems={"center"} mb={4}>
        <Tag>
          {c.author}
        </Tag>
        <Spacer />
        <Heading as="h3" fontSize={12}>
          {new Date(c.createdAt).toLocaleString()}
        </Heading>
      </Container>
      <p>{c.content}</p>
    </Box>
  )
}

const Comments = () => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('/api/comments').then((res) => {
      setComments(res.data)
      setLoading(false)
    })
  }, [])

  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  async function handleSubmit(e) {
    e.preventDefault()

    const data = {
      name,
      comment
    }

    axios.post('/api/createComment', data).then((res) => {
      setName('')
      setComment('')
      axios.get('/api/comments').then((res) => {
        setComments(res.data)
      })
    })

  }
  return (
    <Layout title="Kommentare">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Kommentare
        </Heading>
        <Section delay={0.3}>
          <Box as="div" borderWidth={1} borderColor={"#525252"} p={4} borderRadius={"md"}>
            <Heading as="h2" fontSize={16} mb={4}>
              Einen Kommentar schreiben
            </Heading>
            <form onSubmit={(event) => {
              handleSubmit(event)
            }}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value={name} type="text" onChange={(event) => { setName(event.target.value) }} />
                <FormHelperText mb={4}>Dein Name wird veröffentlicht.</FormHelperText>
                <FormLabel>Nachricht</FormLabel>
                <Textarea value={comment} onChange={(event) => { setComment(event.target.value) }} />
                <Button width={"full"} mt={4} colorScheme="teal" type="submit">Erstellen</Button>
              </FormControl>
            </form>
          </Box>
        </Section>
        <Section delay={0.6}>
          {loading ? <p>Lade...</p> : (
            <Box as="div" borderWidth={1} borderColor={"#525252"} borderRadius={"md"}>
              {comments.length === 0 ? (
                <Box m={4}>
                  <p>Keine Kommentare vorhanden.</p>
                </Box>
              ) : comments.map((c, index) => {
                const len = comments.length
                let islast = false
                if (index === len - 1) {
                  islast = true
                }

                return (
                  <Comment key={index} c={c} isLast={islast} />
                )
              })}
            </Box>
          )}
        </Section>
      </Container>
    </Layout>
  );
}

export default Comments;
export { getServerSideProps } from "../components/chakra";
