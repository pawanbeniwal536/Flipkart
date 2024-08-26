import React, {  useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx'
import ForLoginPage from '../components/ForLoginPage/ForLoginPage.jsx';
import ForSignUp from '../components/ForSignUp/ForSignUp.jsx';
import LoginOTP from '../components/ForLoginPage/ForLoginOtp.jsx'
import ForSignUpOTP from '../components/ForSignUp/ForSignUpOTP.jsx';
import UserProfile from '../components/UserProfile/UserProfile.jsx';
import ItemDetails from '../components/ItemDetails/ItemDetails.jsx';
import MakePayment from '../Payment/MakePayment.jsx';
import Cart from '../components/Cart/Cart.jsx';
import PaymentSuccess from '../Payment/PaymentSuccess.jsx';
import PaymentCancelled from '../Payment/PaymentCancelled.jsx';
import Contact from '../components/Contact/Contact.jsx'
import About from '../components/About/About.jsx'
import Careers from '../components/Careers/Careers.jsx'
import FlipkartStories from '../components/FlipkartStories/FlipkartStories.jsx';
import Payment from '../components/Payment/Payment.jsx';
import CancellationReturnPage from '../components/CancellationReturnPage/CancellationReturnPage.jsx'
import Shipping from '../components/Shipping/Shipping.jsx';
import TermsOfUsePage from '../components/TermsOfUsePage/TermsOfUsePage.jsx'
import Privacy from '../components/Privacy/Privacy.jsx';
import Security from '../components/Security/Security.jsx';


const AllRoutes = () => {
    const [email, setEmail] = useState('Enter your Email')

    const mailChange = (newEmail) => {
        setEmail(newEmail)
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home/:id' element={<Home />} />
                <Route path='/account/login' element={<ForLoginPage mailChange={mailChange} />} />
                <Route path='/account/signup' element={<ForSignUp />} />
                <Route path='/account/login/otp' element={<LoginOTP email={email} />} />
                <Route path='/account/signup/otp' element={<ForSignUpOTP />} />
                <Route path='/account/:id/user-profile' element={<UserProfile />} />
                <Route path="/item/:id" element={<ItemDetails />} />
                <Route path='/cart-items' element={<Cart />} />
                <Route path='/product/flipkart/user/account/make-payment/paypal/secure/payment/:amount' element={<MakePayment/>} />
                <Route path="/payment-success" element={<PaymentSuccess/>} />
                <Route path="/payment-cancelled" element={<PaymentCancelled />} />
                <Route path="/contact-us" element={<Contact/>} />
                <Route path="/about-us" element={<About/>} />
                <Route path="/careers" element={<Careers/>} />
                <Route path="/flipkart-stories" element={<FlipkartStories/>} />
                <Route path="/payments" element={<Payment/>} />
                <Route path="/cancel-return-policy" element={<CancellationReturnPage/>} />
                <Route path="/shipping" element={<Shipping/>} />
                <Route path="/term-and-conditions" element={<TermsOfUsePage/>} />
                <Route path="/privacy" element={<Privacy/>} />
                <Route path="/security" element={<Security/>} />
            </Routes>
        </>
    )
}

export default AllRoutes;