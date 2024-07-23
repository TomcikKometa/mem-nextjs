"use client";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { upvote, downvote } from "../../store/reducers/ReducerSlice";

export default function MemCard({ mem }) {
  const dispatch = useDispatch();

  function handleUpvote() {
    dispatch(upvote({ id: mem.id }));
  }

  function handleDownvote() {
    dispatch(downvote({ id: mem.id }));
  }

  return (
    <Card className="card_colour">
      <CardContent className="rounded-md overflow-hidden cursor-pointer hover:scale-[1.67] transition-all card_colour pb-2">
        <div className="w-full aspect-w-16 aspect-h-7">
          <Image
            src={`/${mem.img}`}
            alt="Picture of the author"
            width={350}
            height={350}
            className="mt-15 object-cover object-top rounded-sm img_shadow"
          />
        </div>
      </CardContent>
      <CardDescription className="h-10 flex items-center justify-center pl-6">
        <div className="flex text-lg ">
          <span className="font-semibold pl-2">
            {mem.upvotes} | {mem.downvotes}
          </span>
        </div>
      </CardDescription>
      <CardFooter className="card_footer card_shadow">
        <div className="p-6 flex justify-between">
          <div className="flex items-center flex-wrap gap-2">
            <p className="text-lg text-gray-600 font-bold">Głosuj:</p>
          </div>
          <div className="flex align-middle">
            <div className="button_add" onClick={handleUpvote}>
              <div className="button-wrapper">
                <div className="text">W górę&nbsp;</div>
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
              <div className="button-wrapper" onClick={handleDownvote}>
                <div className="text">W dół&nbsp;</div>
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