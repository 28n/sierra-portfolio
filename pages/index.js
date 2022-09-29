import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoYoutube,
} from "react-icons/io5";
import thumbYouTube from "../public/images/placeholder.png";
import thumbInkdrop from "../public/images/placeholder.png";
import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Japan!
      </Box> */}

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
          Ich, aber woanders
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.instagram.com/284nh/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @284nh
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.youtube.com/channel/UC6OxmNUJ2GeJAz5BaFIANHA"
              target="_blank"
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
            <Link href="https://twitter.com/28nh04" target="_blank">
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
            <Link href="https://github.com/28n" target="_blank">
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
