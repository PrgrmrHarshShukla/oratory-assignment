import Body from "./components/Body"
import Head2 from "./components/Head2"
import Head1 from "./components/head1"


function App() {
  return (
    <div className='flex flex-col justify-start items-center w-full h-auto min-h-full'>
      <Head1 /> 
      <Head2 />
      <Body />
    </div>
  )
}

export default App
