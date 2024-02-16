// components/Navbar.js
import React from 'react';
import { Box, Flex, Input, Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
      <Flex justify="space-between" align="center">
        <Box>
          {/* Search bar */}
          <Input
            type="text"
            bg="#424242"
            color="white"
            border="1px solid white"
            placeholder="Search"
            _placeholder={{ color: 'white' }}
          />
        </Box>
        <Box>
          {/* Login button */}
          <Button bg="#424242" color="white" _hover={{ bg: '#333' }}>
            Login
          </Button>
        </Box>
      </Flex>
  );
};

export default Navbar;
