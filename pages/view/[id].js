import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Item from '../../src/component/Item';

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const [item, setItem] = useState([]);

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData(){
      axios.get(API_URL)
      .then((res) => {setItem(res.data)})
  }
  useEffect(()=>{
      //id가 있고 id가 0보다 크면 호출
      //id에 undefined가 있어서 확인 위해 적은 조건
      if (id && id > 0) {
          getData();
        }
    }, [id])
    
  return <Item item={item} />
}

export default Post