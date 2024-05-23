import React from 'react'
import {   CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Card, Box, SimpleGrid, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useDeleteTodoMutation } from '../redux/todoApi'
function CardItem({id, title, des}) {
  let [deleteTodo]= useDeleteTodoMutation()
  let deleteHandler  = async()=>{
    await deleteTodo(id)
  }
  return (
    <>
   <Card maxW='sm'>
  <CardBody >
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
        {des}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='blue'>
       <Link to={`edit/${id}`}>Edit</Link>
      </Button>
      <Button variant='ghost' onClick={deleteHandler} colorScheme='blue'>
        Delete
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
 
    </>
  )
}

export default CardItem
