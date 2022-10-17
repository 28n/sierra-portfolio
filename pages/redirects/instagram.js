import Layout from '../../components/layouts/article'
import { Container, Box, Heading } from '@chakra-ui/react'
import { useEffect } from 'react'

const Mail = () => {
  useEffect(() => {
    window.location.href = 'https://www.instagram.com/n1ckcz/'
  }, [])
  return (
    <Layout>
      <Container>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading>
              Wenn du das hier siehst, ist etwas falschgelaufen...
            </Heading>
            <p>
              Normalerweise solltest du weitergeleitet werden. Sorry, falls es nicht funktioniert hat. Bitte lade die Seite neu.
            </p>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Mail
