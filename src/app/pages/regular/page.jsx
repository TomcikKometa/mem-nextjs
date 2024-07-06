"use client";
import store from "../../store/store";
import { useStore,useSelector } from "react-redux";
import MemList from "../../components/mem-card/MemList";

export default function Mems() {
  let  showMemList =  useStore((state) => state.mems);
  // const showMemLists =  useSelector((state) => state.mems.rootReducer.stateList.StateList);
  
  let x = showMemList.getState()
  console.log(x.memRootReducer.stateList.stateList.hot)
  return <MemList memList={x.memRootReducer.stateList.stateList.regular}/>;
  
}

