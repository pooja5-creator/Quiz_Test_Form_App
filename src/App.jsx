import Test from './components/Test'
import './App.css';
import RepelEffect from './components/RepelEffect';
import { useTheme } from './context/ThemeContext';


export default function App() {
  const {isDark}=useTheme()
  return (
    <main className={`w-full min-h-[100px] pb-[50px] ${!isDark?'background':"mode"}`}>
    <Test/>
    </main>
  )
}
// ${isDark?'bg-amber-400':"bg-zinc-900"}