import { JSX } from 'react';

import style from './Body3.module.scss';
// import { title } from 'process';

const card = [
    {
        logo: 'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/643ecd39cf86b17d54462fb9_secure2x.svg',
        title: 'Price competitiveness',
        special: 'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640ed40a53155cfb1b658a08_price-competivness-icons-2x.png',
        description: 'A single API integration unlocks thousands of pairs with unrivaled liquidity from 100+ exchanges and professional market makers.',
    },

    {
        logo: 'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/643ecd39e79d3992faae6170_data2x.svg',
        title: 'Enriched Data APIs to help you build',
        description: 'Access the most comprehensive and curated token metadata to help you expand your product.',
    },

    {
        logo: 'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/643ecd395c3f535fe702ec3c_dashimage2x.svg',
        title: '0x Dashboard',
        description: 'Generate API keys, monitor and manage your integrations, get access to new APIs and tap into more developer resources.',
    },

    {
        logo: 'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/643ecd39cf86b17d54462fb9_secure2x.svg',
        title: 'Secure and audited smart contracts',
        description: 'Security is critical for our developers and their users. Third party audits ensure that there are no vulnerabilities to exploit.',
    },

    {
        logo: 'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/643ecd398585c5aa4ed8c896_enterprise2x.svg',
        title: 'Enterprise-grade DEX infrastructure',
        description: 'Designed to meet the requirements of Web3 apps, exchanges and financial institutions with 99.9% uptime.',
    },
]

export function Body3(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.body3_container }>
                <div className={ style.top }>
                    <div className={ style.top_container }>
                        <div className={ style.title }>
                            <p><span>APIs and solutions</span> to enable Web3 exchange</p>
                        </div>

                        <div className={ style.description }>
                            <p>Building in Web3 becomes increasingly difficult as the number of ecosystems, DEX protocols, and tokens grow. Our APIs and solutions remove this complexity and reduce the infrastructure overhead.</p>
                        </div>
                    </div>
                </div>

                <div className={ style.grid }>
                    <div className={ style.grid_container }>
                        {
                            card.map((el, i) => {
                                if (el.special) {
                                    return (
                                        <div
                                            key={i}
                                            className={ style.special }
                                        >
                                            <div className={style.left }>
                                                <div className={style.left_container }>
                                                    <div className={style.logo }>
                                                        <img src={el.logo} alt="logo" />
                                                    </div>
                                                    <div className={style.title }>{el.title}</div>
                                                    <div className={style.description }>{el.description}</div>
                                                </div>
                                            </div>
                                            <div className={style.right }>
                                                <img 
                                                    src={el.special} 
                                                    alt="mmagie" 
                                                />
                                            </div>
                                        </div>
                                    )
                                }

                                return (
                                    <div
                                        key={i}
                                    >
                                        <div className={style.card }>
                                            <div className={style.logo }>
                                                <img src={el.logo} alt="logo" />
                                            </div>
                                            <div className={style.title }>{el.title}</div>
                                            <div className={style.description }>{el.description}</div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
