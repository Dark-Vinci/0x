import { JSX } from 'react';

import style from './Body1.module.scss';
import { Card } from './Card';

type CardType =
    | { isFade: boolean }
    | { 
        isFade: boolean; 
        imageUrl: string; 
        description: string; 
        isComingSoon: boolean;
        title: string;
    }

const cards: Array<CardType> = [
    {
        isFade: true,
    },

    {
        isFade: false,
        imageUrl: 'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/6440ceb57b2cc6cf1a426e0c_tx-relay.webp',
        description: 'Build frictionless apps with end-to-end gasless infrastructure.',
        isComingSoon: false,
        title: 'Tx Relay'
    },

    {
        isFade: true,
    },

    {
        isFade: false,
        imageUrl: 'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/6440ceb4508190612d79f6f0_token-registry.webp',
        description: 'Enrich your trading app with comprehensive and curated token metadata.',
        isComingSoon: false,
        title: 'Token Registry',
    },

    {
        isFade: false,
        imageUrl: 'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/6440ceb5d8c7de7124edddbf_swap.webp',
        description: 'Power crypto trading for thousands of tokens with the deepest liquidity.',
        isComingSoon: true,
        title: 'Swap',
    },

    {
        isFade: false,
        imageUrl: 'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/6440ceb494b6431b4627b653_orderbook.webp',
        description: 'Enable limit orders in your app or take liquidity directly from the 0x Orderbook.',
        isComingSoon: false,
        title: 'Orderbook',
    },

    {
        isFade: false,
        imageUrl: 'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/65735e87b442008279839f5f_Price%20API.png',
        description: 'Realtime DEX prices for any token at your fingertips so you never miss an opportunity.',
        isComingSoon: false,
        title: 'Price'
    },

    {
        isFade: true,
    },

    {
        isFade: false,
        imageUrl: 'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/6440ceb403c901ff764d592a_tx-history.webp',
        description: 'Easily show your users their trading history in one place.',
        isComingSoon: true,
        title: 'Tx History',
    },
];

const logoList = [
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640c3bb25617005e4eca9d8d_trusted_coinbase.png', 
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640c3bb2ac6f56eccb18cc69_trusted_jump.png', 
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640c3bb384373f03596b1966_trusted_robinhood.png', 
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640c3bb3d086fd01feb0f8db_trusted_polygon.png', 
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640c3bb309bfca3981617381_trusted_metamask.png', 
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640c3bb22e2b1627de161916_trusted_dydx.png', 
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640c3bb3ba67523cf8ec30b6_trusted_brave.png', 
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/6491f8640518abbd33830578_trusted_matcha_v3.png', 
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640c3bb2714c5afbbb658e2b_trusted_defisaver.png', 
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/64306e05e805c42127a786d7_Phantom%201.svg', 
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640c3bb26bc21190c573a41c_trusted_zapper.png', 
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640c3bb244ffd00a9291ef99_trusted_rainbow.png'
];

export function Body1(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.body1_container }>
                <div className={ style.company }>
                    <div className={ style.company_container }>
                        <p>Trusted by leading Web3 apps</p>
                        <div className={ style.image_grid }>
                            {
                                logoList.map((el, i) => {
                                    return <img 
                                        src={el} 
                                        alt="logo"
                                        key={i}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className={ style.title }>
                    <p>A fully integrated suite of <span>APIs</span></p>
                </div>
                <div className={ style.grid }>
                    {
                        cards.map((el, i) => {
                            if (el.isFade) {
                                return (
                                    <div className={ style.fade } key={i}></div>
                                );
                            }

                            return (
                                <div
                                    key={i}
                                >
                                    <a href=".">
                                        <Card 
                                            imageUrl={(el as any).imageUrl} 
                                            title={(el as any).title} 
                                            description={(el as any).description} 
                                            isComingSoon={(el as any).isComingSoon} 
                                        />
                                    </a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
