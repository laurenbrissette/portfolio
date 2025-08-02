import { Flex, Box, ButtonGroup, IconButton} from "@chakra-ui/react";
import Card from "./card";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState } from "react";

export default function CardArray({data}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  // Calculate items for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);
  
  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };
  
  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };
  
  return (
    <Box>
      <Flex wrap={"wrap"} gap="30px" alignItems={"center"} justifyContent={"center"}>
        {currentItems.map((proj, key) => (
          <Flex key={startIndex + key}>
            <Card project={proj}/>
          </Flex>
        ))}
      </Flex>
      
      <Flex justifyContent="center" mt={6}>
        <ButtonGroup gap="4" size="sm" variant="ghost">
          <IconButton 
            onClick={handlePrevious}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <HiChevronLeft />
          </IconButton>
          
          <Box display="flex" alignItems="center" px={3}>
            Page {currentPage} of {totalPages}
          </Box>
          
          <IconButton 
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <HiChevronRight />
          </IconButton>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}