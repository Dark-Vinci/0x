import { JSX } from 'react';

import style from './Body1.module.scss';

export function Body1(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.body1_container }>
                <div className={ style.company }>
                    <div className={ style.company_container }>
                        <p>Trusted by leading Web3 apps</p>
                        <div className={ style.image_grid }></div>
                    </div>
                </div>

                <div className={ style.title }>
                    <p>A fully integrated suite of <span>APIs</span></p>
                </div>
                <div className={ style.grid }>
                    <div className={style.fade}></div>
                    <div>
                        <a href=".">
                            <Card 
                                imageUrl={''} 
                                title={''} 
                                description={''} 
                                isComingSoon={false} 
                            />
                        </a>
                    </div>
                    <div className={style.fade}></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className={style.fade}></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
