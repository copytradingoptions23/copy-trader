import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Home
import Home from './pages/Home'

// Navigation
import Navbar from './components/Navigation/Navbar/Navbar';
import NavbarUser from './components/Navigation/Navbar/NavbarUser';
import Footer from './components/Navigation/Footer/Footer';

// Auth 
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';

// Details
import Contact from './pages/Contact';
import Risk from './components/Home/Details/Risk';
import Bitcoin from './components/Home/Details/Bitcoin';
import About from './components/Home/About/About';
import AboutMining from './components/Home/Details/AboutMining';
import Cookie from './components/Home/Details/Cookie'
import CopyTrader from './components/Home/Details/CopyTrader'
import CryptoTrade from './components/Home/Details/CryptoTrade'
import Dogecoin from './components/Home/Details/Dogecoin'
import ForexTrade from './components/Home/Details/ForexTrade'
import Leverage from './components/Home/Details/Leverage'
import OptionsTrade from './components/Home/Details/OptionsTrade'
import Privacy from './components/Home/Details/Privacy'
import Responsible from './components/Home/Details/Responsible'
import StockTrade from './components/Home/Details/StockTrade'
import Term from './components/Home/Details/Term'

// Dashboard
import Trading from './pages/Dashboard/Trading';
import Market from './pages/Dashboard/Market';
import Mining from './pages/Dashboard/Mining';
import Deposit from "./pages/Dashboard/Deposit"
import Accounts from "./pages/Dashboard/Accounts"

// Account 
import Referral from "./components/Dashboard/Account/Referral/Referral"
import WatchList from "./components/Dashboard/Account/WatchList/WatchList"
import Withdrawals from "./components/Dashboard/Account/Withdrawals/Withdrawals"
import WithdrawalMethod from "./components/Dashboard/Account/WithdrawalMethod/WithdrawalMethod"
import WithdrawalForm from "./components/Dashboard/Account/WithdrawalForm/WithdrawalForm"
import AddressVerification from "./components/Dashboard/Account/AddressVerification/AddressVerification"
import IdentityVerification from "./components/Dashboard/Account/IdentityVerification/IdentityVerification"
import Notification from "./components/Dashboard/Account/Notification/Notification"
import Verification from "./components/Dashboard/Account/Verification/Verification"


// Dashboard deposit
import Traders from './components/Dashboard/Traders/Traders';
import Pay from './components/Dashboard/Deposit/Pay/Pay';
import CryptoPage from "./components/Dashboard/Deposit/CryptoPage/CryptoPage"
import Pricing from "./components/Dashboard/Deposit/Pricing/Pricing"
import CrypTrading from "./components/Dashboard/Deposit/Trading/Trading"
import CrypMining from "./components/Dashboard/Deposit/Mining/Mining"
import BuyCrypto from "./components/Dashboard/Deposit/BuyCrypto/BuyCrypto"

// Admin
import Admin from './pages/Admin';
import UserList from './components/Admin/Users/UserList';
import TraderList from './components/Admin/Traders/TraderList';
import WalletList from './components/Admin/Wallet/WalletList';
import WalletAdd from './components/Admin/Wallet/WalletAdd';
import WalletUpdate from './components/Admin/Wallet/WalletUpdate';
import PlanAdd from './components/Admin/Plans/PlanAdd';
import PlanList from './components/Admin/Plans/PlanList';
import Password from './components/Admin/Password/Password';
import PayList from './components/Admin/Payout/PayoutList';
import PayoutAdd from './components/Admin/Payout/PayoutAdd';
import Email from './components/Dashboard/Account/Email/Email';
import AccountPassword from './components/Dashboard/Account/Password/Password';
import Address from './components/Dashboard/Account/Address/Address';
import AccountList from './components/Dashboard/Account/List/AccountList';
import Verify from './components/Auth/Verify/Verify';
import VerifyReg from './components/Auth/Verify/VerifyReg';
import Forgot from './components/Auth/Verify/Forgot';
import { useCookies } from 'react-cookie';
import Profile from './components/Dashboard/Account/Profile/Profile';
import BelowNav from './components/Navigation/BelowNav/BelowNav';
import ContractSelect from './components/Dashboard/Account/Contract/ContractSelect';
import TraderAdd from './components/Admin/Traders/TraderAdd';



function App() {
  const navigate = useNavigate()
  const [navTem, setNavTem] = useState(false)
  const [topNAV, setTopNav] = useState(false)
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    if (cookies) {
      if (cookies?.userData?.role == "user") {
        setNavTem(true)
      } else {
        setNavTem(false)
      }

      if (cookies?.userToken) {
        setTopNav(true)
      } else {
        setTopNav(false)
      }

    } else {
      setNavTem(false)
      setTopNav(false)
    }

  }, [cookies])


  return (
    <>
      {topNAV ? (
        <NavbarUser />
      ) :
        (
          <Navbar />
        )}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='verify-log' element={<Verify />} />
        <Route path='verify-reg' element={<VerifyReg />} />
        <Route path='forgot' element={<Forgot />} />
        <Route path='signup' element={<Register />} />
        <Route path='about' element={<About />} />


        {/* detail start */}

        <Route path='bitcoin' element={<Bitcoin />} />
        <Route path='risk' element={<Risk />} />
        <Route path='about-minting' element={<AboutMining />} />
        <Route path='copy-trader' element={<CopyTrader />} />
        <Route path='crypto-trader' element={<CryptoTrade />} />
        <Route path='dogecoin' element={<Dogecoin />} />
        <Route path='forex-trade' element={<ForexTrade />} />
        <Route path='leverage' element={<Leverage />} />
        <Route path='options-trading' element={<OptionsTrade />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='responsible' element={<Responsible />} />
        <Route path='stock-trade' element={<StockTrade />} />
        <Route path='terms' element={<Term />} />
        <Route path='cookie' element={<Cookie />} />
        {/* detail end */}

        {/* dashboard start */}
        <Route path='user/trading' element={<Trading />} />
        <Route path='user/market' element={<Market />} />
        <Route path='user/mining' element={<Mining />} />
        <Route path='user/traders' element={<Traders />} />
        <Route path='user/deposit/pay' element={<Pay />} />
        <Route path="user/deposit" element={<Deposit />} />
        <Route path="user/deposit/cryptoPage" element={<CryptoPage />} />
        <Route path="user/deposit/pricing" element={<Pricing />} />
        <Route path="user/deposit/buyCrypto" element={<BuyCrypto />} />
        <Route path="user/deposit/pricing/trading" element={<CrypTrading />} />
        <Route path="user/deposit/pricing/mining" element={<CrypMining />} />
        <Route path="account" element={<Accounts />} />
        <Route path="referral" element={<Referral />} />
        <Route path="watchList" element={<WatchList />} />
        <Route path="withdrawal" element={<Withdrawals />} />
        <Route path="withdrawal/withdrawalMethod" element={<WithdrawalMethod />} />
        <Route path="contract/select" element={<ContractSelect />} />
        <Route
          path="withdrawal/withdrawalMethod/cryptoForm"
          element={
            <WithdrawalForm
              titleName="Crypto"
              inputName="Wallet Address"
              state="crypto"
            />
          }
        />
        <Route
          path="withdrawal/withdrawalMethod/bankForm"
          element={
            <WithdrawalForm
              titleName="Bank"
              inputName="Bank Name"
              state="bank"
            />
          }
        />
        <Route
          path="withdrawal/withdrawalMethod/payPalForm"
          element={
            <WithdrawalForm
              titleName="PayPal"
              inputName="Paypal Email"
              state="paypal"
            />
          }
        />
        <Route
          path="withdrawal/withdrawalMethod/cashAppForm"
          element={
            <WithdrawalForm
              titleName="Cash App"
              inputName="Cash Tag"
              state="cashapp"
            />
          }
        />
        <Route path="account/email" element={<Email />} />
        <Route path="account/profile" element={<Profile />} />
        <Route path="account/password" element={<AccountPassword />} />
        <Route path="account/address" element={<Address />} />
        <Route path="account/address/verify" element={<AddressVerification />} />
        <Route path="account/identity/verify" element={<IdentityVerification />} />
        <Route path="account/verify" element={<Verification />} />
        <Route path="account/notify" element={<Notification />} />
        <Route path="account/settings" element={<AccountList />} />

        {/* dashboard end */}


        {/* Admin Start */}
        <Route path='admin' element={<Admin />} />
        <Route path='admin/user/list' element={<UserList />} />
        <Route path='admin/trader/list' element={<TraderList />} />
        <Route path='admin/trader/add' element={<TraderAdd />} />
        <Route path='admin/wallet/list' element={<WalletList />} />
        <Route path='admin/wallet/create' element={<WalletAdd />} />
        <Route path='admin/wallet/update' element={<WalletUpdate />} />
        <Route path='admin/plans/list' element={<PlanList />} />
        <Route path='admin/plans/update' element={<PlanAdd />} />
        <Route path='admin/account/password' element={<Password />} />
        <Route path='admin/payout/list' element={<PayList />} />
        <Route path='admin/payout/add' element={<PayoutAdd />} />
        {/* Admin end */}

      </Routes>


      {navTem ? (
        <BelowNav />
      ) :
        (
          <Footer />
        )}




    </>


  );
}

export default App;
