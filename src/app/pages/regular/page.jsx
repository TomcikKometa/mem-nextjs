"use client";
import { useStore } from "react-redux";
import MemList from "../../components/mem-card/MemList";

export default function Mems() {
  const textDataOne = 'Lista regular';
  const textDataTwo = 'upvote - downvote < 5';
 
  return <MemList textDataOne={textDataOne} textDataTwo={textDataTwo}/>;
  
}

