import styles from './Button.module.css'

interface ButtonProps {
    text: string;
    variant: 'primary' | 'danger';
    onClick: () => void;
}

export default function Button({ text, variant, onClick }: ButtonProps) {
    return (
        <button
                type="button"
                className={`${styles.button} %{styles[variant]}`}
                onClick={onClick}
        >
            {text}
        </button>
    );
}