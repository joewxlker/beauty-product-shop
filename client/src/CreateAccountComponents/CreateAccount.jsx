import './CreateAccount.css'
import CreateForm from './FormComponents/CreateForm.jsx'
import Header from '../HeaderComponents/Header'
import Footer from '../FooterComponents/Footer'
import ImageSlider from '../MainComponents/ImageSlider/ImageSlider'
import { SideBarText, TitleTextBox } from './Texts'

const CreateAccount = () => {
    return (
        <>
            <Header />
            
            <div className='create-account-main'>
                <div className='create-account-column-left'>
                    <TitleTextBox/>
                    <CreateForm />
                    </div>
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