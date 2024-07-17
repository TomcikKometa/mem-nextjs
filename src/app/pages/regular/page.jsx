"use client";
import MemList from "../../components/mem-list/MemList";

export default function Mems() {
  const textDataOne = 'Lista regular';
  const textDataTwo = 'upvote - downvote < 5';
 
  return <MemList textDataOne={textDataOne} textDataTwo={textDataTwo}/>;
  
}

