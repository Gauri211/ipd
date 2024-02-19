import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Text, Box, Flex, Checkbox, HStack, Divider } from '@chakra-ui/react'
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const PlanCard = ({ planNo, data }) => {
  const navigate = useNavigate();
  console.log(data)
  // const xyz = plan.row_df1;
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
    {Object.keys(data).map((key, index) => (
      <Flex justify={'space-between'}>
          <HStack spacing={5}>
            <Text color={'white'}>{index + 1}</Text>
            <Divider orientation='vertical' />
            <Box color={'white'}>
              <Heading size={'md'}>{data[key].Name}</Heading>
              <Stack spacing={1}>
              <Text mb={'0.2px'}>{data[key].Address}</Text>
              <Text>{data[key].Station}</Text>
              </Stack>
            </Box>
          </HStack>
          <HStack spacing={2} alignItems={'flex-start'}>
            <FaStar color='yellow'/>
            <Text color={'white'}>{data[key].Rating}/5</Text>
          </HStack>
      </Flex>
      ))}
    </Stack>
  </CardBody>
</Card>
  )
}

export default PlanCard