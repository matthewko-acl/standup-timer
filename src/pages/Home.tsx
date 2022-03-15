import * as React from "react"
import {
  ChakraProvider,
  Container,
  VStack,
  extendTheme,
  Flex
} from "@chakra-ui/react"

import _ from 'lodash';

import Stopwatch from "../components/Stopwatch"
import { RandomNamePicker } from "../components/RandomNamePicker"
import {useLocation} from "react-router-dom";

const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }

const theme = extendTheme({ colors })

export const Home = () => {

    const usedNamesList = [];
    const search = useLocation().search;
    const listOfNames = (new URLSearchParams(search).get('names') ?? "Stopwatch").split(",");
    let currentName = _.sample(listOfNames);
    _.remove(listOfNames, (item) => item === currentName);
    usedNamesList.push(currentName);

    return(
        <ChakraProvider theme={theme}>
            <Flex minH={'100vh'} align={'center'} justify={'center'}>
                <Container centerContent>
                        <VStack spacing={4}>
                            <RandomNamePicker name={currentName} />
                            <Stopwatch />
                        </VStack>
                </Container>
            </Flex>
        </ChakraProvider>
  );
}
  