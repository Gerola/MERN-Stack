import { Link } from 'react-router-dom'
import './../index.css'

const Home = () => {
    return (
        <div>
            <h1 className='Heading'>Welcome to the Home page</h1>
            <p className='details'>
                This is a project that I made when learning the MERN stack. I followed the video tutorial <Link to='https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=1'>Net Ninja MERN Stack </Link> 
                on YouTube to help learn the MERN Stack.
            </p>
            <p className='details'>
                To access the inventory management part of the website click on the Inventory link at the top of the page, to come back to this page click on the HomePage link at the top of the page.
            </p>
        </div>

    )
}

export default Home