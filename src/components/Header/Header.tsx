import { JSX } from 'react';

import style from './Header.module.scss';

export function Header(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className="header_container">
                <div className="left"></div>
                <div className="right"></div>
            </div>
        </div>
    );
}
