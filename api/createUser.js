import axios from 'axios'
// backend method to create user on chat engine
const createUser=async(req,res)=>{
    const {userId,userName}=req.body;
    await axios.post('https://api.chatengine.io/projects/people/',
    // user name and secret in chat engine must be provided and private key in the header
    {username:userName,secret:userId},
    {headers:{'Private-key':'0c941f5d-62f0-4a20-b80b-4c07c4d814c3'}}
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
