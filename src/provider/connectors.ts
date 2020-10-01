import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Portis from '@portis/web3';

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            rpc: {
              56: "https://bsc-dataseed.binance.org",
              97: "https://data-seed-prebsc-1-s1.binance.org:8545"
            }
        },
    }
};

export const web3Modal = new Web3Modal({
    providerOptions: providerOptions,
    theme: {
        background: '#282932',
        main: '#282932',
        secondary: '#90a4ae',
        border: '#41476b',
        hover: '#21222c',
    },
});

export const supportedChainId = Number(
    process.env.REACT_APP_SUPPORTED_NETWORK_ID
);

export const getSupportedChainId = () => {
    return supportedChainId;
};

export const getSupportedChainName = () => {
    return chainNameById[supportedChainId];
};

export const chainNameById = {
    '1': 'mainnet',
    '3': 'ropsten',
    '42': 'kovan',
    '56': 'bscmainnet',
    '97': 'bsctestnet',
};

export const isChainIdSupported = (chainId: number): boolean => {
    return supportedChainId === chainId;
};

const RPC_URLS: { [chainId: number]: string } = {
    1: process.env.REACT_APP_RPC_URL_1 as string,
    3: process.env.REACT_APP_RPC_URL_3 as string,
    42: process.env.REACT_APP_RPC_URL_42 as string,
    56: process.env.REACT_APP_RPC_URL_56 as string,
    97: process.env.REACT_APP_RPC_URL_97 as string,
};

export const SUBGRAPH_URLS: { [chainId: number]: string } = {
    1: process.env.REACT_APP_SUBGRAPH_URL_1 as string,
    3: process.env.REACT_APP_SUBGRAPH_URL_3 as string,
    42: process.env.REACT_APP_SUBGRAPH_URL_42 as string,
    56: process.env.REACT_APP_SUBGRAPH_URL_56 as string,
    97: process.env.REACT_APP_SUBGRAPH_URL_97 as string,
};

export const backupUrls = {};
backupUrls[supportedChainId] = RPC_URLS[supportedChainId];

export const SUPPORTED_WALLETS = {
    INJECTED: {
        isInjected: true,
        name: 'Injected',
        iconName: 'arrow-right.svg',
        description: 'Injected web3 provider.',
        href: null,
        color: '#010101',
        primary: true,
    },
    METAMASK: {
        isInjected: true,
        name: 'MetaMask',
        iconName: 'metamask.png',
        description: 'Easy-to-use browser extension.',
        href: null,
        color: '#E8831D',
    },
};
