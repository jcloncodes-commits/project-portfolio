import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <Link to="/project-portfolio/">Home</Link>
        <Link to="/project-portfolio/my-work">Work</Link> 
    </div>
  )
}

export default Navbar
