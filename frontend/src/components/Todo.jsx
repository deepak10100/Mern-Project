import React from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Container, Divider, Input, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import CardItem from './CardItem'
import { useCreateTodoMutation, useGetTodoQuery } from '../redux/todoApi'
import { Link } from 'react-router-dom'

 function Todo() {
    const [todo, setTodo] = React.useState('')
   let {data:listitem, isLoading, isError}=  useGetTodoQuery()
    let [addTodo] = useCreateTodoMutation()

   console.log(listitem)
    const onChangeHandle = (event) => {
      
        const name = event.target.name;
        const value = event.target.value;
        setTodo(values => ({...values, [name]: value}))
      

    }
    let submitHandler = async (e) => {
        e.preventDefault()
        await addTodo(todo)
        console.log(todo)
        setTodo('')
    }
   
    
    return (
        <>
            <Container maxW='2xl' >
                <Heading textAlign={"center"} >Todo App</Heading>
                <FormControl onSubmit={submitHandler} as={'form'} py={"20px"} method='post' >
                    <FormLabel>Title</FormLabel>
                    <Input mb={"10px"} type='text' name='title' value={todo.title || ""} onChange={onChangeHandle} />
                    <FormLabel >Enter The Notes</FormLabel>
                    <Input type='text' name='des' value={todo.des || ""} onChange={onChangeHandle} />
                    <Center>
                        <Button
                            alignItems={"center"}
                            mt={4}
                            colorScheme='teal'
                            type='submit'
                        >
                            Add Note
                        </Button>
                    </Center>

                </FormControl>
            </Container>
            
               <VStack>
               <SimpleGrid columns={[1, null, 5]} spacing='40px' padding={"10px"}>
                {listitem && listitem.map((task) => (
                  
                     <Box key={task._id} >
                     <CardItem title={task.title} des={task.des} id={task._id}/>
                     </Box>
                
                ))
              }
                </SimpleGrid>
                </VStack>
            
        </>
    )
}

export default Todo
