import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Text, Box, Flex, Checkbox, HStack, Divider } from '@chakra-ui/react'
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const PlanCard = ({ planNo }) => {
  const navigate = useNavigate();

  return (
    <Card bgColor={'#1F1F1F'} w={'500px'}>
  <CardHeader>
    <Flex justify={'space-between'}>
      <Checkbox colorScheme='white'/>
      <Heading size='md' color={'white'} onClick={() =>navigate('/editplan')}>{planNo} </Heading>
      <FaRegHeart color='red' size={'24px'}/>
    </Flex>
  </CardHeader>

  <CardBody>
    <Stack spacing='4'>
    {[...Array(3)].map((_, index) => (
      <Flex justify={'space-between'}>
          <HStack spacing={5}>
            <Text color={'white'}>{index + 1}</Text>
            <Divider orientation='vertical' />
            <Box color={'white'}>
              <Heading size={'md'}>Veg Treat Royale</Heading>
              <Stack spacing={1}>
              <Text mb={'0.2px'}>Veg Treat Royale</Text>
              <Text>Veg Treat Royale</Text>
              </Stack>
            </Box>
          </HStack>
          <HStack spacing={2} alignItems={'flex-start'}>
            <FaStar color='yellow'/>
            <Text color={'white'}>4.2/5</Text>
          </HStack>
      </Flex>
      ))}
    </Stack>
  </CardBody>
</Card>
  )
}

export default PlanCard