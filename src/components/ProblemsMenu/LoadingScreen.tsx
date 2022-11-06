import { useEffect, useState } from "react";
import Image from "next/image";

type Player = {
  username: string;
  achievements: number;
  profilePic: string;
};

type DisplayUser = Player & {
  type: "Random" | "Friend";
};

const DisplayPlayer = (params: DisplayUser) => {
  const { username, achievements, profilePic, type } = params;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-extrabold capitalize font-gilroy">
        {username}
      </h1>
      <div className="pt-3 pb-5">
        <Image
          className="rounded-full"
          loader={() => profilePic}
          src={profilePic}
          alt="Opponent Profile Image"
          width={161}
          height={161}
        />
      </div>
      <h1 className="mb-10 text-3xl">{achievements}</h1>

      <div
        className={`bg-gradient-to-b from-[#6B44D9] to-[#6CFFED] px-12 py-9 rounded-lg`}
      >
        <h3 className="text-2xl font-extrabold font-gilroy">{type}</h3>
      </div>
    </div>
  );
};

const LoadingScreen = () => {
  /**
   * Get current user from next auth
   */
  const [user] = useState<Player>({
    username: "SEBAS0228",
    achievements: 12,
    profilePic: "https://source.unsplash.com/random/161×161"
  });
  const [opponent] = useState<Player>({
    username: "......",
    achievements: 0,
    profilePic: "https://source.unsplash.com/random/162×162"
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gradient-to-br from-[#6B44D9] to-[#6CFFED] p-1 rounded-2xl">
        <div className="flex items-center justify-center w-full h-full gap-10 py-16 px-28 bg-secondary rounded-2xl">
          <DisplayPlayer {...opponent} type="Random" />
          <div className="text-3xl font-black text-[#FC9D44]">
            <h1>VS</h1>
          </div>
          <DisplayPlayer {...user} type="Friend" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
