import { useEffect, useState } from "react";

type Player = {
  username: string;
  achievements: number;
  profilePic: string;
};

const LoadingScreen = () => {
  /**
   * Current user from next auth
   */
  const [user] = useState<Player>({
    username: "SEBAS0228",
    achievements: 12,
    profilePic: ""
  });
  const [opponent, setOpponent] = useState<Player>(null);

  useEffect(() => {
    /**
     * TODO: Implement sockets so that we can get an opponent from the backend
     */

    setOpponent({
      username: "",
      achievements: 18,
      profilePic: "/"
    });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">loading Screen</div>
    </>
  );
};

export default LoadingScreen;
