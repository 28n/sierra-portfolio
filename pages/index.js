import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Flex,
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
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNeovim,
  SiReact,
  SiNextdotjs,
  SiYarn,
  SiPnpm,
  SiDocker,
  SiLua,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiChakraui,
  SiElixir,
  SiRedwoodjs,
  SiPowershell,
  SiVisualstudiocode,
  SiGit,
  SiGithub,
} from "react-icons/si";
import email from "./redirects/mail";
import { TechItem } from "../components/technologies";

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
        <Container
          width={"full"}
          display="flex"
          flexWrap={"wrap"}
          flexDir="row"
          justifyContent={"center"}
          padding={1}
          borderWidth={1}
          rounded={"md"}
          my={6}
        >
          <TechItem icon={<SiTypescript />} name="Typescript"></TechItem>
          <TechItem icon={<SiJavascript />} name="Javascript"></TechItem>
          <TechItem icon={<SiNodedotjs />} name="Node.js"></TechItem>
          <TechItem icon={<SiNeovim />} name="Neovim"></TechItem>
          <TechItem icon={<SiReact />} name="React"></TechItem>
          <TechItem icon={<SiNextdotjs />} name="Next.js"></TechItem>
          <TechItem icon={<SiYarn />} name="Yarn"></TechItem>
          <TechItem icon={<SiPnpm />} name="Pnpm"></TechItem>
          <TechItem icon={<SiDocker />} name="Docker"></TechItem>
          <TechItem icon={<SiLua />} name="Lua"></TechItem>
          <TechItem icon={<SiTailwindcss />} name="Tailwind CSS"></TechItem>
          <TechItem icon={<SiPrisma />} name="Prisma"></TechItem>
          <TechItem icon={<SiPostgresql />} name="PostgreSQL"></TechItem>
          <TechItem icon={<SiChakraui />} name="Chakra UI"></TechItem>
          <TechItem icon={<SiElixir />} name="Elixir"></TechItem>
          <TechItem icon={<SiRedwoodjs />} name="Redwood.js"></TechItem>
          <TechItem icon={<SiPowershell />} name="Powershell"></TechItem>
          <TechItem
            icon={<SiVisualstudiocode />}
            name="Visual Studio Code"
          ></TechItem>
          <TechItem icon={<SiGit />} name="Git"></TechItem>
          <TechItem icon={<SiGithub />} name="Github"></TechItem>
        </Container>
        <Flex
          my={4}
          flexDir="row"
          gap={2}
          alignItems="center"
          justifyContent={"center"}
        >
          <NextLink href="/repos" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Meine Repos
            </Button>
          </NextLink>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Meine Projekte
            </Button>
          </NextLink>
        </Flex>
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
              >
                28nh04@gmail.com
              </Button>
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
            <Link href="/redirects/youtube" target="_self">
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
