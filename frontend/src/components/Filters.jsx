import { Avatar, Box, Button, Flex, Heading, Input, Select, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Text, Tooltip } from '@chakra-ui/react'
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
import { useNavigate } from 'react-router-dom'

const Filters = () => {
    const [sliderValue, setSliderValue] = useState(50)
    const { selectedImageNames } = useContext(ImageContext);

    console.log(selectedImageNames)
    const navigate = useNavigate('/plans')

  return (
    <Box>
        <Flex bg='#1F1F1F' height={'150px'} borderRadius={10} justifyContent={'space-around'} align={'center'} p='8%' mb='5%'>
            <Box>
                <Heading color={'white'} size={'md'}>Welcome</Heading>
                <Text fontSize={20} color={'white'} size={'sm'}>Jessica</Text>
            </Box>
            <Box>
            <Avatar color={'white'} h='70px' w='70px'/>
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
                <Stack spacing={2}>
                <Text fontSize={15} color={'white'} mb='1%'>NO OF HOURS</Text>
                <NumberInput defaultValue={5} min={1} max={24}>
                    <NumberInputField bgColor={'transparent'} borderRadius={5} border={'1px solid white'} color={'white'}/>
                    <NumberInputStepper color={'white'}>
                        <NumberIncrementStepper color={'white'}/>
                        <NumberDecrementStepper color={'white'}/>
                    </NumberInputStepper>
                </NumberInput> 
                <Text fontSize={15} color={'white'} mb='8%'>BUDGET</Text>
                <Slider
      id='slider'
      defaultValue={5}
      min={0}
      max={100}
      colorScheme='white'
      onChange={(v) => setSliderValue(v)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='white'
        color='black'
        placement='top'
        label={`${sliderValue}%`}
        isOpen={true} // Set isOpen to true to make the tooltip display constantly
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
                <Text fontSize={15} color={'white'} m='5% 0'>RATING</Text>
                <Slider aria-label='slider-ex-2' colorScheme='white' defaultValue={30}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                <Text fontSize={15} color={'white'} mb='1%'>MODE OF TRANSPORT</Text>
                <Select
                    placeholder='Any'
                    variant='filled' // Use 'flushed' variant for a cleaner appearance
                    bg='#1F1F1F'
                    color='white'
                    borderColor='white'
                    _placeholder={{ color: 'white', opacity: '0.7' }} // Adjust placeholder opacity as needed
                    _focus={{ bg: '#1F1F1F', color: 'white', borderColor: 'white' }} // Adjust focus styles as needed
                    >
                    <option value='option1' color='black'>Driving</option>
                    <option value='option2'>Walking</option>
                    <option value='option3'>Train</option>
                </Select>
                <Button 
                bgColor={'white'} 
                color={'black'} 
                fontWeight={500} 
                mt='3%' 
                w='150px' 
                alignSelf='center'
                onClick={() => navigate('/plans')}
                >PROCEED</Button>

                </Stack>

            </Box>
        </Box>
    </Box>
  )
}

export default Filters