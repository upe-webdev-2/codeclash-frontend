import Image from "next/image";
import Router from "next/router";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import Crystal from "../Crystal";

type Profile = {
  isHovering: boolean;
};

const ProfileOptions = () => {
  return (
    <nav className="my-2">
      <ul className="text-sm text-center text-white">
        <li
          className="cursor-pointer hover:text-secondary"
          onClick={() => Router.push("/profile")}
        >
          Profile
        </li>
        <li
          className="cursor-pointer hover:text-secondary"
          onClick={() => {
            signOut({ callbackUrl: "/" });
          }}
        >
          Log out
        </li>
      </ul>
    </nav>
  );
};

const ProfileBox = ({ isHovering }: Profile) => {
  return (
    <div
      className={`${
        isHovering || "hidden"
      }  mt-2 absolute block bg-quaternary w-[90px] -translate-x-1/4 font-gilroy rounded-[5px]`}
    >
      <ProfileOptions />

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
  user
}: {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
}) => {
  /**
   * user is being passed down to take care of a bug in the landing page
   * landing page is unable to get the information from useSession properly, navbar thinks the user is not logged in, until the user clicks unfocuses on the webpage.
   */
   
  const { data } = useSession();
  const [XP, setXP] = useState(12);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

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
          onClick={() => Router.push("/profile")}
          src={user?user.image:data?.user?.image}
          alt=""
          width="49"
          height="49"
        />
        {/* Invisible box so the function handleMouseOut doesn't trigger */}
        <div className="absolute block -mt-3 bg-transparent w-[90px] h-6 -left-2/4 z-0" />
        <ProfileBox isHovering={isHovering} />
      </div>
    </>
  );
};

export default ProfileComponents;
