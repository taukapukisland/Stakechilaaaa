import { client } from "@/app/client";
import { chain } from "@/app/chain";
import { getContract } from "thirdweb";
import { stakingContractABI } from "./stakingContractABI";

const nftContractAddress = "0x41860523F4e5C817ca397C4610Ddea36b8af5254";
const rewardTokenContractAddress = "0x6E8C31376aCc10bD376905C7efd878C2b86A2fFb";
const stakingContractAddress = "0x3450F2FFD82C988199cB9a4DE3cCafAe6908abdC";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress,
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress,
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingContractABI,
});