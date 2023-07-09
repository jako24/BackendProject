// Home Page Look, Sign in Buttons customization etc.

import { NextPage } from "next";
import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>T3 Stripe</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          T3 <span className="text-[#5433FF]">Stripe Project</span>
        </h1>
        <p className="text-2xl text-gray-700 mb-3">Made by Janek</p>
        <p className="text-2xl text-gray-700">This app uses:</p>
        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3 flex">
          <SignInButton provider="github" text="Sign in with GitHub" Icon={GitHubSvg} />
          <SignInButton provider="hubspot" text="Sign in with HubSpot" Icon={HubSpotSvg} />
          <SignInButton provider="quickbooks" text="Sign in with QuickBooks" Icon={QuickBooksSvg} />
      </div>
      </main>
    </>
  );
};

export default Home;

type SignInButtonProps = {
  provider: string;
  text: string;
  Icon: React.FC;
};

const SignInButton: React.FC<SignInButtonProps> = ({ provider, text, Icon }) => {
  const { status } = useSession();
  const { push } = useRouter();

  const handleSignIn = () => {
    if (status === "unauthenticated") {
      if (provider === "github") {
        void signIn("github", { callbackUrl: "/dashboard" });
      } else if (provider === "hubspot") {
        void signIn("hubspot", { callbackUrl: "/dashboard" });
      } else if (provider === "quickbooks") {
        void signIn("quickbooks", { callbackUrl: "/dashboard" });
      }
    } else if (status === "authenticated") {
      void push("/dashboard");
    }
  };
  

  return (
    <button
      className="focus:shadow-outline my-5 inline-flex h-[44px] w-fit cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-[#333] px-5 py-3 text-sm text-white shadow-sm duration-150 hover:bg-black focus:outline-none disabled:cursor-not-allowed"
      onClick={handleSignIn}
      disabled={status === "loading"}
    >
      <Icon />
      <span className="ml-2">{text}</span>
    </button>
  );
};

const GitHubSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32.58 31.77"
    height={22}
    width={22}
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          style={{
            fill: "#fff",
            fillRule: "evenodd",
          }}
          d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z"
        />
      </g>
    </g>
  </svg>
);

const HubSpotSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={22}
    height={22}
    style={{ color: "white" }}
  >
    <path
      d="M24.219 10.573v-3.792c1.026-0.479 1.682-1.505 1.688-2.641v-0.089c-0.005-1.609-1.307-2.917-2.922-2.922h-0.089c-1.615 0.005-2.922 1.307-2.927 2.922v0.089c0.005 1.125 0.656 2.146 1.672 2.63l0.016 0.010v3.802c-1.448 0.219-2.818 0.823-3.958 1.745l0.016-0.010-10.438-8.13c0.943-3.521-3.651-5.776-5.859-2.875-2.214 2.896 1.167 6.729 4.318 4.896l-0.016 0.010 10.26 7.984c-0.906 1.365-1.391 2.964-1.385 4.599 0 1.786 0.568 3.448 1.531 4.807l-0.016-0.026-3.125 3.12c-0.25-0.078-0.51-0.12-0.771-0.125h-0.005c-2.411 0-3.625 2.922-1.917 4.63 1.708 1.703 4.63 0.495 4.63-1.917-0.005-0.271-0.052-0.542-0.135-0.797l0.005 0.021 3.089-3.089c2.042 1.557 4.688 2.089 7.172 1.438 2.479-0.656 4.526-2.411 5.536-4.771 1.016-2.359 0.885-5.052-0.354-7.302-1.234-2.25-3.443-3.802-5.974-4.208l-0.052-0.010zM22.932 23.078c-3.807-0.010-5.703-4.615-3.005-7.302 2.693-2.688 7.292-0.781 7.292 3.026v0.005c0 2.359-1.911 4.271-4.276 4.271z"
      fill="white"
    ></path>
  </svg>
);

const QuickBooksSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    role="img"
    width={22}
    height={22}
    style={{ color: "green" }}
  >
    <path
      d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.642 4.1335c.9554 0 1.7296.776 1.7296 1.7332v9.0667h1.6c1.614 0 2.9275-1.3156 2.9275-2.933 0-1.6173-1.3136-2.9333-2.9276-2.9333h-.6654V7.3334h.6654c2.5722 0 4.6577 2.0897 4.6577 4.667 0 2.5774-2.0855 4.6666-4.6577 4.6666H12.642zM7.9837 7.333h3.3291v12.533c-.9555 0-1.73-.7759-1.73-1.7332V9.0662H7.9837c-1.6146 0-2.9277 1.316-2.9277 2.9334 0 1.6175 1.3131 2.9333 2.9277 2.9333h.6654v1.7332h-.6654c-2.5725 0-4.6577-2.0892-4.6577-4.6665 0-2.5771 2.0852-4.6666 4.6577-4.6666Z"
      fill="white"
    />
  </svg>
);









