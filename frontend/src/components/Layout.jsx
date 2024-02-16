// Layout.jsx
import React from 'react';
import { Flex, Box, VStack, Heading, Text } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Filters from './Filters';

const Layout = ({ children }) => {
  return (
    <Flex>
    {/* Sidebar */}
    <Box
      position="fixed"
      top={0}
      left={0}
      bottom={0}
      width="80px"
      bg="#1F1F1F"
    //   alignItems="center"
    //   justifyContent="center"
      // zIndex={1}
    >
      {/* Sidebar Content */}
      <Sidebar />
    </Box>

    {/* Content */}
    <Box ml="80px" mr='280px' flex="1" overflowY="auto">
      {/* Navbar */}
      {/* <Box
        bg="black"
        h="60px"
        position="fixed"
        top="0"
        left="80px"
        right="300px"
        zIndex="10"
        p='2% 3% 0'
        align='center'
      >
        <Navbar />
      </Box> */}

      {/* Main Content */}
      <Box bgColor={'black'}>
      <VStack pt="60px">
        {children}
      </VStack>
      </Box>
    </Box>
    <Box
      position="fixed"
      top={0}
      right={0}
      bottom={0}
      width="280px"
      bg="black"
    //   alignItems="center"
    //   justifyContent="center"
      zIndex={1}
    >
      {/* Sidebar Content */}
      <Filters />
    </Box>
  </Flex>
  );
};

export default Layout;
