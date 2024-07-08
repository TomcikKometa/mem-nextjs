"use client";
import store from "../../store/store";
import { useStore,useSelector } from "react-redux";
import MemList from "../../components/mem-card/MemList";

export default function Mems() {
  let  showMemList =  useStore((state) => state.mems);
  const textDataOne = 'Lista regular';
  const textDataTwo = 'upvote - downvote < 5';
  
  let x = showMemList.getState()
  console.log(x.memRootReducer)
  return <MemList memList={x.memRootReducer.stateList.stateList.regular} textDataOne={textDataOne} textDataTwo={textDataTwo}/>;
  
}

