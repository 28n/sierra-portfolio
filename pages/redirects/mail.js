import Layout from '../../components/layouts/article'
import { Container, Box, Heading } from '@chakra-ui/react'
import { useEffect } from 'react'

let address = '28nh04@gmail.com'

const Mail = () => {
  useEffect(() => {
    window.location.href = 'mailto:' + address
    window.location.href = '/'
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
