import {
  ChakraProvider,
  Input,
  CardHeader,
  Card,
  CardBody,
  Text,
  Button,
  Heading,
  CardFooter
} from '@chakra-ui/react'
import {login} from './services/login';


function App() {
  return (
    <ChakraProvider>
      <Card borderRadius='20px' align='center' margin='30px 350px' padding='15px' color='white' bg='rgb(132, 1, 163)'>
        <CardHeader>
          <Heading size='lg'>Dio Bank</Heading>
        </CardHeader>
        <CardBody>
          <Text align='center'>Faça o login</Text>
          <Input placeholder='email' margin='10px 0' type='email'/>
          <Input placeholder='password' type='password'/>
        </CardBody>
        <CardFooter>
          <Button width='250px' onClick={login} colorScheme='rgb(228, 16, 93);'>Entrar</Button>
        </CardFooter>
      </Card>
    </ChakraProvider>
  )
}

export default App;
