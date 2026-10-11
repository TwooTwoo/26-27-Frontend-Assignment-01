import styles from './Button.module.css'

interface ButtonProps {
    text: string;
    variant: 'primary' | 'danger';
}

export default function Button({ text, variant }: ButtonProps) {
    return <button className={`${styles.button} ${styles[variant]}`}>{text}</button>;
}