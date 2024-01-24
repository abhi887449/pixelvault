import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks";
import { client } from "../lib/sanityClient";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    address,
    chainId,
    connectWallet,
    disconnectWallet,
    getNetworkMetadata,
  } = useWeb3();
  const { switchNetwork } = useSwitchNetwork();
  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== "Unnamed" ? ` ${userName}` : ""}!`,
      {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      }
    );
  };
  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        userName: isempty_name.name,
        walletAddress: address,
      };

      const result = await client.createIfNotExists(userDoc);
      welcomeUser(result.userName);
    })();
  }, [address]);

  const [isempty_name, setName] = useState({ name: "" });
  const onChange = (e) => {
    setName({ ...isempty_name, [e.target.name]: e.target.value });
  };
  const isAbleToConnectWallet = ()=>{
    if(isempty_name.name===""){
      toast.error("Please fill the name.")
    }
    else{
      connectWallet("injected")
    }
  }
  console.log(address)
  return (
    <div className={style.wrapper}>
     
      <Toaster position="top-center" reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className="flex flex-col w-96 h-96 m-auto mt-60 border border-gray-600 rounded-xl p-10 justify-center bg-gray-800">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              onChange={onChange}
              name="name"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <button
            className={`border w-36 mt-5 mb-5 mr-auto ml-auto p-3 rounded-md ${
              isempty_name.name === ""
                ? "bg-red-700 border-red-900"
                : "bg-green-500 border-green-900"
            }`}
            onClick={() => isAbleToConnectWallet()}
          >
            Connect Wallet
          </button>
          <div className="text-green-600 text-center animate-pulse">
            You need Chrome to be able to run this app.
          </div>
        </div>
      )}
    </div>
  );
}
