'use client'

import Image from 'next/image';
import Link from 'next/link'
import Logo from '../../../public/images/logo.svg';
import Styles from './header.module.scss';
import { Button } from '../button';
import { ScrollTo } from '@/utils/scrollTo';

export const Header = () => {
    return <div className={Styles.container}>
        <div className="logotipo">
            <Image src={Logo} alt="Logo"/>
        </div>
        <div className={Styles.menu}>
            <Link href='/'>Home</Link>
            <Link href='/'>O que fazemos</Link>
            <Link href='/'>Cases</Link>
        </div>
        <div className={Styles.action}>
            <Button title='Fale conosco' kind='primary' onClick={() => ScrollTo('contato')} />
        </div>
    </div>
}