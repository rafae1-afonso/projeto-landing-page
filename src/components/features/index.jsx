import Image from 'next/image';
import Styles from './features.module.scss';
import Icon from '@/../public/images/icon.svg';

export const Features = () => {
    return <div className={Styles.container}>

        <h1>Neste bairro, não há agência melhor. Garantimos.</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className={Styles.features}>
            <div className={Styles.feature}>
                <Image src={Icon} alt='icon' className='icon' />
                <h1>Digital Strategy</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
            </div>
            <div className={Styles.feature}>
                <Image src={Icon} alt='icon' className='icon' />
                <h1>Estratégia digital</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
            </div>
            <div className={Styles.feature}>
                <Image src={Icon} alt='icon' className='icon' />
                <h1>Social Midia</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
            </div>
            <div className={Styles.feature}>
                <Image src={Icon} alt='icon' className='icon' />
                <h1>Social Midia</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
            </div>
        </div>
    </div>
}