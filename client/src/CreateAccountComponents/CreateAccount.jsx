import './CreateAccount.css'
import CreateForm from './CreateForm.jsx'
import Header from '../HeaderComponents/Header'
import Footer from '../FooterComponents/Footer'
import ImageSlider from '../MainComponents/ImageSlider/ImageSlider'
import { SideBarText } from './Texts'

const CreateAccount = () => {
    return (
        <>
            <Header />

                <div className='create-account-main'>
                <CreateForm />
                <div className='create-account-column-right'>
                    <ImageSlider />
                    <SideBarText/>
                </div>
                </div>
            <Footer/>
        </>
    );
}

export default CreateAccount;