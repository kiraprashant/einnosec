import React , {useState} from 'react'
import axios from "axios"

function UserData({data}) {
    const {id,userId,title,body} = data

    // state for whether is it updating or not
    const [isUpdate,setisUpade] = useState(false) 
    const [user,setuser] = useState({
        id:id,
        userId:userId,
        title:title,
        body:body,
    }) 

    const HandleChange = (e) =>{
       const name = e.target.name
       const value = e.target.value

       setuser({ ...user, [name]: value }) // change the input filed for dynamic
    }

    // Submit the data to backend
    const handlesubmit = () => {
      const data = {
        id:user.id,
        userId:user.userId,
        title:user.title,
        body:user.body,
      }
      axios.patch(`https://jsonplaceholder.typicode.com/posts/${user.id}`,data).then((res) => 
        {
            console.log(user)
            setisUpade(false)
            alert("Successfully Update")
        })
      .catch((err)=> {
        console.log("error :" , err)
        alert("Data Not Updated ")
      })
      console.log(console.log(data))
    }

  return (

    <tr key = {id}>
    <td>
        {/* checking condition user updating data or not */}
        {
            !isUpdate?
             id
             :
            <input type='text'
             value = {user.id}
             name="id"
            //  unique id so this will be readony we cant change the value 
             readOnly
             onChange={(e)=> HandleChange(e)}
            />
        }
    </td>
    <td>
            {/* checking condition user updating data or not */}
        {
         !isUpdate?
        userId:
        <input type='text'
             value = {user.userId}
             name="userId"
             onChange={(e)=> HandleChange(e)}
             />
        }
    </td>
    <td>
            {/* checking condition user updating data or not */}
        {
        !isUpdate?
        title:
    <input type='text'
             value = {user.title}
             name="title"
             onChange={(e)=> HandleChange(e)}/>
        }
    </td>
    <td>
            {/* checking condition user updating data or not */}
    {!isUpdate?
    body:
    <input type='text'
             value = {user.body}
             name="body"
             onChange={(e)=> HandleChange(e)}/>
    }
    </td>
        {/* checking condition user updating data or not */}
    <td>{isUpdate ? <button onClick={()=> handlesubmit()}>Update</button>:<button onClick={()=> setisUpade(true)}>Edit</button>}</td>
    </tr>
   
  )
}

export default UserData
