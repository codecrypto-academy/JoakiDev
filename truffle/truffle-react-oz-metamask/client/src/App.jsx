import { useEffect, useState } from 'react';
import { ethers } from "ethers";

const provider = new ethers.BrowserProvider(window.ethereum);

function App() {

  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [contract, setContract] = useState(null);
  const [tokens, setTokens] = useState(null);

  useEffect(() => {
    window.ethereum
    .request({ method: "eth_requestAccounts" })
    .then((accounts) => {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
      });
      setAccount(accounts[0]);
    })
  }, []);

  useEffect(() => {
    if (!account) return;

    provider.getBalance(account).then((balance) => {
      setBalance(balance.toString());
    })
  }, [account]);

  useEffect(() => {
    async function contrato() {
      const sc = "direccionContrato";
      const signer = await provider.getSigner(account);
      const contract = new ethers.Contract(sc, abi.abi, signer);
      setContract(contract)
    }
    contrato();
  }, [account]);

  useEffect(() => {
    contract.balanceOf(account).then((balance) => {
      setTokens(balance.toString());
    })

  }, [contract, account]);

  return (
    <div>{account} = {balance} {tokens}
    
      <form onSubmit={(e) => {}}>
        <input></input>
      </form>
    
    </div>
  )
}

export default App
