import { useState, useEffect } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text, Flex, Container } from '@chakra-ui/react'

const Stopwatch = () => { 
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval: ReturnType<typeof setTimeout> = setTimeout(function () { console.log("Test")  }, 500);
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  
  return (
    <Container centerContent>
      <Flex alignItems="center">
        <Text fontSize='5xl'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</Text>
        <Text fontSize='5xl'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</Text>
        <Text fontSize='5xl'>{("0" + ((time / 10) % 100)).slice(-2)}</Text>
      </Flex>
      <br />
      <br />
      <br />
      <Flex alignItems="center">
        <ButtonGroup variant='outline' spacing='6'>
          <Button colorScheme="blue" onClick={() => setRunning(true)}>Start</Button>
          <Button colorScheme="red" onClick={() => setRunning(false)}>Stop</Button>
          <Button colorScheme="green" onClick={() => setTime(0)}>Reset</Button>       
        </ButtonGroup>
      </Flex>
    </Container>
  );

};

export default Stopwatch;
