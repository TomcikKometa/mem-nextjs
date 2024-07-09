"use client";
import MemList from "../../components/mem-card/MemList";

export default function HotMems() {
  const textDataOne = 'Jesteś na liście "Hot"" i trafiają tu memy jeśli';
  const textDataTwo = 'upvote - downvote > 5';
  return <MemList textDataOne={textDataOne} textDataTwo={textDataTwo}/>;
  
}

