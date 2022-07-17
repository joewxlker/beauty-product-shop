import { Link } from 'react-router-dom';
import './EventHeader.css'

const EventHeader = () => {

    return (
        <>
            <div className='event-header-container'>
                <header className='event-header'>
                <h5 className='text-accent'>Memberships Available!</h5>
            </header>
            </div>
        </>
    );
}

export default EventHeader;