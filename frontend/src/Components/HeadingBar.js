import { Link } from 'react-router-dom'
import '../index.css';

const HeadingBar = () =>
{
    return (
        <div class='content'>
                <div>
                    <div>
                    <h1 className='welcome_message'>Management Website</h1>
                    </div>
                            <Link to='/' class='top_of_pages'>
                                Homepage
                            </Link>
                            <div class='space'>
                            </div>
                            <div>
                                <Link to='/inventory' class='top_of_pages'>
                                    Inventory
                                </Link>
                            </div>
                </div>
        </div>
    )

}
export default HeadingBar