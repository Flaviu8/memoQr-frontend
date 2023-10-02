import React from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

export default function List({id}) {
    const [user, setUser] = React.useState([])
    const [error, setError ] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    
    React.useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const response = await axios.get(`https://app-ab8d0f9a-3cea-43eb-a9e5-97eb4e13c3b9.cleverapps.io/user/${id}`);
            setUser(response.data)
            setLoading(false)
          } catch (error) {
            setError(error);
          }
        };
    
        fetchData();
      }, [id]);
      
if(loading) {
    return (
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
    )
}

  return (
    <div>
    <h3 style={{marginLeft:"1em", marginTop:"1em"}}>List</h3> 
        {user.map((item) =>{
            return (
           <div key={item.id} style={{marginTop:"2em"}}>  
                <ul style={{listStyle: "none"}}>
                    <li >
                        <Link style={{textDecoration:"none"}} to={`/user/${item.id}`}>Link {item.id} {JSON.parse(item.lastname)}</Link>
                    </li>
                </ul>
            </div>   
            )
        })}
        {error ? <div></div> : null}
    </div>
  )
}
