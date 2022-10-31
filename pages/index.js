import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoYoutube,
  IoMailOpen,
} from "react-icons/io5";
import email from './redirects/mail'

const Home = () => (
  <Layout>
    <Container>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sam Sierra
          </Heading>
          <p>Webentwickler</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          {/* <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box> */}
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Arbeit
        </Heading>
        <Paragraph>
          Im Jahr 2015 habe ich die ersten Erfahrungen mit dem Programmieren
          gemacht. Angefangen habe ich mit alten Sprachen wie Java und C++. Nach
          einer Pause beschäftige ich mich nun mit der Frontend-Entwicklung.
          Seit einigen Jahren programmiere ich Lösungen mit Sprachen wie
          Javascript (Typescript) und PHP. Auch das Gestalten meiner Projekte
          mit CSS und Vorverarbeitern wie SCSS und SASS übernehme ich selber.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Meine Projekte
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Steckbrief
        </Heading>
        <BioSection>
          <BioYear>2015</BioYear>
          Erster Kontakt mit dem Programmieren
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Richtungswechsel zum Frontend
        </BioSection>
        <BioSection>
          <BioYear>2021 bis jetzt</BioYear>
          Selbstständiger Webentwickler
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Ich ♥
        </Heading>
        <Paragraph>
          Lernen, Denken, Erstellen. Musik machen, Laufen, Schwimmen. Arbeiten,
          Kollaborieren, Programmieren.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Kontaktmöglichkeiten
        </Heading>
        <List>
          <List>
            <Link href="/redirects/mail">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailOpen />}
              >28nh04@gmail.com</Button>
            </Link>
          </List>
          <ListItem>
            <Link href="/redirects/instagram" target="_self">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @n1ckcz
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="/redirects/youtube"
              target="_self"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoYoutube />}
              >
                @desyn c
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/redirects/twitter" target="_self">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @28nh04
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/redirects/github" target="_self">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @28n
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
