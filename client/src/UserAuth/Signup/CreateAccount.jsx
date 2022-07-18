import '../small.css'
import '../medium.css'
import '../large.css'
import CreateForm from './CreateForm'
import Footer from '../../Components/FooterComponents/Footer'
import ImageSlider from '../../Components/MainComponents/ImageSlider/ImageSlider'
import { TitleTextBox, SideBarText } from '../Texts/Texts'
import { Link } from 'react-router-dom'

const CreateAccount = ({ bool, onToggle, cartItems, removeCartItem }) => {
    
    return (
        <>
            <div className={`create-account-main-true`} onLoad={window.scrollTo(0,0)}>
                <header> <h1>KLEANSE</h1> <nav><Link to ='/' className='remove-decoration'><h4>Go Back</h4></Link></nav></header>
                <div className={'create-account-column-left'}>
                    <TitleTextBox />
                    <CreateForm bool={bool}
                        onToggle={onToggle}
                        />
                </div>
                <div className='create-account-column-right'>
                    <SideBarText />
                    <ImageSlider />
                </div>
                
            </div>
            <Footer />
        </>
        )
}

export default CreateAccount;