import Container from "@/components/Container";
import Navbar from "@/components/Navbar/Navbar";
import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiFillGithub
} from "react-icons/ai";

const Dom = ({}) => {
  const router = useRouter();
  const { error } = router.query;
  
  const iconSize = 35;
  const [loginMethods] = useState([
    {
      name: "Google",
      icon: <AiFillGoogleCircle size={iconSize} />,
      providerId: "google"
    },
    {
      name: "Linkedin",
      icon: <AiFillLinkedin size={iconSize} />,
      providerId: "linkedin"
    },
    {
      name: "GitHub",
      icon: <AiFillGithub size={iconSize} />,
      providerId: "github"
    }
  ]);

  return (
    <div className="w-screen">
      <Navbar hideElements />

      <div className="flex flex-col items-center justify-center ">
        <div>
          <Image
            src="/static/auth/graphic.svg"
            alt=""
            width={250}
            height={200}
          />
        </div>

        <h1 className="my-6 text-5xl capitalize font-gilroy-bold">Sign in</h1>
        <p className="text-[#F60C04]">
          {error === "OAuthAccountNotLinked" &&
            "Please sign in with the account you originally registered with"}
        </p>

        <div className="flex flex-col items-center justify-center gap-3 mt-10">
          {loginMethods.map(({ name, icon, providerId }, index) => (
            <Container key={index} onHover>
              <button
                className="flex items-center justify-center h-16 cursor-pointer w-[768px]"
                onClick={() => signIn(providerId, { callbackUrl: "/menu" })}
              >
                {icon}
                {/* <Image src={icon} alt={name} width={30} height={30} /> */}
              </button>
            </Container>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Auth(props) {
  return (
    <>
      <Dom {...props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/menu",
        permanent: false
      }
    };
  }
  return {
    props: {
      title: "Login - Register"
    }
  };
};
