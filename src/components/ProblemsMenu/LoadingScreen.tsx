import { useEffect, useState } from "react";
import Image from "next/image";
import Crystal from "@/components/Crystal";

type Player = {
  username: string;
  achievements: number;
  profilePic: string;
};

type DisplayUser = Player & {
  type: "Random" | "Friend";
  extraCrystal?: boolean;
};

const DisplayPlayer = (params: DisplayUser) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-extrabold capitalize font-gilroy">
        {params.username}
      </h1>
      <div className="pt-3 pb-5">
        <Image
          className="rounded-full"
          loader={() => params.profilePic}
          src={params.profilePic}
          alt="Opponent Profile Image"
          width={161}
          height={161}
        />
      </div>

      <div>
        <h1 className="mb-10 text-3xl">{params.achievements}</h1>
        <div className="flex items-center justify-center gap-2">
          <Crystal width={"3rem"} height={"49px"} />
          {params.extraCrystal && <Crystal width={"3rem"} height={"49px"} />}
        </div>
      </div>

      <div
        className={`bg-gradient-to-b from-tertiary to-secondary px-12 py-9 rounded-lg`}
      >
        <h3 className="text-2xl font-extrabold font-gilroy">{params.type}</h3>
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

  useEffect(() => {
    /**
     * Make sure the user is at the top of the loading screen on load
     */
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="p-1 bg-gradient-to-br from-tertiary to-secondary rounded-2xl">
      <div className="flex items-center justify-center w-full h-full gap-10 py-16 px-28 bg-quaternary rounded-2xl">
        <DisplayPlayer
          {...opponent}
          type="Random"
          extraCrystal={opponent.achievements > user.achievements}
        />

        <div className="text-3xl font-black text-[#FC9D44]">
          <h1>VS</h1>
        </div>

        <DisplayPlayer
          {...user}
          type="Friend"
          extraCrystal={user.achievements > opponent.achievements}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
