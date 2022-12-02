import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import LeaderboardList from "@/components/profile/leaderboard-list";

// DOM elements here
const DOM = () => {
  const border =
    "p-[1px] bg-gradient-radial from-borderGradient-primary to-borderGradient-secondary";
  const gradientBackground = "button-gradient bg-size-200 bg-pos-0";
  const radialBackground =
    "bg-gradient-radial from-cardGradient-primary to-cardGradient-secondary";

  const user = useSession().data?.user?.name||".....";
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-2 gap-4 font-gilroy mx-28 my-8">
        {/* Welcome! */}
        <div
          className={`flex flex-col gap-4 ${gradientBackground} h-[157px] w-[625px] rounded-2xl`}
        >
          <div className="font-gilroy-bold text-xl mx-9 mt-6">
            Welcome back, {user}!
          </div>
          <div className="text-slate-200 mx-9 pr-32 text-lg">
            Problem solved: 21
          </div>
          <div className="text-slate-200 mx-9 pr-32 -mt-4 text-lg">
            Total Problems: 159
          </div>
        </div>

        {/* Video recommendation */}
        <div className={`${border} rounded-2xl`}>
          <div
            className={`flex items-center px-10 justify-between ${radialBackground} rounded-2xl h-[157px] w-[625px]`}
          >
            <div className="text-slate-200 text-lg">
              2. Basic Interviewing Skills
            </div>

            <Image
              src={"/static/video-play.svg"}
              alt="Image of Video Play Icon"
              width={"87px"}
              height={"87px"}
            />
          </div>
        </div>

        {/* Progress */}
        <div className={`col-span-2 ${border} rounded-2xl`}>
          <div
            className={`${radialBackground} rounded-2xl h-[292px] w-[1268px]`}
          >
            <div className="font-bold text-lg px-12 pt-4">Your Progress</div>
            <div className="grid grid-cols-4 gap-5 pt-5 pl-12">
              <div className="flex flex-col justify-end items-center bg-gradient-to-b from-secondary to-secondary/20 h-[186px] w-[225px] rounded-2xl">
                <Image
                  src={"/static/checkmark.svg"}
                  alt="SVG of Checkmark"
                  width={"70px"}
                  height={"50px"}
                />

                <div className="text-lg text-center text-slate-200 p-6">
                  Two Sum
                </div>
              </div>

              <div className="flex flex-col justify-end items-center bg-gradient-to-b from-secondary to-secondary/20 h-[186px] w-[225px] rounded-2xl">
                <Image
                  src={"/static/checkmark.svg"}
                  alt="SVG of Checkmark"
                  width={"70px"}
                  height={"50px"}
                />

                <div className="text-center text-slate-200 p-6 text-lg">
                  Valid Anagrams
                </div>
              </div>

              <div className={`${border} rounded-2xl w-[227px]`}>
                <div
                  className={`flex flex-col justify-end items-center ${radialBackground} rounded-2xl h-[186px] w-[225px]`}
                >
                  <Image
                    src={"/static/in-progress.svg"}
                    alt="SVG of In Progress"
                    width={"70px"}
                    height={"70px"}
                  />

                  <div className="text-center text-slate-300 px-6 pb-6 pt-3 text-lg">
                    LRU Cache
                  </div>
                </div>
              </div>

              <div className={`${border} rounded-2xl w-[227px]`}>
                <div
                  className={`flex flex-col justify-end items-center ${radialBackground} rounded-2xl h-[186px] w-[225px]`}
                >
                  <Image
                    src={"/static/in-progress.svg"}
                    alt="SVG of In Progress"
                    width={"70px"}
                    height={"70px"}
                  />

                  <div className="text-lg text-center text-slate-300 px-6 pb-6 pt-3">
                    Alien Dictionary
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeaderboardList />
    </>
  );
};

export default function leaderboard() {
  return (
    <>
      <DOM />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  if (!session?.user) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false
      }
    };
  }

  return {
    props: {
      title: "Profile"
    }
  };
};
