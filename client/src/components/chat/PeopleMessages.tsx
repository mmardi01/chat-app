import Image from "next/image";

const peopleMessages = [
  {
    messageImage: '/me.jpg',
    messageName: 'Mustapha',
    lastMessage: 'Nothing',
    lastMessageDate: 'Today, 9.52pm',
    unreadMessages: 4,
  },
  {
    messageImage: '/me.jpg',
    messageName: 'Mustapha',
    lastMessage: 'Nothing',
    lastMessageDate: 'Today, 9.52pm',
    unreadMessages: 4,
  },
  {
    messageImage: '/me.jpg',
    messageName: 'Mustapha',
    lastMessage: 'clear',
    lastMessageDate: 'Today, 9.52pm',
    unreadMessages: 4,
  },
  {
    messageImage: '/me.jpg',
    messageName: 'Mustapha',
    lastMessage: 'clear',
    lastMessageDate: 'Today, 9.52pm',
    unreadMessages: 4,
  },
  {
    messageImage: '/me.jpg',
    messageName: 'Mustapha',
    lastMessage: 'clear',
    lastMessageDate: 'Today, 9.52pm',
    unreadMessages: 4,
  },
  {
    messageImage: '/me.jpg',
    messageName: 'Mustapha',
    lastMessage: 'ttrash',
    lastMessageDate: 'Today, 9.52pm',
    unreadMessages: 4,
  },
]

function PeopleMessages() {
  return (
    <div className="p-5 w-full bg-white h-[50%] rounded-[20px] shadow-[#79c6ef46] shadow-md">
      <h1 className="font-semibold px-1 text-2xl m-2">Messages</h1>
      <div className="w-full h-[90%] overflow-y-scroll scroll-hidden">
        {
          peopleMessages.map((message, index) => (
            <div key={index} className="flex hover:bg-gray-100 cursor-pointer gap-6 items-center w-full h-[80px] border-b border-[#b4abab99]">
              <Image
                className="w-[50px] h-[50px] object-cover object-center rounded-full"
                src={message.messageImage}
                width={50}
                quality={80}
                height={50}
                alt="me"
              ></Image>
              <div>
                <h1 className="font-semibold text-xl">{message.messageName}</h1>
                <p className=" text-lg font-light">{message.lastMessage}</p>
              </div>
              <div className="ml-auto flex flex-col gap-1">
                <p className="font-light text-[#7C7C7C]">{message.lastMessageDate}</p>
                <span className="bg-red-500 rounded-full text-white w-6 text-center h-6 ml-auto">{message.unreadMessages}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>

  );
}

export default PeopleMessages;