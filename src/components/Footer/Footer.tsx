import { JSX } from 'react';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaReddit, FaGithub, FaArrowRight } from "react-icons/fa";

import style from './Footer.module.scss';

export function Footer(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.footer_container }>
                <div className={ style.top }>
                    <div className={[style.footer_card, style.f].join(' ')}>
                        <div className={style.cd_container }>
                            <div className={style.title }>
                                <p><span>Ready</span> to start building?</p>
                            </div>
                            <div className={style.description }>
                                <p>Create a 0x account and get started, for free, in less than five minutes.</p>
                            </div>
                            <div className={style.button }>
                                <button>Create Account</button>
                            </div>
                        </div>
                    </div>

                    <div className={[style.footer_card, style.s].join(' ')}>
                        <div className={style.cd_container }>
                            <div className={style.title }>
                                <p>Join our newsletter</p>
                            </div>
                            <div className={style.description }>
                                <p>Stay in the know on the latest alpha, news and product updates.</p>
                            </div>

                            <div className={style.input }>
                                <div className={ style.input_container }>
                                    <input 
                                        type="text" 
                                        placeholder='Enter your email'
                                    />
                                    <div className={style.icon }>
                                        <FaArrowRight color='#fff' size='20px'/>
                                    </div>
                                </div>
                            </div>

                            <div className={style.terms }>
                                <p>To learn how we manage your data, visit our</p>
                                <a href=".">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ style.bottom }>
                    <div className={ style.main }>
                        <div className={style.left}>
                            <div className={style.logo}>
                                <div>
                                    <img 
                                        src="https://assets-global.website-files.com/640bf70a17d12b42d97a052b/640bfd7d8441821c4cd20210_logo.svg" 
                                        alt="" 
                                    />
                                </div>
                            </div>
                            <div className={style.description}>
                                <p>Connecting developers to Web3 markets.</p>
                            </div>
                        </div>

                        <div className={style.right}>
                            <div className="product">
                                <p>PRODUCT</p>
                                <ul>
                                    <li><a href=".">Swap API</a></li>
                                    <li><a href=".">Tx Relay API</a></li>
                                    <li><a href=".">Solutions</a></li>
                                </ul>
                            </div>

                            <div className="developer">
                                <p>DEVELOPER</p>
                                <ul>
                                    <li><a href=".">Documentation</a></li>
                                    <li><a href=".">Help</a></li>
                                    <li><a href=".">Stack Exchange</a></li>
                                    <li><a href=".">Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="company">
                                <p>COMPANY</p>
                                <ul>
                                    <li><a href=".">Terms of Service</a></li>
                                    <li><a href=".">Privacy Notice</a></li>
                                    <li><a href=".">Cookie Notice</a></li>
                                    <li><a href=".">API License Agreement</a></li>
                                    <li><a href=".">Careers</a></li>
                                    <li><a href=".">Press</a></li>
                                    <li><a href=".">Media Kit</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={ style.sub }>
                        <div className={ style.sub_container }>
                            <div className={ style.left }>
                                <p>© ZeroEx Holdings, Inc. All rights reserved.</p>
                            </div>
                            <div className={ style.right }>
                                <AiFillTwitterCircle size={'35px'}/>
                                <FaReddit size={'35px'}/>
                                <FaGithub size={'35px'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
