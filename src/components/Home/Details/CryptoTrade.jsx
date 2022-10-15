import React from 'react'
import './Details.css'

const CryptoTrade = () => {
  return (
    <div className='details'>

      <div className="hero hero-bit">
        <div className="overlay2"></div>
        <div className="hero-content">
          <h1 className="hero-title">Crypto Trading</h1>
          <p className='hero-text'>Trade Top Cryptocurrencies</p>
        </div>
      </div>

      <main className='main-panel'>
        <section className='container'>
          <div class="card-panel">
            <div className='card-text'>
              <span>Pro Trade Options  is excited to announce the launch of our new cryptocurrency trading platform. Now you can start trading Bitcoin, Ethereum and many more cryptocurrencies quickly, easily and safely from wherever you are — in just seconds. You get great margin trading leverage and short sell options with fast deposits and withdrawals. Our support team is available 24/7/365 to help get you trading on our CySEC-regulated platform with a trading volume of US $11 billion monthly.<br /></span><span><br /></span><span>What is a crypto currency<br /></span><span>A cryptocurrency like bitcoin is a virtual currency traded peer-to-peer on a blockchain, independent of centralized authorities like banks and governments. Cryptocurrencies are entirely virtual, so they are not backed by physical commodities and have no intrinsic value.<br /></span><span><br /></span><span>How Do Cryptocurrencies Work?<br /></span><span>Primarily, cryptocurrencies rely on blockchain technology to complete a transaction via an intricate P2P network. Once a transfer request is entered into the network, it is validated by the network and added to a pool of other transactions to create a block of data for the ledger, which is then entered into the existing blockchain. Once the block is successfully added to the chain, the transaction is approved and completed.<br /></span><span><br /></span><span>Are There Investment Opportunities with Cryptocurrencies?<br /></span><span>Absolutely. Cryptocurrencies have become established investment commodities among major financial institutions and have even been adopted by countries such as Australia and Japan. As with any investment though, there are risks linked to market movements, high volatility and economics.<br /></span>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default CryptoTrade