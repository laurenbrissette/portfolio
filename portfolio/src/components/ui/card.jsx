import { Card as ChakraCard, Box, Button, Link, Image} from "@chakra-ui/react";

export default function Card({ project }) {
    return <ChakraCard.Root 
        maxWidth="md"
        padding="5" 
        height="xl"
        display="flex"
        flexDirection="column">
      
      <Box width="200" height="200px" overflow="hidden">
        {project.isVideo ? (
          <video 
            src={project.image} 
            controls 
            muted 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <Image 
            src={project.image} 
            alt={project.title}
            width="100%"
            height="100%"
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/300x200?text=Image+Not+Found"
          />
        )}
      </Box>
        <ChakraCard.Title paddingTop="10px">
            {project.title}
        </ChakraCard.Title>
        <ChakraCard.Body 
            pl="0" 
            flex="1"
            overflow="auto"
        >
            {project.description}
        </ChakraCard.Body>
        <ChakraCard.Footer padding="10px" justifyContent={"right"}>
            <Button background={"white"}><Link href={project.link}>{project.buttonContent}</Link></Button>
        </ChakraCard.Footer>
    </ChakraCard.Root>
}