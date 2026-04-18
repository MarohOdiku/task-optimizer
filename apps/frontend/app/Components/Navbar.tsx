import Link from 'next/link'
import '../css/nav.css'


const Navbar = () => {

  return ( 
    <nav>
      <div>
        <Link href="/">Task Optimizer</Link>
      </div>
  
      <ul className="flex space-x-4 p-4 bg-gray-800 text-white">
        <li>
          <Link href="/">Dashboard</Link>
        </li>

        <li>
          <Link href="/mytasks">My Tasks</Link>
        </li>

        <li>
          <Link href="/projects">Projects</Link>
        </li>
        
        <li>
          <Link href="/calendar">Calendar</Link>
        </li>
        
        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>    
    </nav>
  )
}

export default Navbar