import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";

type ConclusionModalProps = {
  name: string;
  profileImage: string;
  didIWin: boolean;
  displayModal: boolean;
};

const ConclusionModal = ({
  name,
  profileImage,
  didIWin,
  displayModal,
}: ConclusionModalProps) => {
  const { data } = useSession();

  const handleClose = () => {};

  return (
    <div className="fixed rounded-[15px] z-50 w-96 bg-primary top-[50vh] left-[50vw] -translate-x-2/4 -translate-y-2/4 border border-blue-500/30 p-5 child:self-center flex    flex-col child:my-1">
      <div
        className="absolute right-[10px] top-[10px] rounded-full hover:bg-blue-400/10 cursor-pointer p-1"
        onClick={handleClose}
      >
        <AiOutlineClose />
      </div>

      <div>{name}</div>
      {didIWin ? <div className="text-green-500">Congratulations! You Won!</div> : <div className="text-red-500">You lost!</div>}
      <Button onclick={() => {}} type={"outline"} movingGradient={true}>
        Play Again
      </Button>
      <Image
        className="rounded-full"
        alt="winner's profile picture"
        src={profileImage}
        width="161px"
        height={"161px"}
      />
      <div></div>
    </div>
  );
};

export default ConclusionModal;
