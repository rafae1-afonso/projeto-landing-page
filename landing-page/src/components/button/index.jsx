import Styles from './button.module.scss';

export const Button = ( {title, kind} ) => {
    const generationClassByKind = () => {
        if (kind === 'secundary') return Styles.secundary;

        return Styles.primary;
    }

    return <button className={`${Styles.button} ${generationClassByKind()}`}>{title}</button>
}