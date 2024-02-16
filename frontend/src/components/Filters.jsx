import { Avatar, Box, Flex, Heading, Input, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
import { useContext } from 'react'
import { ImageContext } from '../context/selected'
import BudgetSlider from './BudgetSlider'

const Filters = () => {
    const [sliderValue, setSliderValue] = useState(50)
    const { selectedImageNames } = useContext(ImageContext);

    console.log(selectedImageNames)
  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }

  return (
    <Box>
        <Flex bg='#1F1F1F' height={'150px'} borderRadius={10} justifyContent={'space-around'} align={'center'} p='8%' mb='5%'>
            <Box>
                <Heading color={'white'} size={'sm'}>Welcome</Heading>
                <Text fontSize={20} color={'white'} size={'sm'}>Jessica</Text>
            </Box>
            <Box>
            <Avatar color={'white'}/>
            </Box>
        </Flex>
        <Box bg='#1F1F1F' borderRadius={10} height={'80vh'}>
            <Box m='2% 0' p='8%'>
            <Box display="inline-block">
      {selectedImageNames.map((name, index) => (
        <Box
          key={index}
          color={'white'}
          borderRadius={5}
          p='1% 8%'
          border={'1px solid white'}
          display="inline-block"
          fontSize="16px" // Adjust font size as needed
          lineHeight="1.5" // Adjust line height as needed
          margin="5px" // Adjust margin as needed
        >
          {name}
        </Box>
      ))}
    </Box>
            </Box>
            <Text fontSize={'18px'} color='white' bgColor={'grey'} p='1% 0 1% 8%' fontWeight={500}>FILTERS</Text>
            <Box p='2% 8%'>
                <Stack spacing={4}>
                <Text fontSize={15} color={'white'} mb='1%'>NO OF HOURS</Text>
                <NumberInput defaultValue={5} min={1} max={24}>
                    <NumberInputField bgColor={'transparent'} borderRadius={5} border={'1px solid white'} color={'white'}/>
                    <NumberInputStepper color={'white'}>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput> 
                <Text fontSize={15} color={'white'} mb='1%'>BUDGET</Text>
                <Slider aria-label='slider-ex-2' zIndex={20}  width={'200px'} color='white' defaultValue={30}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
                <Text fontSize={15} color={'white'} mb='1%'>RATING</Text>
                <BudgetSlider />
                <Text fontSize={15} color={'white'} mb='1%'>MODE OF TRANSPORT</Text>
                <Select
  placeholder='Any'
  variant='filled'
  bg='#1F1F1F'
  color='white'
  _placeholder={{ color: 'white' }}
  _focus={{ bg: '#1F1F1F', color: 'white' }}
  width={'200px'}
>
  <option value='option1'>Driving</option>
  <option value='option2'>Walking</option>
  <option value='option3'>Train</option>
</Select>
                </Stack>

            </Box>
            
        </Box>
    </Box>
  )
}

export default Filters