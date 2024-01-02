import React from 'react'

const Messages = [
  {
    content: 'Hey There!',
    senderId: "mmardi",
    createdAt: 'Today, 8.30pm'
  },
  {
    content: 'How are you?',
    senderId: "mmardi",
    createdAt: 'Today, 8.30pm'
  },
  {
    content: 'Hello',
    senderId: "notmmardi",
    createdAt: 'Today, 8.33pm'
  },
  {
    content: 'I am fine and how are you?',
    senderId: "notmmardi",
    createdAt: 'Today, 8.34pm'
  },
  {
    content: 'd',
  senderId: "mmardi",
    createdAt: 'Today, 8.36pm'
  },
  {
    content: 'Yes Sure!',
    senderId: "notmmardi",
    createdAt: 'Today, 8.58pm'
  },
  {
    content: 'Yes Sure!',
    senderId: "notmmardi",
    createdAt: 'Today, 8.58pm'
  },
  {
    content: 'Yes Sure!',
    senderId: "notmmardi",
    createdAt: 'Today, 8.58pm'
  },
  {
    content: 'Yes Sure!',
    senderId: "notmmardi",
    createdAt: 'Today, 8.58pm'
  },
  {
    content: 'Yes Sure!',
    senderId: "mmardi",
    createdAt: 'Today, 8.58pm'
  },
  {
    content: 'Yes Sure!',
    senderId: "notmmardi",
    createdAt: 'Today, 8.58pm'
  },
  {
    content: 'Yes Sure!',
    senderId: "mmardi",
    createdAt: 'Today, 8.58pm'
  },
]

const MessagesArea = () => {
  return (
    <div className="w-full h-full px-4 overflow-y-scroll scroll-hidden py-2 flex-col-reverse flex">
      {
        Messages.map(message => (
          message.senderId === 'mmardi' ?
            (
              <div className='bg-[#E7E7E7] max-w-[50%]  w-fit h-fit px-6 py-2 rounded-[16px] font-[400] mt-2 relative'>
                <p className='text-wrap  w-fit '>{message.content}</p>
                <div className='w-3 h-3 bg-[#E7E7E7] absolute rounded-full -left-3'></div>
              </div>
            ) 
            :
            ( 
              <div className='bg-[#6E00FF] break-normal text-white w-fit px-6 py-2 rounded-[16px] font-[400] mt-2 relative ml-auto'>
                <p>{message.content}</p>
                <div className='w-3 h-3 bg-[#6E00FF] absolute rounded-full -right-3'></div>
              </div>
            )
        )).reverse()
      }
    </div>

  )
}

export default MessagesArea