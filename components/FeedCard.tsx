import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

export const FeedCard = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src={"https://avatars.githubusercontent.com/u/121109714?v=4"}
            alt="user-image"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5>Sameer Ahmed</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            consequuntur, nesciunt accusantium reprehenderit fugit tenetur
            quisquam libero esse repellendus similique omnis voluptatem iusto
            officiis unde soluta explicabo tempore odit. Hic?
          </p>
          <div className="flex justify-between text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
