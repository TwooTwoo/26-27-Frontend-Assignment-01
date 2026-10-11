import Header from './components/Header.tsx';
import Button from './components/Button.tsx';

export default function App() {
  const handleClick = () => {
    alert('버튼 클릭!');
  }


  return (
    <div>
      <Header title="프론트엔드 스터디" memberCount={3} newMemberCount={0}/>
      {/* <Header title="백엔드 스터디" memberCount={4} newMemberCount={1}/> */}
      <Button text="인사하기" variant="primary" onClick={handleClick} />
      <Button text="삭제" variant="danger" onClick={handleClick} />
      {/* <Button text="테스트" variant="blue" /> */}
    </div>
  )
}