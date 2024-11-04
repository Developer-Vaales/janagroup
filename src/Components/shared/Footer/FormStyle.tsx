import { Button, Input, Textarea } from '@chakra-ui/react'
import emailjs from '@emailjs/browser'
import React, { useReducer, useRef } from 'react'
import { toast } from 'react-toastify'

interface Action {
  type: string
  payload: string
}
interface State {
  name: string
  email: string
  message: string
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

type TextareaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>
function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'NAME_CHANGE':
      return { ...state, name: action.payload }
    case 'EMAIL_CHANGE':
      return { ...state, email: action.payload }
    case 'MESSAGE_CHANGE':
      return { ...state, message: action.payload }
    case 'DELETE_FORM':
      return {
        name: action.payload,
        email: action.payload,
        message: action.payload,
      }
    default:
      return state
  }
}
const FormStyle = () => {
  const [{ name, email, message }, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    message: '',
  })

  const form = useRef<HTMLFormElement | null>(null)
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    emailjs
      .sendForm(
        'service_k5vjrah',
        'template_u44frgd',
        form.current,
        'e2S4DcJNxPge4El9X'
      )
      .then(
        () => {
          // alert('Message sent! Thank you!')
          toast.success('Message sent! Thank you!')
          dispatch({ type: 'DELETE_FORM', payload: '' })
        },
        (error) => {
          return <>loading ...</>
        }
      )
  }
  function handleName(event: InputChangeEvent) {
    dispatch({ type: 'NAME_CHANGE', payload: event.target.value })
  }

  function handleMessage(event: TextareaChangeEvent) {
    dispatch({ type: 'MESSAGE_CHANGE', payload: event.target.value })
  }
  function handleEmail(event: InputChangeEvent) {
    dispatch({ type: 'EMAIL_CHANGE', payload: event.target.value })
  }

  return (
    <>
      <form onSubmit={sendEmail} ref={form}>
        <Input
          variant="flushed"
          _placeholder={{
            color: '#E5E1E6',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '35px',
          }}
          _focusVisible={{
            borderColor: '#fff',
          }}
          mb="1rem"
          fontFamily={'Poppins'}
          name="name"
          value={name}
          id="form_name"
          type="text"
          onChange={handleName}
          required
        />
        <Input
          variant="flushed"
          _placeholder={{
            color: '#E5E1E6',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '35px',
          }}
          _focusVisible={{
            borderColor: '#fff',
          }}
          fontFamily={'Poppins'}
          mb="1rem"
          placeholder="Email"
          onChange={handleEmail}
          value={email}
          required
          id="form_email"
          name="email"
          type="email"
        />
        <Textarea
          variant="flushed"
          _placeholder={{
            color: '#E5E1E6',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '35px',
          }}
          _focusVisible={{
            borderColor: '#fff',
          }}
          fontFamily={'Poppins'}
          mb="3rem"
          placeholder="Message"
          onChange={handleMessage}
          value={message}
          required
          name="message"
        />
        <Button
          w={{ base: '100%', md: '370px' }}
          color="#5A6B45"
          bg="#C9D5BB"
          _hover={{
            bg: '#C9D5BB',
          }}
          _active={{
            bg: '#C9D5BB',
          }}
          borderRadius={'34px'}
          h="67px"
          fontSize="18px"
          fontWeight="400"
          fontFamily={'Inter'}
          type="submit"
          lineHeight="33px"
        >
          Get In Touch
        </Button>
      </form>
    </>
  )
}

export default FormStyle
