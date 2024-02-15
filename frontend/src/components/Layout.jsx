// Layout.jsx
import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Flex>
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <Box ml="250px" p="4" flex="1" overflowY="auto">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
