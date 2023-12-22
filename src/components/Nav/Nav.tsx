import { JSX } from 'react';

import style from './Nav.module.scss';

export function Nav(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className ={ style.nav_container }>
                <div className={ style.left }>
                    <img 
                        src="https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640bfd7d8441821c4cd20210_logo.svg" 
                        alt="logo" 
                    />
                </div>

                <div className={ style.mid }>
                    <ul>
                        <li><a href=".">Products</a></li>
                        <li><a href=".">Solutions</a></li>
                        <li><a href=".">Pricing</a></li>
                        <li><a href=".">Docs</a></li>
                        <li><a href=".">Content Hub</a></li>
                    </ul>
                </div>

                <div className={ style.right }>
                    <ul>
                        <li><a href=".">Contact Us</a></li>
                        <li className={style.invert}><a href=".">Go to dashboard</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
