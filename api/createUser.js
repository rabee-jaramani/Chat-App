import axios from 'axios'
// backend method to create user on chat engine
const createUser=async(req,res)=>{
    const {userId,userName}=req.body;
    axios.post('https://api.chatengine.io/projects/people/',
    // user name and secret in chat engine must be provided and private key in the header
    {username:userName,secret:userId},
    {headers:{'Private-key':process.env.chat_engine_private_key}}
    )
    .then(apiRes=>{
        res.json({
            body:apiRes.body,
            error:'NO ERROR hhhhhhhh'
        })
    })
    .catch(()=>{
        res.json({
            body:null,
            error:'Error in creating User'
        })
    })
};

export default createUser