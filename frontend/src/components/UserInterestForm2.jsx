import { Box, HStack, Image, VStack } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { ImageContext } from '../context/selected';
import nature from '../assets/nature.png';
import restaurants from '../assets/Restaurants.png';
import malls from '../assets/malls.png';
import temples from '../assets/temples.png';
import clubs from '../assets/clubs.png';
import theatre from '../assets/theatre.png';
import resort from '../assets/resort.png';
import sports from '../assets/sports.png';
import tourist from '../assets/tourist.png';
import { FaCheck } from "react-icons/fa";

const UserInterestForm2 = () => {
    const { selectedImageNames } = useContext(ImageContext);

    // State to track selected types for each category
    const [selectedTypes, setSelectedTypes] = useState({
        Restaurants: [],
        Nature: [],
        Clubs: [],
        Malls: [],
        Temples: [],
    });

    console.log(selectedTypes);

    // console.log(selectedImageNames);

    // Filter out the selected images
    const selectedImages = imageData.filter(image => selectedImageNames.includes(image.name));

    // Function to handle selection of categories
    const handleCategorySelect = (category, selectedType) => {
        setSelectedTypes(prevState => ({
            ...prevState,
            [category]: [...prevState[category], selectedType],
        }));
    };

    // Render images based on selected category
    const renderCategoryImages = (category, categoryList) => (
        categoryList.map((image, index) => (
            <div key={index} style={{ position: 'relative' }}>
                <Image
                    src={image.src}
                    borderRadius={10}
                    onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleCategorySelect(category, image.name)}
                    // height={'30vh'}
                    // width={'11vw'}
                />
                {selectedTypes[category].includes(image.name) && (
                    <Box
                        position="absolute"
                        top="-10px"
                        right="-10px"
                        bgColor="white"
                        color="black"
                        borderRadius="50%"
                        width="25px"
                        height="25px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        fontWeight="bold"
                    >
                        <FaCheck />
                    </Box>
                )}
            </div>
        ))
    );

    return (
        <Box>
            <VStack spacing={8}>
                {selectedImages.map((image, index) => (
                    <Box key={index} display={'flex'} flexDirection={'row'}>
                        <Image
                            src={image.src}
                            borderRadius={10}
                            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                            onMouseLeave={(e) => e.target.style.opacity = '1'}
                            style={{ cursor: 'pointer' }}
                            marginRight={'10%'}
                        />
                        {/* Render additional images based on selected category */}
                        {image.name === 'Restaurants' && (
                            <HStack spacing={5}>
                                {renderCategoryImages(image.name, restaurantsList)}
                            </HStack>
                        )}
                        {image.name === 'Nature' && (
                            <HStack spacing={5}>
                                {renderCategoryImages(image.name, natureList)}
                            </HStack>
                        )}
                        {image.name === 'Clubs' && (
                            <HStack spacing={5}>
                                {renderCategoryImages(image.name, clubsList)}
                            </HStack>
                        )}
                        {image.name === 'Malls' && (
                            <HStack spacing={5}>
                                {renderCategoryImages(image.name, mallsList)}
                            </HStack>
                        )}
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

const imageData = [
    { src: nature, name: 'Nature' },
    { src: restaurants, name: 'Restaurants' },
    { src: malls, name: 'Malls' },
    { src: temples, name: 'Temples' },
    { src: clubs, name: 'Clubs' },
    { src: theatre, name: 'Theatre' },
    { src: resort, name: 'Resorts' },
    { src: sports, name: 'Adventure Sports' },
    { src: tourist, name: 'Tourist places' },
];

const natureList = [
    { src: nature, name: 'Nature' },
    { src: restaurants, name: 'Restaurants' },
    { src: malls, name: 'Malls' },
    { src: temples, name: 'Temples' },
]

const restaurantsList = [
    { src: nature, name: 'Nature' },
    { src: restaurants, name: 'Restaurants' },
    { src: malls, name: 'Malls' },
    { src: temples, name: 'Temples' },
]

const mallsList = [
    { src: theatre, name: 'Theatre' },
    { src: resort, name: 'Resorts' },
    { src: sports, name: 'Adventure Sports' },
    { src: tourist, name: 'Tourist places' },
]
const templesList = [
    { src: theatre, name: 'Theatre' },
    { src: resort, name: 'Resorts' },
    { src: sports, name: 'Adventure Sports' },
    { src: tourist, name: 'Tourist places' },
]
const clubsList = [
    { src: theatre, name: 'Theatre' },
    { src: resort, name: 'Resorts' },
    { src: sports, name: 'Adventure Sports' },
    { src: tourist, name: 'Tourist places' },
]
const theatersList = [
    { src: theatre, name: 'Theatre' },
    { src: resort, name: 'Resorts' },
    { src: sports, name: 'Adventure Sports' },
    { src: tourist, name: 'Tourist places' },
]
const resortList = [
    { src: theatre, name: 'Theatre' },
    { src: resort, name: 'Resorts' },
    { src: sports, name: 'Adventure Sports' },
    { src: tourist, name: 'Tourist places' },
]
const sportsList = [
    { src: theatre, name: 'Theatre' },
    { src: resort, name: 'Resorts' },
    { src: sports, name: 'Adventure Sports' },
    { src: tourist, name: 'Tourist places' },
]
const touristList = [
    { src: theatre, name: 'Theatre' },
    { src: resort, name: 'Resorts' },
    { src: sports, name: 'Adventure Sports' },
    { src: tourist, name: 'Tourist places' },
]

export default UserInterestForm2;

// // Function to render carousel items for a category
// const renderCategoryImages = (category, categoryList) => {
//     const carouselItems = [];
//     for (let i = 0; i < categoryList.length; i += 4) {
//         const images = categoryList.slice(i, i + 4).map((image, index) => (
//             <Box key={index} position="relative">
//                 <Image
//                     src={image.src}
//                     alt={image.name}
//                     borderRadius={10}
//                     onMouseEnter={(e) => e.target.style.opacity = '0.7'}
//                     onMouseLeave={(e) => e.target.style.opacity = '1'}
//                     style={{ cursor: 'pointer' }}
//                     onClick={() => handleCategorySelect(category, image.name)}
//                 />
//                 {selectedTypes[category].includes(image.name) && (
//                     <Box
//                         position="absolute"
//                         top="-10px"
//                         right="-10px"
//                         bgColor="white"
//                         color="black"
//                         borderRadius="50%"
//                         width="25px"
//                         height="25px"
//                         display="flex"
//                         justifyContent="center"
//                         alignItems="center"
//                         fontWeight="bold"
//                     >
//                         <FaCheck />
//                     </Box>
//                 )}
//             </Box>
//         ));
//         carouselItems.push(
//             <CarouselItem key={i}>
//                 <HStack spacing={5}>
//                     {images}
//                 </HStack>
//             </CarouselItem>
//         );
//     }
//     return carouselItems;
// };