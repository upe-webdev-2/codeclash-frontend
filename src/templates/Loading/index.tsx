import Container from "@/components/Container";
import Image from "next/image";
import { useEffect } from "react";
import PlayerStats from "./PlayerStats";

type Loading = {
  onCancel: () => void;
};

const Loading = ({ onCancel }: Loading) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Container>
        <div className="flex flex-col items-center justify-center gap-10 px-32 py-10">
          <div className="flex items-center justify-center gap-24">
            <PlayerStats
              image="/static/placeholder.jpeg"
              username="SEBAS0228"
              achievements={12}
            />

            <Container>
              <h1 className="px-6 pt-5 pb-4 text-3xl font-gilroy-bold">VS</h1>
            </Container>

            <PlayerStats
              image="/static/placeholder.jpeg"
              username="ROXXY345"
              achievements={18}
              extraCrystal
            />
          </div>

          <div className="flex flex-col items-center justify-center px-16 py-1 rounded-lg bg-[linear-gradient(180deg,_#6B44D9_40.76%,_#6CFFED_184.45%)]">
            <Image
              src="/static/logo-secondary.svg"
              alt=""
              width={75}
              height={75}
            />
            <h1 className="text-2xl font-gilroy-bold">Clash</h1>
          </div>

          <Container>
            <p className="px-6 py-3 cursor-pointer" onClick={onCancel}>
              Cancel
            </p>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Loading;
