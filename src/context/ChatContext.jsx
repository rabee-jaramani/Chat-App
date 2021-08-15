import { fb } from 'service';
import { createContext, useContext, useEffect, useState } from 'react';
import { newChat, leaveChat, deleteChat, getMessages } from 'react-chat-engine';

export const ChatContext = createContext(' ');

export const ChatProvider = ({ children, authUser }) => {
  const [myChats, setMyChats] = useState();
  const [chatConfig, setChatConfig] = useState('');
  const [selectedChat, setSelectedChat] = useState();

  // Create Chat
  const createChatClick = () => {
    newChat(chatConfig, { title: chatConfig.userName+' Chat' });
  };

  //Delete Chat
  const deleteChatClick = chat => {
    const isAdmin = chat.admin.username === chatConfig.userName;

    if (
      isAdmin &&
      window.confirm('Are you sure you want to delete this chat?')
    ) {
      deleteChat(chatConfig, chat.id);
    } else if (window.confirm('Are you sure you want to leave this chat?')) {
      leaveChat(chatConfig, chat.id, chatConfig.userName);
    }
  };

  // Select Chat
  const selectChatClick = chat => {
    getMessages(chatConfig, chat.id, messages => {
      setSelectedChat({
        ...chat,
        messages,
      });
    });
  };

  // Set the chat config once the
  // authUser has initialized.
  useEffect(() => {
    if (authUser) {
      setTimeout(() => {
        fb.firestore
        .collection('chatUsers')
        .doc(authUser.uid)
        .onSnapshot(snap => {
            setChatConfig({
              userSecret: authUser.uid,
              userName: snap.data().userName,
              avatar: snap.data().avatar,
              projectID: 'c03fd6c7-e831-497d-af9a-07f8d38ba8a6',
            });
        
        });
      }, 3000);

    }
  }, [authUser, setChatConfig,myChats]);

  return (
    <ChatContext.Provider
      value={{
        myChats,
        setMyChats,
        chatConfig,
        selectedChat,
        setChatConfig,
        setSelectedChat,
        selectChatClick,
        deleteChatClick,
        createChatClick,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const {
    myChats,
    setMyChats,
    chatConfig,
    selectedChat,
    setChatConfig,
    setSelectedChat,
    selectChatClick,
    deleteChatClick,
    createChatClick,
  } = useContext(ChatContext);

  return {
    myChats,
    setMyChats,
    chatConfig,
    selectedChat,
    setChatConfig,
    setSelectedChat,
    selectChatClick,
    deleteChatClick,
    createChatClick,
  };
};