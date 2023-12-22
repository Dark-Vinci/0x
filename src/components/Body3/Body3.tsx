import { JSX } from 'react';

import style from './Body3.module.scss';

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
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
