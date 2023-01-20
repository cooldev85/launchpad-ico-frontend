import { RouteType } from "./config";
import Home from "../pages/Home";
import PresalePageLayout from "../pages/PresalePageLayout";
import Explore from "../pages/Explore";
import MyContribution from "../pages/MyContribution";
import CreatePreasale from "../pages/CreatePreasale";
import CreateHyperLaunch from "../pages/CreateHyperLaunch";
import CreateFairLaunch from "../pages/CreateFairLaunch";
import CreateLock from "../pages/CreateLock";
import TokenLock from "../pages/TokenLock";
import LiquidityLock from "../layouts/Lock/LiquidityLock/LiquidityLock";
import Airdrop from "../pages/Airdrop";
import CreateToken from "../pages/CreateToken";
import ManageAntiBot from "../pages/ManageAntiBot";
import Stake from "../pages/Stake";
import KYCAudits from "../pages/KYCAudits";
import Docs from "../pages/Docs";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HomeIcon from '@mui/icons-material/Home';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArticleIcon from '@mui/icons-material/Article';
import BorderAllIcon from '@mui/icons-material/BorderAll';


const appRoutes: RouteType[] = [
  {
    index: true,
    element: <Home />,
    state: "home",
  },
  //Home
  {
    path: "/",
    element: <Home />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <HomeIcon />,
    },
  },
  //Presales
  {
    path: "/presales",
    element: <PresalePageLayout />,
    state: "presales",
    sidebarProps: {
      displayText: "Presale",
      icon: <CrisisAlertIcon />,
    },
    child: [
      {
        path: "/presales/explore",
        element: <Explore />,
        state: "presales.explore",
        sidebarProps: {
          displayText: "Explore",
        },
      },
      {
        path: "/presales/quickview",
        element: <Explore />,
        state: "presales.quickview",
        sidebarProps: {
          displayText: "Quick View",
        },
      },
      {
        path: "/presales/contribution",
        element: <MyContribution />,
        state: "presales.contribution",
        sidebarProps: {
          displayText: "My Contribution",
        },
      },
      {
        path: "/presales/alarm",
        element: <MyContribution />,
        state: "presales.alarm",
        sidebarProps: {
          displayText: "My Alarm",
        },
      },
    ],
  },
  //Launchpad
  {
    path: "/launchpad",
    element: <PresalePageLayout />,
    state: "launchpad",
    sidebarProps: {
      displayText: "Launchpad",
      icon: <RocketLaunchIcon />,
    },
    child: [
      {
        path: "/launchpad/create-presale",
        element: <CreatePreasale />,
        state: "launchpad.create-presale",
        sidebarProps: {
          displayText: "Create Presale",
        },
      },
      {
        path: "/launchpad/create-hyperlaunch",
        element: <CreateHyperLaunch />,
        state: "launchpad.create-hyperlaunch",
        sidebarProps: {
          displayText: "Create Hyper Launch",
        },
      },
      {
        path: "/launchpad/create-fairlaunch",
        element: <CreateFairLaunch />,
        state: "launchpad.create-fairlaunch",
        sidebarProps: {
          displayText: "Create Fair Launch",
        },
      },
      {
        path: "/launchpad/create-specialPresales",
        element: <CreatePreasale />,
        state: "launchpad.create-specialPresales",
        sidebarProps: {
          displayText: "Create Special Presales",
        },
      },
      {
        path: "/launchpad/manage-presales",
        element: <CreatePreasale />,
        state: "launchpad.manage-presales",
        sidebarProps: {
          displayText: "Manage Presales",
        },
      },
      {
        path: "/launchpad/manage-specialsales",
        element: <CreatePreasale />,
        state: "launchpad.manage-specialsales",
        sidebarProps: {
          displayText: "Manage Special Sales",
        },
      },
    ],
  },

  //Lock
  {
    path: "/lock",
    element: <PresalePageLayout />,
    state: "lock",
    sidebarProps: {
      displayText: "Lock",
      icon: <LockOpenIcon />,
    },
    child: [
      {
        path: "/lock/create-lock",
        element: <CreateLock />,
        state: "lock.create-lock",
        sidebarProps: {
          displayText: "Create Lock",
        },
      },
      {
        path: "/lock/token-lock",
        element: <TokenLock />,
        state: "lock.token-lock",
        sidebarProps: {
          displayText: "Token Lock",
        },
      },
      {
        path: "/lock/liquidity-lock",
        element: <LiquidityLock />,
        state: "lock.liquidity-lock",
        sidebarProps: {
          displayText: "Liquidity Lock",
        },
      },
    ],
  },
  //Utility && Tools
  {
    path: "/utility",
    element: <PresalePageLayout />,
    state: "utility",
    sidebarProps: {
      displayText: "Utility && Tools",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        path: "/utility/airdrop",
        element: <Airdrop />,
        state: "utility.airdrop",
        sidebarProps: {
          displayText: "Airdrop",
        },
      },
      {
        path: "/utility/presale-calculator",
        element: <Airdrop />,
        state: "utility.presale-calculator",
        sidebarProps: {
          displayText: "Presale Calculator",
        },
      },
      {
        path: "/utility/create-token",
        element: <CreateToken />,
        state: "utility.create-token",
        sidebarProps: {
          displayText: "Create Token",
        },
      },
      {
        path: "/utility/manage-antibot",
        element: <ManageAntiBot />,
        state: "utility.manage-antibot",
        sidebarProps: {
          displayText: "Manage Anti Bot",
        },
      },
      {
        path: "/utility/stake",
        element: <Stake />,
        state: "utility.stake",
        sidebarProps: {
          displayText: "Stake",
        },
      },
      {
        path: "/utility/multichain-bridge",
        element: <Airdrop />,
        state: "utility.multichain-bridge",
        sidebarProps: {
          displayText: "Multichain Bridge",
        },
      },
    ],
  },
  //Presale Alerts
  {
    path: "/presale-alerts",
    element: <PresalePageLayout />,
    state: "presale-alerts",
    sidebarProps: {
      displayText: "Presale Alerts",
      icon: <CrisisAlertIcon />,
    },
  },
  //KYC && Audits
  {
    path: "/kyc-audits",
    element: <KYCAudits />,
    state: "kyc-audits",
    sidebarProps: {
      displayText: "KYC & Audits",
      icon: <BorderAllIcon />,
    },
  },
  //Docs
  {
    path: "/docss",
    element: <Docs />,
    state: "docs",
    sidebarProps: {
      displayText: "Docs",
      icon: <ArticleIcon />,
    },
  }
];

export default appRoutes;
