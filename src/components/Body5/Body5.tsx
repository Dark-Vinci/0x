import { JSX } from 'react';

import style from './Body5.module.scss';
import { MiniCard } from './MiniCard';
import { BigCard } from './BigCard';

const curaselList = [
    {
        company: 'https://assets-global.website-files.com/641b3189771d28b3a1d81347/643f15801f84058aba85325c_Coinbase_Wordmark_White%201.svg',
        name: 'Sid Coelho-Prabhu',
        title: 'Director of Product at Coinbase',
        bgColor: '',
        description: `“0x has one of the most extensive and reliable DEX API services in the Web3 ecosystem, backed by a professional and responsive team. It's been a pleasure working with them to launch our DEX features on Coinbase Wallet.”`,
    },

    {
        company: 'https://assets-global.website-files.com/641b3189771d28b3a1d81347/6440519081b532d56c5c5dfd_defi-saver.svg',
        name: 'Nikola Jankovic',
        title: 'Founder at DeFi Saver',
        bgColor: '#37B06F',
        description: `“We have been working with the 0x team for 3 years now and their APIs are a great choice for any builders out there looking for ultimate liquidity aggregation for their users. We definitely recommend looking into 0x as a simple, ready-made, plug and play solution.”`
    },

    {
        company: 'https://assets-global.website-files.com/641b3189771d28b3a1d81347/644051a37f7cafddb3b65bc9_zerion.svg',
        name: 'Evgeny Yurtaev',
        title: 'Co-founder & CEO at Zerion',
        bgColor: '#26272B',
        description: `“We've been a proud 0x partner and community member for over 3 years. In order to help our users get the most efficient trading routes on Zerion, we knew we wanted to use their Swap API. It was easy to integrate and allowed us to offer users access to a wide range of liquidity sources on Ethereum and other EVM chains.”`,
    },

    {
        company: 'https://assets-global.website-files.com/641b3189771d28b3a1d81347/64408a257337d640fc6b5cc1_deblock.svg',
        name: 'Jean Meyer',
        title: 'CEO at Deblock',
        bgColor: '#F4F4F5',
        description: `“Using Swap API was a no brainer for us. As a startup, being able to tap into 100+ exchanges with a single API integration saved us a lot of time that we can now spend focused in other areas of our product and our users. We are also excited to partner with the 0x team given their expertise working with wallets and fintechs. The team is professional, reliable and experts in their field.”`
    },

    {
        company: 'https://assets-global.website-files.com/641b3189771d28b3a1d81347/6440520cc79bf69736868ea8_zapper.svg',
        name: 'Justin D’Errico',
        title: 'Lead Engineer at Zapper',
        bgColor: '#784FFE',
        description: `“With Swap API we never have to worry about new liquidity sources coming out and the infrastructure overhead of searching for the best trading routes. It’s also been super easy for us to launch trading in other chains thanks to Swap API being available in the major chains. 0x turnkey solutions have allowed us to focus on other areas of our product and make Zapper one of the most popular apps in Web3.”`
    }
];

export function Body5(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.body5_container }>
                <div className={ style.title }>
                    <p>Powering leading Web3 applications</p>
                </div>

                <div className={ style.description }>
                    <p><strong>0x</strong> is used by fintech companies, self-custody wallets, and Web3 native organizations with millions of users across the world.</p>
                </div>

                <div className={ style.mini_card }>
                    <div className={ style.mini_card_container }>
                        <MiniCard title={'Trading volume'} numb={'$133B+'} />

                        <MiniCard title={'Transactions'} numb={'60M+'} />

                        <MiniCard title={'Unique wallets'} numb={'7M+'} />
                    </div>
                </div>

                <div className={ style.big_card }>
                    {
                        curaselList.map((el, i) => {
                            return (
                                <div
                                    key={i}
                                >
                                    <BigCard 
                                        company={el.company} 
                                        description={el.description} 
                                        name={el.name} 
                                        title={el.title} 
                                        bgColor={el.bgColor} 
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
