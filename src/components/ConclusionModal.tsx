import React, { useEffect, Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import Container from "./Container";
import Router from "next/router";

type ConclusionModalProps = {
  name: string;
  profileImage: string;
  didIWin: boolean;
  displayModal: boolean;
  setDisplayModal: Dispatch<SetStateAction<boolean>>;
};

const ConclusionModal = ({
  name,
  profileImage,
  didIWin,
  displayModal,
  setDisplayModal
}: ConclusionModalProps) => {

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {    
    function watchScroll() {
      window.addEventListener("scroll", scrollToTop);
    }
    if (displayModal) {
      scrollToTop()
      watchScroll();
    }
    return () => {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, [displayModal]);

  const handleClose = () => {
    setDisplayModal(false);
  };

  useEffect(() => {});

  return (
    <div
      className={displayModal ? "inline-block fixed z-50" : "hidden fixed z-50"}
    >
      {/* Overlay */}
      <div
        onClick={handleClose}
        className="cursor-pointer fixed top-0 right-0 left-0 bottom-0 z-[49] bg-black overflow-hidden h-screen opacity-70"
      />

      <div className="fixed z-50 top-[50vh] left-[50vw] -translate-x-2/4 -translate-y-2/4">
        <Container backgroundStyles="flex flex-col gap-4 w-[30rem] child:self-center py-6">
          <div
            className="absolute right-[10px] top-[10px] rounded-full hover:bg-blue-400/10 cursor-pointer p-2"
            onClick={handleClose}
          >
            <AiOutlineClose size={20} />
          </div>
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
            onclick={() => Router.push("/profile")}
            type={"none"}
            movingGradient={true}
          >
            View Your Profile
          </Button>
          <Button
            onclick={() => Router.push("/menu")}
            type={"fill"}
            movingGradient={true}
          >
            Play Again
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default ConclusionModal;
