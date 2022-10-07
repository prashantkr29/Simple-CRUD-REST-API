import { v4 as uuidv4 } from 'uuid';

let users = []

export const getusers = (req,res)=>{
    res.send(users);
}


export const postuser= (req,res)=>{

    const user=req.body;
    const Userid=uuidv4();

    users.push({...user, id:Userid});
    res.send(`user with the name ${req.body.firstname}has been sent`);
}

export const finduser= (req,res)=>{
    const {id} =req.params;
    const find = users.find((user)=>user.id==id);
    res.send(find);
}

export const deleteuser =(req,res)=>{
    const {id}=req.params;
    
    users=users.filter((user)=>user.id!=id);

    res.send(`User with the id:${id} has been removed`);

}
export const updateuser = (req,res)=>{
    const {id}=req.params;
    const {firstname , lastname, age}=req.body; 

    const user = users.find((user)=>user.id==id);

    if(firstname){
        user.firstname=firstname
    }
    if(lastname){
        user.lastname=lastname
    }
    if(age){
        user.age=age
    }

    res.send(`user with the id ${id} has been updated`);

}