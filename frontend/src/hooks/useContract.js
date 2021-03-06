import { useMemo } from "react";
import Web3 from "web3";


export default function useContract(address, abi) {

  const contract = useMemo(() => {
    try {
      const provider = new Web3(window.ethereum);
      const c = new provider.eth.Contract(abi, address);
      return c;
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, []);
  return contract;
}
