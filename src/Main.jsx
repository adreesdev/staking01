import React from "react";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

import App from "./App";

// Configure chains & providers with the Json provider.

const { chains, provider } = configureChains(
	[bsc, bscTestnet],
	[
		publicProvider(),
		jsonRpcProvider({
			rpc: (chain) => ({
				http: `https://${chain.id}.example.com`,
			}),
		}),
	]
);

// Set up client
const client = createClient({
	autoConnect: true,
	connectors: [
		new MetaMaskConnector({ chains }),
		new CoinbaseWalletConnector({
			chains,
			options: {
				appName: "wagmi",
			},
		}),
		new WalletConnectConnector({
			chains,
			options: {
				qrcode: true,
			},
		}),
		new InjectedConnector({
			chains,
			options: {
				name: "Injected",
				shimDisconnect: true,
			},
		}),
	],
	provider,
});

// Pass client to React Context Provider
function WagmiUtils() {
	return (
		<WagmiConfig client={client}>
			<App />
		</WagmiConfig>
	);
}

export default WagmiUtils;
