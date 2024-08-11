require('dotenv').config();
const nodemailer = require('nodemailer')
const Users = require('../../Schema/Users')
const jwt = require('jsonwebtoken')


// for signup varification global variables 
let globalotp = ''
let sendOtpStatus = false;
let signupMail = ''
let dateofbirth = ''
let username = ''


// for login varification global variable
let loginGloOTP = ''
let sendlogOTPStatus = false
let loginUser = ''

// route 1 -> route for signup into the page
const signup = async (req, res) => {
  try {

    const { Email, name, Dob } = req.body;
    const existingUser = await Users.findOne({ Email });

    if (existingUser) {
      return res.send('User do already exist with this account ')
    }


    const to = Email;
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const text = `Your one time password for flipkart account create is ${otp}`
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: to,
      subject: 'Verfication code',
      text: text
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        return res.status(500).json({ success: false, message: "Some error occured in sending a otp to the user", error })
      }

      else {
        sendOtpStatus = true;
        globalotp = otp;
        signupMail = to
        username = name;
        dateofbirth = Dob;
        console.log("signup otp is the  ", otp);
        return res.status(200).json({ success: true, message: "otp sent successfully for signup" });
      }
    })

  }
  catch (error) {
    return res.status(500).json({ success: false, message: "Some error occured in signup during user verification " })
  }

}

// Route 2 -> route 2 for login .

const login = async (req, res) => {
  try {

    const { Email } = req.body;
    const existingUser = await Users.findOne({ Email })
    if (!existingUser) {
      return res.send('User does not exist with this account ')
    }
    const to = Email;
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const text = `Your one time password for flipkart login into your account ${otp}`
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: to,
      subject: 'Verfication code',
      text: text
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        return res.status(500).json({ success: false, message: "Error in sending the otp for login", error })
      }
      else {
        console.log("login otp is the ", otp);
        loginGloOTP = otp
        loginUser = existingUser;
        sendlogOTPStatus = true
      }
      return res.status(200).json({ success: true, message: 'otp sent successfully for login' })
    })


  } catch (error) {
    return res.status(500).json({ message: "Error occured in login", error: error })
  }
}


// Route - 3 -> for verification of the otp for signup  after sending on the mail 
const signupOTPVerify = async (req, res) => {
  try {
    const { userOTP } = req.body
    if (sendOtpStatus) {
      if (userOTP === globalotp) {
        try {
          const newUser = await Users.create({ Email: signupMail, username: username, dob: dateofbirth })
          sendOtpStatus = false;
          signupMail = '';
          globalotp = '';
          username = '';
          dateofbirth = ''
          const token = jwt.sign({ email: newUser.Email, id: newUser._id }, process.env.JWT_SECRET)
          return res.status(201).send({ success: true, message: "User successfully registered.", token: token });
        } catch (error) {

          sendOtpStatus = false;
          signupMail = '';
          globalotp = '';
          return res.status(400).json({ message: "not saved in database", error })
        }
      }
      else {
        return res.send({ success: false })
      }
    }
    else {
      return res.status(400).send("matching otp not found")
    }
  } catch (error) {
    return res.status(500).json({ message: 'error occured in verifying signup otp ', error: error })
  }
}

const loginOTPVerify = async (req, res) => {

  try {
    const { userOTP } = req.body;

    if (sendlogOTPStatus) {
      if (userOTP === loginGloOTP) {
        sendlogOTPStatus = false;
        const token = jwt.sign({ email: loginUser.Email, id: loginUser._id }, process.env.JWT_SECRET)
        res.status(200).json({ success: true, message: "Login OTP Successfully verified ", token: token })
      }
      else {
        res.send({ success: false })
      }
    }
    else {
      res.send({ success: false })
    }
  }
  catch (error) {
    return res.status(500).json({ success: false, message: "error in verifying the login otp", error })
  }
}

const getUser = async (req, res) => {
  try {

    const userid = req.user.id
    const user = await Users.findById(userid);
    return res.status(200).send({ success: true, message: "User Found", data: user });
  }

  catch (error) {
    console.log("It is the error of this code", error);
    return res.status(500).send({ success: false, message: "An error occurred while fetching user details", error });
  }
};



const deleteUser = async(req,res) => {
   try{

    const userId = req.params.id;
      const result = await Users.findByIdAndDelete({_id:userId})

      if(result){
        res.status(200).json({message:"Successfully deleted account ",success:true})
      }
      else{
        res.status(404).json({message:"User not found",success:false})
      }

   }
   catch(error){
    return res.status(500).json({success:false, message:"Server error in delete a account ",error})
   }
}


module.exports = { signup, signupOTPVerify, login, loginOTPVerify, getUser ,deleteUser}