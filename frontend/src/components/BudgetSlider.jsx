import React from 'react'
import { Avatar, Box, Flex, Heading, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Text } from '@chakra-ui/react'

const BudgetSlider = () => {
  return (
    <Box>
<Slider aria-label='slider-ex-2' zIndex={20}  width={'200px'} colorScheme='white' defaultValue={30}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
</Box>
  )
}

export default BudgetSlider