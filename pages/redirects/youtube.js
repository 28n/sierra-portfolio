import Layout from '../../components/layouts/article'
import { Container, Box, Heading } from '@chakra-ui/react'
import { useEffect } from 'react'

const Mail = () => {
  useEffect(() => {
    window.location.href = 'https://www.youtube.com/channel/UC6OxmNUJ2GeJAz5BaFIANHA'
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
