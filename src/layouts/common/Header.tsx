import { Box, Stack } from "@mui/material";
import SearchBar from "../../components/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { ColorButton } from "../../components/Button";
import { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { providerOptions } from "./providerOptions";

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions
});


const DesktopView = () => {

  const [account, setAccount] = useState("");
  const [chain, setChain] = useState("Network");

  var styledAddress = account
    ? account.slice(0, 4) + "..." + account.slice(-4)
    : "";

  const connectWallet = async () => {
    console.log(account);
    const provider = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(provider);
    const accounts = await library.listAccounts();
    const network = await library.getNetwork();
    const myaccount = accounts[0];
    setAccount(myaccount);
    switch (network?.chainId) {
      case 1:
        setChain("Ethereum")
        break;
      case 56:
        setChain("Binance")
        break;
      default:
        setChain("Choose Right")
        break;
    }
  }

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    setAccount("");
    setChain("");
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <SearchBar />
      </Box>
      <Stack direction="row" spacing={2}>
        <ColorButton
          variant="contained"
          startIcon={<AddCircleIcon />}
          sx={{
            height: "fit-content",
            borderRadius: "20px",
            bgcolor: "rgba(242, 12, 236, 0.15)",
          }}
        >
          Create
        </ColorButton>
        <ColorButton
          variant="contained"
          startIcon={<AddCircleIcon />}
          sx={{
            height: "fit-content",
            borderRadius: "20px",
            bgcolor: "rgba(242, 12, 236, 0.15)",
          }}
        >
          {chain} &nbsp;Chain
        </ColorButton>
        {account === "" ? (
          <ColorButton
            variant="contained"
            sx={{
              height: "fit-content",
              borderRadius: "20px",
              bgcolor: "rgba(242, 12, 236, 0.15)",
            }}
            onClick={() => connectWallet()}
            startIcon={<AccountBalanceWalletIcon />}
          >
            &nbsp;
            Connect wallet
          </ColorButton>
        ) : (
          <ColorButton
            variant="contained"
            sx={{
              height: "fit-content",
              borderRadius: "20px",
              bgcolor: "rgba(242, 12, 236, 0.15)",
            }}
            onClick={() => { disconnectWallet() }}
            startIcon={<AccountBalanceWalletIcon />}
          >
            &nbsp;
            {styledAddress}
          </ColorButton>
        )}
      </Stack>
    </Box>
  );
};

const MobileView = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <SearchBar />
      </Box>
      <Stack direction="row" spacing={{ xs: 0.5, sm: 2 }}>
        <ColorButton
          variant="contained"
          startIcon={<AddCircleIcon />}
          sx={{
            height: "fit-content",
            borderRadius: "20px",
            bgcolor: "rgba(242, 12, 236, 0.15)",
          }}
        >
          ETH
        </ColorButton>
        <ColorButton
          variant="contained"
          sx={{
            height: "fit-content",
            borderRadius: "20px",
            bgcolor: "rgba(242, 12, 236, 0.15)",
          }}
          startIcon={<AccountBalanceWalletIcon />}
        >
          {" "}
          Connect
        </ColorButton>
      </Stack>
    </Box>
  );
};

const Header = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      if (window.innerWidth < 900) {
        setMobileView(true);
      }
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return <>{mobileView ? <MobileView /> : <DesktopView />}</>;
};

export default Header;
