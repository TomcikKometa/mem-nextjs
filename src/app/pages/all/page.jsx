"use client";
import MemList from "../../components/mem-card/MemList";

export default function AllMems() {
  const textDataOne = 'Głosuj już dziś i';
  const textDataTwo = 'graj o Fiata 126p oraz zestaw modnych firanek';
  return <MemList  textDataOne={textDataOne} textDataTwo={textDataTwo}/>;
}
