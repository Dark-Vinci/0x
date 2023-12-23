import { JSX } from 'react';

import style from './Body4.module.scss';
// import { JsonViewer } from '@textea/json-viewer';

const json = {
  "chainId": 1,
  "price": "0.9998894159683656",
  "guaranteedPrice": "0.989890521808681944",
  "estimatedPriceImpact": "0.0503",
  "to": "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
  "data": "0x6af479b200000000000000000000000000000000",
  "value": "0",
  "gas": "119595",
  "estimatedGas": "119595",
  "gasPrice": "27000000000",
  "protocolFee": "0",
  "buyTokenAddress": "0x6b175474e89094c44da98b954eedeac495271d0f",   "sellTokenAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",   "buyAmount": "99745615969657880000",
  "sellAmount": "100000000",
  "sources": [
    {
      "name": "Uniswap_V2",
      "proportion": "1"
    },
    {
      "name": "Curve",
      "proportion": "0"
    },
    {
      "name": "Balancer",
      "proportion": "0"
    },
    {
      "name": "Balancer_V2",
      "proportion": "0"
    }
   ],
  "orders": [
    {
      "type": 0,
      "source": "Uniswap_V2",
      "makerToken": "0x6b175474e89094c44da98b954eedeac495271d0f",
      "takerToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "makerAmount": "99745615969657880000",
      "takerAmount": "100000000",
      "fillData": {
         "tokenAddressPath": [
           "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
           "0x6b175474e89094c44da98b954eedeac495271d0f"
        ],
        "router": "0xf164fc0ec4e93095b804a4795bbe1e041497b92a"
      },
      "fill": {
        "input": "100000000",
        "output": "99745615969657880000",
        "adjustedOutput": "96801237004628048423",
        "gas": 90000
      }
    }
  ],
  "allowanceTarget": "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
  "decodedUniqueId": "f784c3f24d-1678769219",
  "sellTokenToEthRate": "1678.50772",
  "buyTokenToEthRate": "1677.70881198281001559",
  "expectedSlippage": null
};

export function Body4(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.body4_container }>
                <div className={ style.inner }>
                    <div className={ style.left }>
                        <div className={ style.top}>
                            <div className={ style.quote}>
                                <div className={ style.q}>
                                    <p>Get price quote</p>
                                </div>
                                <a href='.'>Copy to clipboard</a>
                            </div>
                            <div className={ style.curl}>
                                <span>span</span> https://api.0x.org/swap/v1/quote
                            </div>
                            <div className={ style.grid}>
                                <div className="title">
                                    <div>buyAmount</div>
                                    <div>buyToken</div>
                                    <div>sellToken</div>
                                </div>
                                <div className="amount">
                                <div>100</div>
                                <div>DAI</div>
                                <div>USDC</div>
                                </div>
                            </div>
                        </div>

                        <div className={ style.bot}>
                            <div className={ style.bot_container}>
                                {/* <div className={ style.pad_top}></div> */}
                                <pre>
                                    {/* <code> */}
                                        { JSON.stringify(json, null, 4)}
                                    {/* </code> */}
                                </pre>
                                {/* <div className={ style.pad_bot}></div> */}
                            </div>
                        </div>
                    </div>
                    <div className={ style.right }>
                        <div className={ style.right_container }>
                            <p> Enable <span>crypto trading</span> with a few lines of code</p>
                            <button>Read the docs</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
