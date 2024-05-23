import React from 'react'
import { Button, Center, Container, Input } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import { useEditTodoMutation, useGetSingleTodoQuery } from '../redux/todoApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function EditForm() {
    let {id} = useParams()
    const [todo, setTodo] = React.useState({})
    let [editTodo] = useEditTodoMutation()
    let {data} = useGetSingleTodoQuery(id)
    useEffect(() => {
        if (data) {
          setTodo((prevTodo) => ({
           ...prevTodo,
            title: data.title,
            des: data.des,
          }));
        }
      }, [data]);
    
    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setTodo((prev) => ({ ...prev, [name]: value }))

    }
    let navigate = useNavigate()
    let submitHandler = async () => {
      let a= await editTodo({...todo, id})
        console.log(a)
        navigate('/')
        setTodo('')
    }
  return (
    <>
      <Container maxW='2xl' >
                <Heading textAlign={"center"} >Edit Todo</Heading>
                <FormControl  py={"20px"} >
                    <FormLabel>Title</FormLabel>
                    <Input mb={"10px"} type='text' name='title' value={todo.title || ""} onChange={onChangeHandle} />
                    <FormLabel >Enter The Notes</FormLabel>
                    <Input type='text' name='des' value={todo.des || ""} onChange={onChangeHandle} />
                    <Center>
                        <Button onClick={submitHandler}
                            alignItems={"center"}
                            mt={4}
                            colorScheme='teal'
                            type='submit'
                        >
                            Save Note
                        </Button>
                    </Center>

                </FormControl>
            </Container>
    </>
  )
}

export default EditForm
