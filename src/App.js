import React, { useState, useEffect } from 'react';
import Emre from './artifacts/contracts/Emre.sol/Emre.json'
import { ethers } from "ethers";
import './App.css';

function App() {
  const [receiverAddress, setReceiverAddress] = useState('');
  const [receiverOwnerAddress, setReceiverOwnerAddress] = useState('');
  const [address, setAddress] = useState(null);
  const [getBalance, setGetBalance] = useState('');
  const [amount, setAmount] = useState('');
  const [mintAmount, setMintAmount] = useState('');
  const [burnAmount, setBurnAmount] = useState('');
  const [getOwner, setGetOwner] = useState(null);
  const [ownable, setOwnable] = useState(null);
  const [txHash, setTxHash] = useState('');
  const [tx, setTx] = useState('');
  const ABI = Emre.abi;
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, ABI, provider);
  const contractSigner = new ethers.Contract(contractAddress, ABI, signer);

  useEffect(() => {
    Owner();
  }, []);

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({ method: "eth_requestAccounts" });
        getBalanceof();
        const address = await signer.getAddress();
        setAddress(address);
        if (getOwner === address) {
          const ownable = 1;
          setOwnable(ownable);
        }
      } catch (err) {
        console.error('Error connecting to MetaMask:', err);
      }
    } else {
      console.error('MetaMask not found.');
    }
  }

  const handleTransfer = async () => {
    if (!provider) {
      alert('You need to connect to MetaMask first.');
      return;
    }
    try {
      try {
        // Check if the metamask is accessed
        if (typeof window.ethereum !== 'undefined') {
          // Ask to connecting for the Ethereum account
          await window.ethereum.enable();
          await signer.getAddress();
          const weiAmount = ethers.utils.parseUnits(amount, 18);
          const tx = await contractSigner.transfer(receiverAddress, weiAmount);
          const response = await tx.wait();
          setTxHash(response.transactionHash);
          getBalanceof();
          alert("Transfer successful!");
        } else {
          alert("Please install and unlock Metamask to use this feature.");
        }
      } catch (error) {
        console.error("Error during transfer:", error);
        alert("An error occurred during the transfer.");
      }

    } catch (err) {
      console.error('Error sending transaction:', err);
    }
  };
  const mint = async () => {
    if (!provider) {
      alert('You need to connect to MetaMask first.');
      return;
    }
    try {
      if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.enable();
        await signer.getAddress();
        const weiAmount = ethers.utils.parseUnits(mintAmount, 18);
        try {
          const tx = await contractSigner.mint(signer.getAddress(), weiAmount);
          setTx(tx);
        }
        catch (error) {
          alert("You are not Owner!");
        }

        const response = await tx.wait();
        setTxHash(response.transactionHash);
        getBalanceof();
        alert("Mint successful!");
      } else {
        alert("Please install and unlock Metamask to use this feature.");
      }
    } catch (error) {
      console.error("Error during mint:", error);
      alert("An error occurred during the mint.");
    }
  };

  const burn = async () => {
    if (!provider) {
      alert('You need to connect to MetaMask first.');
      return;
    }
    try {
      if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.enable();
        await signer.getAddress();
        const weiAmount = ethers.utils.parseUnits(burnAmount, 18);
        const tx = await contractSigner.burn(weiAmount);
        setTx(tx);
        const response = await tx.wait();
        setTxHash(response.transactionHash);
        getBalanceof();
        alert("Burn successful!");
      } else {
        alert("Please install and unlock Metamask to use this feature.");
      }
    } catch (error) {
      console.error("Error during burn:", error);
      alert("An error occurred during the burn.");
    }
  };

  const getBalanceof = async () => {
    const a = await contractSigner.balanceOf(signer.getAddress());
    const getBalance = ethers.utils.formatUnits(a, 18);
    setGetBalance(getBalance);
  };

  const Owner = async () => {
    try {
      const ownerAddress = await contractSigner.owner();
      setGetOwner(ownerAddress);
    } catch (error) {
      console.error("Error fetching owner:", error);
    }
  };

  const transferOwnership = async () => {
    const tx = await contractSigner.transferOwnership(receiverOwnerAddress);
    setTx(tx);
    const response = await tx.wait();
    setTxHash(response.transactionHash);
  };


  return (
    <div className="container">
      <h1>EMRE Token App</h1>
      <div className="header">
        <div>
          {address ? (
            <p>Connected Account: {address}</p>
          ) : (
            <button className="connect-button" onClick={connectToMetaMask}>Connect with MetaMask</button>
          )}
        </div>
      </div>

      <div className="balance">
        <p>Balance of EMRE token: {getBalance}</p>
      </div>

      <div className="transfer-section">
        <div>
          <label>Receiver Address:</label>
          <input
            type="text"
            value={receiverAddress}
            onChange={(e) => setReceiverAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="transfer-button" onClick={handleTransfer}>Transfer</button>
      </div>

      <div className="mint-section">
        <div>
          <label>Mint Amount: </label>
          <input
            type="number"
            value={mintAmount}
            onChange={(e) => setMintAmount(e.target.value)}
          />
        </div>
        <button className="mint-button" onClick={mint}>Mint</button>
      </div>

      <div className="burn-section">
        <div>
          <label>Burn Amount: </label>
          <input
            type="number"
            value={burnAmount}
            onChange={(e) => setBurnAmount(e.target.value)}
          />
        </div>
        <button className="burn-button" onClick={burn}>Burn</button>
      </div>

      <div className="transferOwnership-section">
        <div>
          {ownable !== null ? (
            <p>          <label>Receiver New Owner Address: </label>
              <input
                type="text"
                value={receiverOwnerAddress}
                onChange={(e) => setReceiverOwnerAddress(e.target.value)}

              />
              <button className="transfer-button" onClick={transferOwnership}>Transfer Ownership</button>
            </p>
          ) : null}
        </div>
      </div>

      <div className="transaction-hash">
        <p>Transaction Hash: {txHash}</p>
      </div>
    </div>
  );
};

export default App;