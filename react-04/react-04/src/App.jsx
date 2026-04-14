import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(3);
  const changeData = async() => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setData(res.data);
  }
  useEffect(() => {
   
    changeData();
  }, [index]);


  return (
    <div className='bg-black min-h-screen w-screen px-10 py-10'>
      <div className='flex justify-center mb-6'>
        <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
          onClick={changeData}>
          click me
        </button>
      </div>
     <div className='flex flex-wrap justify-center gap-4'>
        {data.map((item) => {
          return (
            <div key ={item.id} className='py-0 px-0'>
            <div className='bg-gray-800 text-white p-4 rounded mt-4 w-44'>
              <h2 className='text-xl font-bold mb-2 min-h-[3rem] leading-tight'>
                {item.author}
              </h2>
              <img src={item.download_url} alt={item.author} className='w-40 h-40 object-cover rounded' />
            </div>
            </div>
          )
        })}
      </div>
      <div className='flex justify-center gap-4 mt-4'>
       <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4'
        onClick={() => index > 1 && setIndex(index - 1) && changeData()}>
        Previous Page
      </button>
      <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4'
        onClick={() => setIndex(index + 1) && changeData()}>
        Next Page
      </button>
      </div>
     
    </div>
  )
}

export default App
