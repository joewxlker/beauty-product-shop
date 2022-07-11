import { Link } from 'react-router-dom';
import './EventHeader.css'

const EventHeader = () => {
    return (
        <>
            <Link to='/createAccount' className='event-header-container'>
                <header className='event-header'>
                <h5>Become a member today!</h5>
            </header>
            </Link>
        </>
    );
}

export default EventHeader;