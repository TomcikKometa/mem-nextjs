"use client";
import { useState } from "react";
import MemList from "../../components/mem-card/MemList";

const data = [
  {
    title: "Mem 1",
    upvotes: 6,
    downvotes: 0,
    img: "1.jpg",
  },
  {
    title: "Mem 2",
    upvotes: 1,
    downvotes: 2,
    img: "2.jpg",
  },
  {
    title: "Mem 3",
    upvotes: 6,
    downvotes: 0,
    img: "3.jpg",
  },
  {
    title: "Mem 4",
    upvotes: 1,
    downvotes: 2,
    img: "4.jpg",
  },
  {
    title: "Mem 5",
    upvotes: 6,
    downvotes: 0,
    img: "5.jpg",
  },
  {
    title: "Mem 6",
    upvotes: 1,
    downvotes: 2,
    img: "6.jpg",
  },
  {
    title: "Mem 7",
    upvotes: 1,
    downvotes: 2,
    img: "7.jpg",
  },
  {
    title: "Mem 8",
    upvotes: 1,
    downvotes: 2,
    img: "8.jpg",
  },
  {
    title: "Mem 9",
    upvotes: 1,
    downvotes: 2,
    img: "9.jpg",
  },
];


export default function Mems() {
  const [hotList, setHotList] = useState([]);
  const [regList, setRegList] = useState([]);

  function addToHotList(mem){
    setHotList(state => [...state,mem])
  }


  return <MemList memList={data} addToHotList={addToHotList}/>;
}
