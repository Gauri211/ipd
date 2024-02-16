import React, { useState } from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import PlanCard from '../components/PlanCard';
import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
  const [visibleCards, setVisibleCards] = useState(4); // Number of cards to display initially
//   const [totalCards, setTotalCards] = useState(8); // Total number of cards

  const handleViewMore = () => {
    setVisibleCards(visibleCards + 4); // Increment visible cards by 4
  };
  const navigate = useNavigate();

  return (
    <Layout>
      <Navbar />
      <SimpleGrid mt='3%' columns={2} columnGap={3} rowGap={5}>
        {[...Array(visibleCards)].map((_, index) => (
          <PlanCard key={index} planNo={`Plan ${index + 1}`}/>
        ))}
      </SimpleGrid>
      {visibleCards && (
        <Button onClick={handleViewMore} mt='2%' variant={'outline'} color={'white'}>
          Load More..
        </Button>
      )}
      <Button onClick={()=> navigate('/customize')} mt='3%' bgColor={'white'} p='0 2%'>
          CUSTOMIZE PLAN
        </Button>
    </Layout>
  );
};

export default Plans;
