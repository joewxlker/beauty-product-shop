import './CreateAccount.css'
import CreateForm from './CreateForm'
import Header from '../../HeaderComponents/Header'
import Footer from '../../FooterComponents/Footer'
import ImageSlider from '../../MainComponents/ImageSlider/ImageSlider'
import { TitleTextBox, SideBarText } from '../Texts/Texts'
import { useEffect } from 'react'

const CreateAccount = ({ bool, onToggle }) => {

    return (
        <>
            <div className={'create-account-main-' + !bool['sidebar']}>
                <Header bool={bool}
                    onToggle={onToggle} />
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