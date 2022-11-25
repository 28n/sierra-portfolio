import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { RepoTitle, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Powershell">
    <Container>
      <RepoTitle>
        Powershell <Badge>2022-</Badge>
      </RepoTitle>
      <P>
        Meine Powershell Konfiguration, die mir das Entwickeln erleichtert.
        Durch Module wie PSReadLine und Starship sieht meine Powershell nicht
        nur gut aus, sondern funktioniert auch gut.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/28n/powershell">
            https://github.com/28n/powershell <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plattform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem></ListItem>
      </List>

      <WorkImage src="/images/repos/pwsh2.png" alt="Powershell" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
