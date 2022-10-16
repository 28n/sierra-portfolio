import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const GuessTheGhost = () => {
  return (
    <Layout title="Guess The Ghost">
      <Title>
        Guess the Ghost <Badge>2022-</Badge>
      </Title>
      <P>
        Ein simples Browserspiel, in dem man anhand einiger Beweistypen raten muss, um welchen Typen von Geist es sich handelt. Für das Training für das Computerspiel Phasmophobia konzipiert.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://guesstheghost.samsierra.de'>
            guesstheghost.samsierra.de <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plattform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Vite</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/gtg2.png" alt="Guess the Ghost"></WorkImage>
    </Layout>
  )
}

export default GuessTheGhost
export { getServerSideProps } from '../../components//chakra'
