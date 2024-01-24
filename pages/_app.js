import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

/**
 * The chain ID 4 represents the Rinkeby network
 * The `injected` connector is a web3 connection method used by Metamask
 */
const supportedChainIds = [1, 4, 137];
const connectors = {
  injected: {},
  magic: {
    apiKey: "pk_...", // Your magic api key
    chainId: supportedChainIds, // The chain ID you want to allow on magic
  },
  walletconnect: {},
  walletlink: {
    appName: "thirdweb - demo",
    url: "https://thirdweb.com",
    darkMode: false,
  },
};

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}
