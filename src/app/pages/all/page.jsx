"use client";
import { useState } from "react";
import MemList from "../../components/mem-card/MemList";

const memList = [
  {
    title: "Mem 1",
    upvotes: 0,
    downvotes: 0,
    img: "1.jpg",
    id:0
  },
  {
    title: "Mem 2",
    upvotes: 0,
    downvotes: 0,
    img: "2.jpg",
    id:1
  },
  {
    title: "Mem 3",
    upvotes: 0,
    downvotes: 0,
    img: "3.jpg",
    id:2
  },
  {
    title: "Mem 4",
    upvotes: 0,
    downvotes: 0,
    img: "4.jpg",
    id:3
  },
  {
    title: "Mem 5",
    upvotes: 6,
    downvotes: 0,
    img: "5.jpg",
    id:4
  },
  {
    title: "Mem 6",
    upvotes: 0,
    downvotes: 0,
    img: "6.jpg",
    id:5
  },
  {
    title: "Mem 7",
    upvotes: 0,
    downvotes: 0,
    img: "7.jpg",
    id:6
  },
  {
    title: "Mem 8",
    upvotes: 0,
    downvotes: 0,
    img: "8.jpg",
    id:7
  },
  {
    title: "Mem 9",
    upvotes: 0,
    downvotes:0,
    img: "9.jpg",
    id:8
  },
];


export default function AllMems() {

  const textDataOne = 'Głosuj już dziś i';
  const textDataTwo = 'graj o Fiata 126p oraz zestaw modnych firanek';
  return <MemList memList={memList} textDataOne={textDataOne} textDataTwo={textDataTwo}/>;
}
