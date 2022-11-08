import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Crystal from "../Crystal";

type Profile = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isHovering: boolean;
};

const ProfileOptions = ({
  setIsLoggedIn
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  return (
    <nav className="my-2">
      <ul className="text-white text-center text-sm">
        <li
          className="hover:text-secondary cursor-pointer"
          onClick={() => router.push("/profile")}
        >
          Profile
        </li>
        <li
          className="hover:text-secondary cursor-pointer"
          onClick={() => router.push("/settings")}
        >
          Settings
        </li>
        <li
          className="hover:text-secondary cursor-pointer"
          onClick={() => {
            setIsLoggedIn(false);
            router.push("/");
            console.warn("Log user out");
          }}
        >
          Log out
        </li>
      </ul>
    </nav>
  );
};

const ProfileBox = ({ setIsLoggedIn, isHovering }: Profile) => {
  return (
    <div
      className={`${
        isHovering || "hidden"
      }  mt-2 absolute block bg-quaternary w-[90px] -translate-x-1/4 font-gilroy rounded-[5px]`}
    >
      <ProfileOptions setIsLoggedIn={setIsLoggedIn} />

      <span className="absolute top-[-13%] -translate-x-2/4	 left-2/4 w-[13px] h-[13px]">
        <Image
          src={"/static/triangle.svg"}
          alt="user profile image"
          layout="fill"
        />
      </span>
    </div>
  );
};

const ProfileComponents = ({
  setIsLoggedIn
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [XP, setXP] = useState(12);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const router = useRouter();

  return (
    <>
      <span className="my-auto font-bold text-center">{XP}</span>
      <Crystal width={"3rem"} />
      <div
        className="relative h-[49px] w-[49px] "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Image
          className="cursor-pointer z-[1] rounded-full"
          onClick={() => router.push("/profile")}
          src={"/static/profile_placeholder.png"}
          alt="user profile image"
          width="49"
          height="49"
        />
        {/* Invisible box so the function handleMouseOut doesn't trigger */}
        <div className="absolute block -mt-3 bg-transparent w-[90px] h-6 -left-2/4 z-0" />
        <ProfileBox setIsLoggedIn={setIsLoggedIn} isHovering={isHovering} />
      </div>
    </>
  );
};

export default ProfileComponents;
