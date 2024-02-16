import React from 'react';
import { Box, Tooltip, IconButton, useColorModeValue, VStack, Icon, Button } from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsInfoLg } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";

const Sidebar = () => {
  const iconColor = useColorModeValue('white', 'gray.800');

  return (
    <Box>
      <VStack>
      <Box bgColor={'#424242'} w='35px' h='35px' cursor={'pointer'} m='25% 0% 75%'/>
      </VStack>
        <VStack spacing={20}>
      <Tooltip label="Home" placement="right" hasArrow color={'white'}>
      <Box borderRadius={5} padding={'10% 12%'} _hover={{bgColor: '#505050'}}>
      <FiHome size={24} color={iconColor} cursor={'pointer'} />
      </Box>
      </Tooltip>
      <Tooltip label="Favourites" placement="right" hasArrow color={'white'}>
        <Box borderRadius={5} padding={'10% 12%'} _hover={{bgColor: '#505050'}}>
      <FaRegHeart size={24} color={iconColor} cursor={'pointer'} />
      </Box>
      </Tooltip>
      <Tooltip label="Profile" placement="right" hasArrow color={'white'}>
      <Box borderRadius={5} padding={'10% 12%'} _hover={{bgColor: '#505050'}}>
      <MdOutlinePersonOutline size={28} color={iconColor} cursor={'pointer'} />
      </Box>
      </Tooltip>
      <Tooltip label="About" placement="right" hasArrow color={'white'}>
      <Box borderRadius={5} padding={'10% 12%'} _hover={{bgColor: '#505050'}}>
      <BsInfoLg size={24} color={iconColor} cursor={'pointer'} />
      </Box>
      </Tooltip>
      </VStack>
    </Box>
  );
};

export default Sidebar;
