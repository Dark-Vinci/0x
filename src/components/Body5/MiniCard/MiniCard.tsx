import { JSX } from 'react';

import style from './MiniCard.module.scss';

interface MiniCardProps {
    readonly title: string;
    readonly numb: string;
}

export function MiniCard({title, numb}: MiniCardProps): JSX.Element {
    return (
        <div className={style.container }>
            <div className={style.numb }>
                <p>{ numb }</p>
            </div>
            <div className={style.title }>
                <p>{ title }</p>
            </div>
        </div>
    );
}
