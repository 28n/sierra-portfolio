import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Error 404</Heading>
      <Text>Die Seite die du suchst wurde nicht gefunden.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Zurück</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
