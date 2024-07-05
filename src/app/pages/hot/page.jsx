"use client";
import store from "../../store/store";
import { useStore,useSelector } from "react-redux";
import MemList from "../../components/mem-card/MemList";

export default function Mems() {
  let  showMemList =  useStore((state) => state.mems);
  const showMemLists =  useSelector((state) => state.mems);
  
  let x = showMemList.getState()
  console.log(showMemList.getState())
  return <MemList memList={x.mems}/>;
  
}

