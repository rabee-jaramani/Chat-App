// return a user(the person you are chatting to) from selected chat 
// which is contains 2 users(you + the person you are chatting to)
export const notMe = (chatConfig, selectedChat) => {
    return selectedChat.people.find(p => p.person.username !== chatConfig.userName)?.person?.username;
  };