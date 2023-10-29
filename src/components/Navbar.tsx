import { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";

const Navbar = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      // TODO 5.b - Get the active account
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  // TODO 4.a - Create onConnectWallet function
  const onConnectWallet = async () => {
    await connectWallet();
    const account = await getAccount();
    setAccount(account);
  };

  return (
    <div className="navbar navbar-dark orbitex-bg-dark fixed-top">
      <div className="container-flex p-0 m-0 py-2 d-flex justify-content-between align-items-center">
        <div className="navbar-brand navbar-orbitex m-0 py-0">
          <h2>
            <a href="/">
              Orbit
              <sub>
                <span>EX</span>
              </sub>
            </a>
          </h2>
        </div>
        <div className="d-flex justify-content-between">
          <div className="links-container pt-1">
            <a href="/buySatellites">Buy Junk</a>
            <a href="/castVotes">Cast Your Vote</a>
          </div>
          {/* TODO 4.b - Call connectWallet function onClick  */}
          <button onClick={onConnectWallet} className="btn btn-outline-info">
            {/* TODO 5.a - Show account address if wallet is connected */}
            {account ? account : "Connect Wallet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
