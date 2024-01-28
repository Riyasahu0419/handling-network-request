import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostItem from './PostItem';

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error, setErrors] = useState(null);
  const [page, setPage] = useState(1);

  async function fetchData(){
    try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
        );

        const res = await data.json();

        setPosts(res)
        console.log("this is fetched Data",posts)


    }catch (error){

      setErrors(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

useEffect(()=>{
  console.log("this is fetched Data",posts)
},[posts])

 useEffect(()=>{
  console.log("page no.",page)
 },[page])   

  return (
    <>
      <PostItem posts={posts}/>
      <div>
        <button 
        disabled = {page==1? true : false}
        onClick={()=>{

          setPage(page-1);
          fetchData();
        }}>Prev</button>

        <button
        disabled = {page==10 ? true :false}
        onClick={()=>{
          setPage(page+1);
          fetchData();
        }}>Next</button>
      </div>
    </>
  )
}

export default App;
