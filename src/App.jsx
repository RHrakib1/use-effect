import Albums from './Albums'
import './App.css'
import Friends from './Friends'
import Players from './Players'
import Usestate from './UseState'


function App() {

  // hendel event 1
  function hendelclick() {
    alert('we call me?')
  }
  // hendel event 2
  const hendelclick2 = () => {
    alert('we call that')
  }

  // hendel click 4
  const add4 = (num) => {
    alert(num + 5)


  }



  return (
    <>

      <Friends></Friends>
      <Players></Players>
      <Usestate></Usestate>
      <h3>react</h3>
      {/* hendel event 1  */}
      <button onClick={hendelclick}>click me</button>
      {/* hendel event 2 */}
      <button onClick={hendelclick2}>click me</button>
      {/* hendel event 3  */}
      <button onClick={() => { alert('please ordar me') }}>call me</button>
      {/* hendelclick 4 */}
      <button onClick={() => { add4(4) }}>call me</button>
      <Albums></Albums>
    </>
  )
}

export default App
