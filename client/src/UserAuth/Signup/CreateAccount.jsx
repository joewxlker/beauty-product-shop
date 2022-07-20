import '../small.css'
import '../medium.css'
import '../large.css'
import CreateForm from './CreateForm'
import Footer from '../../Components/FooterComponents/Footer'
import ImageSlider from '../../Components/MainComponents/ImageSlider/ImageSlider'
import { TitleTextBox, SideBarText } from '../Texts/Texts'
import { Link } from 'react-router-dom'

const CreateAccount = ({ bool, onToggle }) => {
    
    const types = ['firstname', 'lastname', 'email', 'password']
    const props = ['day', 'month', 'year']
    
    return (
        <>
            <div className={`create-account-main-true`} onLoad={window.scrollTo(0, 0)} style={{paddingTop: '4rem'}}>
                <div className={'create-account-column-left'}>
                    <TitleTextBox />
                    <CreateForm bool={bool}
                        onToggle={onToggle}
                        types={types}
                        props={ props}
                        />
                </div>
                <div className='create-account-column-right'>
                    <SideBarText />
                    <ImageSlider />
                </div>
                
            </div>
        </>
        )
}

export default CreateAccount;