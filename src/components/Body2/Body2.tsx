import { JSX } from 'react';

import style from './Body2.module.scss';

export function Body2(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.body2_container }>
                <div className={ style.title }>
                    <p>Designed to work <span>seamlessly</span> together</p>
                </div>
                <div className={ style.description }>
                    <p>0x offers the core building blocks to create the most powerful Web3 apps.</p>
                </div>
                <div className={ style.bot }>
                    <button>Get started</button>
                </div>
                <div className={ style.img }>
                    <img 
                        src="https://assets-global.website-files.com/640bf70a17d12b42d97a052b/643f7aced3f665b639621fb8_Frame%206339542x-p-2600.png" 
                        alt="laptop" 
                    />
                </div>
            </div>
        </div>
    );
}
