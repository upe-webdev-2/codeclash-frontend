import React, { useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";

type ConclusionModalProps = {
  name: string;
  profileImage: string;
  didIWin: boolean;
  displayModal: boolean;
  setDisplayModal: Dispatch<SetStateAction<boolean>>;
  difficulty: "easy" | "medium" | "hard";
};

const ConclusionModal = ({
  name,
  profileImage,
  didIWin,
  displayModal,
  difficulty,
  setDisplayModal
}: ConclusionModalProps) => {
  const { data } = useSession();

  const handleClose = () => {
    setDisplayModal(false);
  };

  useEffect(() => {});

  return (
    <div className={displayModal ? "inline-block fixed z-50" : "hidden fixed z-50"}>
      <div
        onClick={handleClose}
        className="cursor-pointer fixed top-0 right-0 left-0 bottom-0 z-[49] bg-black opacity-70"
      ></div>
      <div className="fixed rounded-[15px] z-50 w-[30rem] bg-primary top-[50vh] left-[50vw] -translate-x-2/4 -translate-y-2/4 border border-blue-500/30 p-5 child:self-center flex-col child:my-1 flex">
        <div
          className="absolute right-[10px] top-[10px] rounded-full hover:bg-blue-400/10 cursor-pointer p-2"
          onClick={handleClose}
        >
          <AiOutlineClose size={20} />
        </div>

        <div className="text-5xl pb-1 font-gilroy-bold">{name}</div>

        <div className="text-xl pb-5 font-gilroy">
          {didIWin ? (
            <p className="text-green-500">Congratulations! You Won!</p>
          ) : (
            <p className="text-red-500">You lost!</p>
          )}
        </div>
        <Image
          className="rounded-full"
          alt="winner's profile picture"
          src={profileImage}
          width="150px"
          height={"150px"}
        />
        <Button
          style={{}}
          onclick={() => {}}
          type={"none"}
          movingGradient={true}
        >
          View Your Profile
        </Button>
        <Button onclick={() => {}} type={"outline"} movingGradient={true}>
          Play Again
        </Button>
        <div></div>
      </div>
    </div>
  );
};

export default ConclusionModal;
