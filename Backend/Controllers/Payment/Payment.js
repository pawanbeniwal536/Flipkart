const btoa = require('btoa')
const dotenv = require('dotenv')

dotenv.config();

const getToken = async () => {
    try {
        const auth = btoa(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`);

        const response = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(`Failed to retrieve access token: ${data.error_description}`);
        }

        return data.access_token;
    }
    catch (error) {
        console.log('Error in fetching the access token');
    }

}


const MakePayment = async( req,res ) => {
    try {
        let { amount } = req.body;
        console.log('the amount of the user is the ',amount);
        const accessToken = await getToken()
        const response =await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                "purchase_units": [
                    {
                        "amount": {
                            "currency_code": "USD",
                            "value": amount
                        },
                        "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b"
                    }
                ],
                "intent": "CAPTURE",
                "payment_source": {
                    "paypal": {
                        "experience_context": {
                            "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
                            "payment_method_selected": "PAYPAL",
                            "brand_name": "EXAMPLE INC",
                            "locale": "en-US",
                            "landing_page": "LOGIN",
                            "shipping_preference": "GET_FROM_FILE",
                            "user_action": "PAY_NOW",
                            // if we do use webhooks than we will use return url and cancel url
                        //    "return_url": "http://localhost:3000/payment-success",
                        //    "cancel_url": "http://localhost:3000/payment-cancelled"
                        }
                    }
                }
            })
        })
    
        const data = await response.json();
        res.status(200).json(data)
    
        }
        catch (error) {
            console.log("Server error is ",error)
        }

}

module.exports = MakePayment