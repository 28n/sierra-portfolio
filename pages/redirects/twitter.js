import Layout from '../../components/layouts/article'
import { Container, Box, Heading } from '@chakra-ui/react'
import { useEffect } from 'react'

const Mail = () => {
  useEffect(() => {
    window.location.href = 'https://twitter.com/28nh04'
  }, [])
  return (
    <Layout>
      <Container>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading>
              Redirecting...
            </Heading>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Mail
