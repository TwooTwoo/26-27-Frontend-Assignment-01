import Header from './components/Header.tsx';
import Button from './components/Button.tsx';
import MemberCard from './components/MemberCard.tsx'

export default function App() {
  const handleClick = () => {
    alert('버튼 클릭!');
  };

  const handleGreet = (name: string) => {
    alert(`${name}님, 안녕하세요!`);
  };

  const handleDelete = (name: string) => {
    console.log(`${name} 삭제 요청`);
  };


  return (
    <div>
      <Header title="프론트엔드 스터디" memberCount={3} newMemberCount={0}/>
      {/* <Header title="백엔드 스터디" memberCount={4} newMemberCount={1}/> */}
      <Button text="인사하기" variant="primary" onClick={handleClick} />
      <Button text="삭제" variant="danger" onClick={handleClick} />
      {/* <Button text="테스트" variant="blue" /> */}
      <MemberCard name="김태우" field="프론트엔드" isLeader={true} isOnline={true} 
        onGreet={handleGreet} onDelete={handleDelete}/>
      <MemberCard name="황재현" field="디자인" isLeader={false} isOnline={true} 
        onGreet={handleGreet} onDelete={handleDelete}/>
      <MemberCard name="김동주" isLeader={false} 
        onGreet={handleGreet} onDelete={handleDelete}/>
    </div>
  )
}