import Image from 'next/image';
import Styles from './features.module.scss';
import Icon from '@/../public/images/icon.svg';

export const Features = () => {
    return <div className={Styles.container}>

        <h1>Neste bairro, não há agência melhor. Garantimos.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eos non rerum? Optio
            nesciunt nemo beatae placeat repudiandae quod harum nam, eos illo temporibus, doloremque, autem iure totam numquam voluptate.
        </p>

        <div className={Styles.features}>
            <div className={Styles.feature}>
                <Image src={Icon} alt='icon' className='icon'/>
                <h1>Digital Strategy</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eos non rerum? Optio
                    nesciunt nemo beatae placeat repudiandae quod harum nam, eos illo temporibus, doloremque, autem iure totam numquam voluptate.
                </p>
            </div>
            <div className={Styles.feature}>
                <Image src={Icon} alt='icon' className='icon'/>
                <h1>Estratégia digital</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eos non rerum? Optio
                    nesciunt nemo beatae placeat repudiandae quod harum nam, eos illo temporibus, doloremque, autem iure totam numquam voluptate.
                </p>
            </div>
            <div className={Styles.feature}>
                <Image src={Icon} alt='icon' className='icon'/>
                <h1>Social Midia</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eos non rerum? Optio
                    nesciunt nemo beatae placeat repudiandae quod harum nam, eos illo temporibus, doloremque, autem iure totam numquam voluptate.
                </p>
            </div>
            <div className={Styles.feature}>
                <Image src={Icon} alt='icon' className='icon'/>
                <h1>Social Midia</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eos non rerum? Optio
                    nesciunt nemo beatae placeat repudiandae quod harum nam, eos illo temporibus, doloremque, autem iure totam numquam voluptate.
                </p>
            </div>
        </div>
    </div>
}