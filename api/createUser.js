import axios from 'axios'

const createUser=async(req,res)=>{
    const {userId,userName}=req.body;
    axios
    .post('https://api.chatengine.io/projects/people/',
    {username:userName,secret:userId},
    {headers:{'Private-key':process.env.chat_engine_private_key}}
    )
    .then(apiRes=>{
        res.json({
            body:apiRes.body,
            error:null
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