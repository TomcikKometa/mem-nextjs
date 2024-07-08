"use client";
import store from "../../store/store";
import { useStore,useSelector } from "react-redux";
import MemList from "../../components/mem-card/MemList";

export default function HotMems() {
  let  showMemList =  useStore((state) => state.mems);
  const textDataOne = 'Jesteś na liście "Hot"" i trafiają tu memy jeśli';
  const textDataTwo = 'upvote - downvote > 5';
  
  let x = showMemList.getState()
  console.log(x);
  return <MemList memList={x.memRootReducer.stateList.stateList.hot} textDataOne={textDataOne} textDataTwo={textDataTwo}/>;
  
}

