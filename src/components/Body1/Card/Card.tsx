import { JSX } from 'react';

import style from './Card.module.scss';

interface CardProps {
    readonly imageUrl: string;
    readonly title: string;
    readonly description: string;
    readonly isComingSoon: boolean;
}

export function Card({imageUrl, title, description, isComingSoon}: CardProps): JSX.Element {
    return (
        <div className={style.container }>
            <div className={style.card_container }>
                <div className={style.head }>
                    <div className={style.img }>
                        <img src={imageUrl} alt="card" />
                    </div>
                    <div className={style.icon }>
                        {
                            isComingSoon ?
                                <div>coming soon icon</div> :
                                <div>arrow icon</div>
                        }
                    </div>
                </div>

                <div className={style.title }>
                    <p>{title} <span>API</span></p>
                </div>

                <div className={style.description }>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
