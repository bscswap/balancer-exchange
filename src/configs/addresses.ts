import registry from 'assets/generated/dex/registry.homestead.json';
import registryKovan from 'assets/generated/dex/registry.kovan.json';
import registrybscmainnet from 'assets/generated/dex/registry.bscmainnet.json';
import registrybsctestnet from 'assets/generated/dex/registry.bsctestnet.json';
import { getSupportedChainName } from '../provider/connectors';

function getContracts(chainName: string) {
    if (chainName === 'mainnet') {
        return {
            bFactory: '0x9424B1412450D0f8Fc2255FAf6046b98213B76Bd',
            proxy: '0x3E66B66Fd1d0b02fDa6C811Da9E0547970DB2f21',
            weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            multicall: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
        };
    }
    if (chainName === 'kovan') {
        return {
            bFactory: '0x8f7F78080219d4066A8036ccD30D588B416a40DB',
            proxy: '0x2641f150669739986CDa3ED6860DeD44BC3Cda5d',
            weth: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
            multicall: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
        };
    }
    if (chainName === 'bscmainnet') {
        return {
            bFactory: '0x67eB6Eea7f04e27ba3764e0fD90D92ebeF2d6216',
            proxy: '0x4a4c55e4dD83f507E81186f317332abcFF7D98d6',
            weth: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
            multicall: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
        };
    }
    if (chainName === 'bsctestnet') {
        return {
            bFactory: '0x67eB6Eea7f04e27ba3764e0fD90D92ebeF2d6216',
            proxy: '0x4a4c55e4dD83f507E81186f317332abcFF7D98d6',
            weth: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
            multicall: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
        };
    }
    return {};
}

function getAssets(chainName: string) {
    if (chainName === 'mainnet') {
        return registry;
    }
    if (chainName === 'kovan') {
        return registryKovan;
    }
    if (chainName === 'bscmainnet') {
        return registrybscmainnet;
    }
    if (chainName === 'bsctestnet') {
        return registrybsctestnet;
    }
    return {
        tokens: {},
        untrusted: [],
    };
}

const chainName = getSupportedChainName();
const contracts = getContracts(chainName);
const assets = getAssets(chainName);

export { contracts, assets };
