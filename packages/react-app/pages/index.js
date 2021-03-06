import React, { useContext } from "react";
import { Contract, Account, Header } from "../components";
import { Web3Consumer } from "../helpers/Web3Context";

function Home({ web3 }) {
  console.log(`🗄 web3 context:`, web3);

  return (
    <>
      {/* Page Header start */}
      <div className="flex flex-1 justify-between items-center">
        <Header />
        <div className="mr-6">
          <Account {...web3} />
        </div>
      </div>
      {/* Page Header end */}

      {/* Main Page Content start */}
      <div className="flex flex-1 flex-col h-screen w-full items-center">
        <div className="text-center" style={{ margin: 64 }}>
          <span>Create DAOs with superfluid integrated on them</span>
          <br />
          <span>No frill DAO creation for your own streams</span>
        </div>
        <div className="text-center">
          <Contract
            name="SuperDao"
            signer={web3.userSigner}
            provider={web3.localProvider}
            address={web3.address}
            blockExplorer={web3.blockExplorer}
            contractConfig={web3.contractConfig}
          />
        </div>
      </div>
    </>
  );
}

export default Web3Consumer(Home);
