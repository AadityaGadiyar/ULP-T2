import React,{useState,useEffect} from 'react';
import axios from 'axios';
function Home() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem("token2");
        
        async function fetchData() {
          try {
            const request = await axios({
              method: "GET",
              url: "https://api.spotify.com/v1/me",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }).then((res) => {
              console.log(res);
              setUser(res);
            });
          } catch (error) {
            console.log(error);
          }
        }

        fetchData();
    },[])
    return (
    user?(
        <div
        className="container-fluid "
        style={{ background: "black", height: "100vh" }}>
        <div className="container">
        <div className="jumbotron align-middle bg-dark text-light">
        <h1 className="display-4">{user.data.display_name}</h1>
            <div>
                <img src={user.data.images[0].url} className='image-fluid rounded-circle py-2'></img>
            </div>
            <hr className="my-4"></hr>
    <h4 className='display-6'>Followers : {user.data.followers.total}</h4>
            <p>
            Welcome to spotify
            </p>
            
        </div>
        </div>
    </div>
    ):null      
    );
}

export default Home
