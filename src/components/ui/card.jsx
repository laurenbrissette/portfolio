import { Card as ChakraCard, Box, Button, Link, Image, List, Text, Flex} from "@chakra-ui/react";
import { MdCircle } from "react-icons/md";

export default function Card({ project }) {
    return <ChakraCard.Root 
        width="md"
        padding="5" 
        height="xl"
        display="flex"
        flexDirection="column">
      
      <Box width="200" height="200px" overflow="hidden" >
        {project.isVideo ? (
          <video 
            src={`${process.env.PUBLIC_URL}/${project.image}`} 
            controls 
            muted 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        ) : (
          <Image
            src={`${process.env.PUBLIC_URL}/${project.image}`} 
            alt={project.title}
            width="100%"
            height="100%"
            objectFit="contain"
            fallbackSrc="https://via.placeholder.com/300x200?text=Image+Not+Found"
          />
        )}
      </Box>
        <ChakraCard.Title paddingTop="10px">
            {project.title}
        </ChakraCard.Title>

        <ChakraCard.Body             flex="1"
            overflow="auto"
        >
          <DescriptionDisplay description={project.description}/>
         
        </ChakraCard.Body>
        <ChakraCard.Footer padding="10px" justifyContent={"right"} alig>
            <Button background={"white"}><Link href={project.link}>{project.buttonContent}</Link></Button>
        </ChakraCard.Footer>
    </ChakraCard.Root>
}
const DescriptionDisplay = ({ description }) => {
  // Handle case where description is null or undefined
  if (!description) {
    return null;
  }

  if(description instanceof Array) {
      return (
      <List.Root>
        {description.map((item, index) => (
          <List.Item key={index} >
            {item}
          </List.Item>
        ))}
      </List.Root>
    );
  }
  return <Text>
    {description}
  </Text>
  
};
