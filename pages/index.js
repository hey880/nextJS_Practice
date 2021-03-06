import  Head  from 'next/head';
import {useEffect, useState} from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import ItemList from '../src/component/ItemList';
import { Divider, Header } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);
  
  const API_URL = 
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  
    function getData() {
      axios.get(API_URL)
      .then(res => {
        console.log(res.data);
        setList(res.data);
      })
    }

    console.log(list);

    //컴포넌트 실행될 때, 그 때 한 번만 실행
    useEffect(()=>{
      getData();
    }, [])

  return (
    <div>
      <Head>
        <title>Next.JS Practice</title>
      </Head>
      <Header as="h3" style={{ padding: 40 }}>
        베스트 상품
      </Header>
      <Divider/>
      <ItemList list={list.slice(0, 9)}/>
      <Header as="h3" style={{ padding: 40 }}>
        신상품
      </Header>
      <Divider/>
      <ItemList list={list.slice(9)} />
    </div>
  )
}
