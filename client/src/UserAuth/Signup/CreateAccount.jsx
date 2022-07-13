import './CreateAccount.css'
import CreateForm from './CreateForm'
import Header from '../../Components/HeaderComponents/Header'
import Footer from '../../Components/FooterComponents/Footer'
import ImageSlider from '../../Components/MainComponents/ImageSlider/ImageSlider'
import { TitleTextBox, SideBarText } from '../Texts/Texts'

const CreateAccount = ({ bool, onToggle, cartItems, removeCartItem}) => {

    return (
        <>
            <div className={'create-account-main-' + !bool['sidebar']}>
                <Header bool={bool}
                    onToggle={onToggle}
                    cartItems={cartItems}
                    removeCartItem={removeCartItem}  />
                <div className={'create-account-column-left'}>
                    <TitleTextBox />
                    <CreateForm bool={bool}
                        onToggle={onToggle} />
                </div>
                {!bool['sidebar'] && <div className='create-account-column-right'>
                    <ImageSlider />
                    <SideBarText />
                </div>
                }
            </div>
            <Footer />
        </>
    )
}

export default CreateAccount;