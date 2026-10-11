import Header from './components/Header.tsx';


export default function App() {

  return (
    <div>
      <Header title="프론트엔드 스터디" memberCount={3} newMemberCount={0}/>
      {/* <Header title="백엔드 스터디" memberCount={4} newMemberCount={1}/> */}
    </div>
  )
}