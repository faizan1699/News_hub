import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCards from './pages/NewsCards';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showinfotext , setShowInfoText] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {

    const ApiKey = 'a20361fa563d41168edd6017644a8e6b'; //random
    // const ApiKey = '1fff0b27c6ed46e9b5fa9bcb48b6eeea';
    axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-09-25&sortBy=publishedAt&apiKey=${ApiKey}`)
      .then((res) =>
        setData(res.data.articles)
      )

  }, [searchQuery]) 

  const searchNews = (e) => {
    e.preventDefault(); 
    setSearchQuery(e.target[0].value); 
    setShowInfoText(false);
  }

  useEffect(() => {
    setLoading(false);
}, []);

  return (
    <div className="container-md ">

      <h1 className='fw-bold text-success text-center'>News Hub</h1>
       
        <form onSubmit={searchNews}>
         
          <div className="btn-group w-50  w-100 my-3 d-flex justify-content-between align-items-center">

            <input type="text" className='form-control' placeholder='Enter Your desired News Name or reference' />
            <button type="submit" className='btn btn-success'>Search</button>
          
          </div>
        
        </form>

       { showinfotext && <h5 className='fw-bold'>Search Something For Get News : </h5>}

      <div className="row">

        {data.map((article, id) => (
          <div className='col-md-4 mb-2 gx-1' key={id}>
            <NewsCards loading={loading} article={article} />
          </div>

        ))}

      </div>
    </div>
  )
}

export default App;
