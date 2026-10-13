import styles from './MemberCard.module.css'

interface MemberCardProps {
    name: string;
    field?: string; // 담당분야
    isLeader: boolean; 
    isOnline?: boolean; 
}

export default function MemberCard({
     name,
     field = '미정',
     isLeader,
     isOnline = false,
    }: MemberCardProps) {
    return (
        <div className={`${styles.card} ${isLeader ? styles.leaderCard : ''}`}>
            <h2>{name}</h2>
            {isLeader && <span className={styles.leaderBadge}>스터디장</span>}
            <p>{field}</p>
            <p>{isOnline ? '온라인' : '오프라인'}</p>
        </div>
    )
}