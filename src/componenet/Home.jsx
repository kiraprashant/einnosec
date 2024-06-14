import React , {useEffect , useState} from 'react'
import axios from "axios"
import UserData from './api/UserData'



function Home() {
    const [data,setdata] = useState([])

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> setdata(res.data))
    // console.log(res)
    .catch((err)=> console.log("error :",err))
},[])
  return (
    <>
         <table style={{width:"100%"}}>
            <thead> 
                {/* also add table header samentic tag for seo purpose */}
           <tr>
            <th>Id</th>
              <th>userId</th>
              <th>title</th>
              <th>body</th>
              <th>action</th>
           </tr>
           </thead>
           <tbody>
           {
            data.map((elem)=> {
                return(
                   <UserData key = {elem.id} data = {elem} /> 
                //    i created the new component for easy To Read
                )
            })
           }
           </tbody>
        </table>
    
      
    </>
  )
}

export default Home
