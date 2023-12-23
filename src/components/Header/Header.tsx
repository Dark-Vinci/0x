import { JSX, useEffect, useState } from 'react';

import style from './Header.module.scss';

const imag = [
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/6440ceb403c901ff764d592a_tx-history.webp',
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/6440ceb494b6431b4627b653_orderbook-p-500.webp',
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/6440ceb5d8c7de7124edddbf_swap-p-800.webp',
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/6440ceb4508190612d79f6f0_token-registry.webp',
    'https://assets-global.website-files.com/640bf70a17d12b42d97a052b/6440ceb57b2cc6cf1a426e0c_tx-relay-p-500.webp',
];

export function Header(): JSX.Element {

    const [link, setLink] = useState(imag[0]);

    useEffect(() => {
        let i = 1;

        let a = setInterval(() => {
            if (i < imag.length) {
                setLink(imag[i]);
                i++;
            } else {
                setLink(imag[0]);
                i = 1;
            }
        }, 4000);

        return () => {
            clearInterval(a);
        }
    }, []);


    return (
        <div className={ style.container }>
            <div className={ style.header_container }>
                <div className={ style.left }>
                    <div className={ style.top }>
                        <p>Connecting developers to Web3 markets</p>
                    </div>
                    <div className={ style.mid }>
                        <p>Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.</p>
                    </div>
                    <div className={ style.button }>
                        <button>Get started</button>
                    </div>
                </div>

                <div className={ style.right }>
                    <div className={ style.right_container }>
                        <img
                            height={'300px'}
                            width={'300px'}
                            src={link} 
                            alt=""
                            loading='eager'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
