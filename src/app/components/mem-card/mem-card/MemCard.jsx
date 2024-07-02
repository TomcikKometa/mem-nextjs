"use client";

import { Card, CardContent, CardDescription, CardFooter } from "../../ui/card";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/reducers/ReducerSlice";

export default function MemCard({ mem, addToHotList }) {
  const showMemList =  useSelector((state) => state.mem)

  const dispatch = useDispatch();

  function showList() {
    console.log(showMemList);
  }

  return (
    <Card className="card_shadow ">
      <CardContent className="rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.67] transition-all card_conetent pb-2">
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
          <span className="font-semibold pl-2"></span>
        </div>
      </CardDescription>
      <CardFooter className="bg-orange-300">
        <div className="p-6 flex justify-between">
          <div className="flex items-center flex-wrap gap-2">
            <p className="text-lg text-gray-600 font-bold">Głosuj:</p>
          </div>
          <div className="flex align-middle">
            <div
              className="button_add"
              onClick={() => {dispatch(login({mem}),showList())}}
            >
              <div className="button-wrapper">
                <div className="text ">Doodaj&nbsp;</div>
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
              <div className="button-wrapper">
                <div className="text ">Odejmij&nbsp;</div>
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
// const [downvotes, setDownvotes] = useState(mem.downvotes);
// const [upvotes, setUpvotes] = useState(mem.upvotes);

// const [countVotes, setCountVotes] = useState(upvotes - downvotes);

// function upVotes() {
//   if (upvotes >= 0) {
//     setCountVotes((state) => state + 1);
//   }
// }

// function downVotes() {
//   if (downvotes >= 0 && countVotes > 0) {
//     console.log(downvotes);
//     setCountVotes((state) => state - 1);
//   }
// }

// const dispatch = useDispatch();

// const upVotes = (e) => {
//   dispatch({ type: "upVotes", value: 1 });
// };
