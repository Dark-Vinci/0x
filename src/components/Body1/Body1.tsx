import { JSX } from 'react';

import style from './Body1.module.scss';
import { Card } from './Card';

type CardType =
    | { isFade: boolean }
    | { 
        isFade: boolean; 
        imageUrl: string; 
        description: string; 
        isComingSoon: boolean;
        title: string;
    }

const cards: Array<CardType> = [
    {
        isFade: true,
    },

    {
        isFade: false,
        imageUrl: '',
        description: '',
        isComingSoon: true,
    },

    {
        isFade: true,
    },

    {
        isFade: false,
        imageUrl: '',
        description: '',
        isComingSoon: true,
    },

    {
        isFade: false,
        imageUrl: '',
        description: '',
        isComingSoon: true,
    },

    {
        isFade: false,
        imageUrl: '',
        description: '',
        isComingSoon: true,
    },

    {
        isFade: false,
        imageUrl: '',
        description: '',
        isComingSoon: true,
    },

    {
        isFade: true,
    },

    {
        isFade: false,
        imageUrl: '',
        description: '',
        isComingSoon: true,
    },
]

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
                    {
                        cards.map((el, i) => {
                            if (el.isFade) {
                                return (
                                    <div className={ style.fade } key={i}></div>
                                );
                            }

                            return (
                                <div
                                    key={i}
                                >
                                    <a href=".">
                                        <Card 
                                            imageUrl={(el as any).imageUrl} 
                                            title={(el as any).title} 
                                            description={(el as any).description} 
                                            isComingSoon={(el as any).isComingSoon} 
                                        />
                                    </a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
