import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import PlanCard from '../components/PlanCard';
import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Plans = () => {
  // window.location.reload()
  const [visibleCards, setVisibleCards] = useState(4); // Number of cards to display initially
//const [totalCards, setTotalCards] = useState(8); // Total number of cards
  const [plans, setPlans] = useState([]);

  const handleViewMore = () => {
    setVisibleCards(visibleCards + 4); // Increment visible cards by 4
  };
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/plans')
    .then(res => {
      setPlans(res.data)
    })
    .catch(err => console.log(err))
    // window.location.reload()
  }, [])

  return (
    <Layout>
      <Navbar />
      <SimpleGrid mt='3%' columns={2} columnGap={3} rowGap={5}>
        {plans.map((plan, index) => (
          <PlanCard key={index} planNo={`Plan ${index + 1}`} data={plan}/>
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
