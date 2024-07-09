"use client";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  addToHotList,
  addToRegularList,
  removeFromRegularList,
} from "../../store/reducers/ReducerSlice";
import { useState } from "react";

export default function MemCard({ mem }, { changeRender }) {
  const [downvotes, setDownvotes] = useState(mem.downvotes);
  const [upvotes, setUpvotes] = useState(mem.upvotes);
  const dispatch = useDispatch();

  function addUpVotes(mem) {
    setUpvotes((state) => state + 1);
    const memUpdated = {
      downvotes: mem.downvotes,
      id: mem.id,
      img: mem.img,
      title: mem.title,
      upvotes: upvotes + 1,
    };
    countVotes(memUpdated);
  }

  function removeDownVotes() {
    setDownvotes((state) => state + 1);
    countVotes();
  }

  function countVotes(memUpdated) {
    const countVotes = upvotes - downvotes;
    if (countVotes > 4) {
      dispatch(addToHotList({ memUpdated })),
        dispatch(removeFromRegularList({ memUpdated }))
    } else {
      dispatch(addToRegularList({ memUpdated }));
    }
  }

  return (
    <Card className="card_colour">
      <CardContent className="rounded-md overflow-hidden cursor-pointer hover:scale-[1.67] transition-all card_colour pb-2">
        <div className="w-full aspect-w-16 aspect-h-7">
          <Image
            src={`/` + mem.img}
            alt="Picture of the author"
            width={350}
            height={350}
            className="mt-15 object-cover object-top rounded-sm img_shadow"
          />
        </div>
      </CardContent>
      <CardDescription className="h-10 flex items-center justify-center  pl-6">
        <div className="flex text-lg ">
          <span className="font-semibold pl-2">
            {upvotes} | {downvotes}{" "}
          </span>
        </div>
      </CardDescription>
      <CardFooter className="card_footer card_shadow">
        <div className="p-6 flex justify-between">
          <div className="flex items-center flex-wrap gap-2">
            <p className="text-lg text-gray-600 font-bold">Głosuj:</p>
          </div>
          <div className="flex align-middle">
            <div className="button_add" onClick={() => addUpVotes(mem)}>
              <div className="button-wrapper">
                <div className="text ">W górę&nbsp;</div>
                <span>
                  <div className="icon d-flex align-content-center align-items-center">
                    <img
                      src="/plus-svgrepo-com.svg"
                      height={5}
                      width={5}
                      alt={mem.name}
                      className="h-full w-full object-fill object-top"
                    />
                  </div>
                </span>
              </div>
            </div>
            <div className="button_reg">
              <div className="button-wrapper" onClick={() => removeDownVotes()}>
                <div className="text ">W dół&nbsp;</div>
                <span>
                  <div className="icon d-flex align-content-center align-items-center">
                    <img
                      src="/plus-svgrepo-com.svg"
                      height={5}
                      width={5}
                      alt={mem.name}
                      className="h-full w-full object-fill object-top"
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
