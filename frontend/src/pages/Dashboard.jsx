import React from 'react';
import { Flex, Box, VStack, Heading, Text } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ControlledCarousel from '../components/ControlledCarousel';
import Layout from '../components/Layout'
import { SimpleGrid } from '@chakra-ui/react'
import InterestCards from '../components/InterestCards';

const Dashboard = () => {
  return (
    <Layout>
          <ControlledCarousel />
          <InterestCards /> 
    </Layout>
  );
};

export default Dashboard;
