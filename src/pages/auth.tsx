import Container from "@/components/Container";
import Navbar from "@/components/Navbar/Navbar";
import { GetServerSideProps } from "next";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const Dom = ({}) => {
  const [loginMethods] = useState([
    {
      name: "Google",
      icon: "/static/auth/google.svg",
      providerId: "google"
    },
    {
      name: "Linkedin",
      icon: "/static/auth/facebook.svg",
      providerId: "linkedin"
    },
    {
      name: "GitHub",
      icon: "/static/auth/github.svg",
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

        <h1 className="mt-6 text-5xl capitalize font-gilroy-bold">
          Login | Register
        </h1>

        <div className="flex flex-col items-center justify-center gap-3 mt-10">
          {loginMethods.map(({ name, icon, providerId }, index) => (
            <Container key={index} onHover>
              <button
                className="flex items-center justify-center h-16 cursor-pointer w-[768px]"
                onClick={() => signIn(providerId, { callbackUrl: "/menu" })}
              >
                <Image src={icon} alt={name} width={30} height={30} />
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      title: "Login - Register"
    }
  };
};
