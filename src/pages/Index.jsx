import { Container, Box, Heading, Text, VStack, HStack, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const articles = [
  {
    title: "Market Hits All-Time High",
    description: "The stock market reached an all-time high today with major indices showing significant gains.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Economic Growth Forecast",
    description: "Economists predict a steady growth in the economy over the next quarter.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Tech Stocks on the Rise",
    description: "Technology stocks are seeing a surge as new innovations hit the market.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" mb={8}>
          <Heading as="h1" size="2xl">Financial News Today</Heading>
          <Text fontSize="lg">Your source for the latest financial news and analysis</Text>
        </Box>
        {articles.map((article, index) => (
          <HStack key={index} spacing={4} align="start" p={4} borderWidth="1px" borderRadius="lg">
            <Image boxSize="150px" src={article.imageUrl} alt={article.title} />
            <VStack align="start" spacing={2}>
              <Heading as="h2" size="md">{article.title}</Heading>
              <Text>{article.description}</Text>
              <Link color="teal.500" href={article.link}>Read more</Link>
            </VStack>
          </HStack>
        ))}
        <Box textAlign="center" mt={8}>
          <Text>Follow us on:</Text>
          <HStack spacing={4} justify="center">
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="24px" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;