import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import {Box, Container, Flex, VStack} from "@chakra-ui/react";
import Header from "./components/Header";
import CallsTab from "./components/tabs/CallsTab";

function App() {
  return (
      <Flex w="100%" h="100vh" className="App">
          <Sidebar/>
          <VStack w="100%" h="100%" bg="#F1F4F9">
              <Header height="62"/>
              <Box w="100%" h="100%" overflow="auto">
                  <Container maxW="6xl">
                      <CallsTab/>
                  </Container>
              </Box>
          </VStack>
      </Flex>
  );
}

export default App;
