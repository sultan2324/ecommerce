import React from 'react'
import image from "../images/card_img.png"
import "./Payment.css"

const Payment = () => {

    return (
        <div className='Payment'>
            <div class="payment_container">

                <form action="">
                    <div class="row">
                        <div class="col">
                            <h3 class="title">billing address</h3>

                            <div class="inputBox">
                                <span>full name :</span>
                                <input type="text" placeholder="john deo"></input>
                            </div>
                            <div class="inputBox">
                                <span>Mobile :</span>
                                <input type="email" placeholder="0123456789"></input>
                            </div>
                            <div class="inputBox">
                                <span>address :</span>
                                <input type="text" placeholder="House No - street - locality"></input>
                            </div>
                            <div class="inputBox">
                                <span>city :</span>
                                <input type="text" placeholder="Hyderabad"></input>
                            </div>

                            <div class="flex">
                                <div class="inputBox">
                                    <span>state :</span>
                                    <input type="text" placeholder="Telangana"></input>
                                </div>
                                <div class="inputBox">
                                    <span>pin code :</span>
                                    <input type="text" placeholder="123 456"></input>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <h3 class="title">payment</h3>
                            <div class="inputBox">
                                <span>cards accepted :</span>
                                <img src={image} alt="" />
                            </div>
                            <div class="inputBox">
                                <span>name on card :</span>
                                <input type="text" placeholder="mr. john deo"></input>
                            </div>
                            <div class="inputBox">
                                <span>credit card number :</span>
                                <input type="number" placeholder="1111-2222-3333-4444"></input>
                            </div>
                            <div class="inputBox">
                                <span>exp month :</span>
                                <input type="text" placeholder="january"></input>
                            </div>

                            <div class="flex">
                                <div class="inputBox">
                                    <span>exp year :</span>
                                    <input type="number" placeholder="2022"></input>
                                </div>
                                <div class="inputBox">
                                    <span>CVV :</span>
                                    <input type="text" placeholder="1234"></input>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='payment__button'>
                    <input type="" value="proceed to checkout" class="submit-btn"></input>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Payment