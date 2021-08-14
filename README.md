--api: createUser method
    api request using axios to create user on chat engine site AFTER signip proccess, this api on server side.

--service: intilize firebase connection (firebase.js), fb object includes auth, storage and firestore.

--hooks:
    _useAuth: for user state if it is looged in or if its is a firebase user (stil not logged in)
    if the user state is null then it is not logged in, undefined user still we dont know its state.
    _useDebounce: delay user search entries when typing to prevent send many requests to server when searchin for a user(this feature removed, when click on add contact to chat with, directly a list od users appears).
    _useResolved: to return users that are not undefined.

--helpres:
    _groupMessages: to group messages that belong to user.
    _joinUserNames: group user names in one array to display them in group chat.
    _notMe: return the user that you are chatting from.

--context: to manage messaging
    _createChatClick: on click create an empty chat.
    _deleteChatClick: delete chat if the user is the owner of that chat (if not the owner then leaveChat).
    _selectChatClick: select chat and get its messages.
    in chat context create a config for a chat with username, avatar, userSecret and projectID.
    it returns ChatContextProvider.
    useChat hook returns the values: myChats, setMyChats, ChatConfig, selectChat, setChatConfig, setSelectedChat, selectChatClick, deleteChatClick and createChatClick.

--components:
    _Signup: uses fb.auth.createUserWithEmailAndPassword request to create user.
        formik for signup form and formikConfig for validation
    _Login: uses fb.auth.signinUserWithEmailAndPassword request to create user.
        formik for signup form and formikConfig for validation
    _SearchUsers: to search for a user when trying to add user to the chat (this feature as I said improved to list all users so no need to search), includes getOtherPeople method to get the people that are not in the chat.
    _messageList: list all messages in the chat using groupMessages to map them.
    _chatsResolved: render the chat side bar and list the chats if available.
    _ImageUpload: to upload images to the chat.
    _FormField: textbox with label and error message, used in login and signup forms.
    _ChatToolbar: the header of each chat.
    _ChatList: list all chat available for each user to the right side.
    _ChatInput: handle sending messages in the chat, sendChatMessage(text) and onFileAttach(image).
    _ChatAvatar: set avatar for each user and use first lettter in upper case to diplay it as icon.
    _Chat: contains chat-container and uses ChatEngine component.
    _App: uses ChatProvider to wrap our app.