import React from "react"
import "./AddressVerification.scss"

const AddressVerification = () => {
    return (
        <div className="adv__container">
            <div className="adv__con">
                <div className="adv__box">
                    <div className="adv__box__info">
                        <div className="adv__head">
                            <h1>Address Verification</h1>
                            <p>Please verify your address by uploading a recent utility bill</p>
                            <p>
                                You can update your address <span>here</span>
                            </p>
                        </div>
                        <div className="adv__info">
                            <p>
                                <span>City</span>
                                <p>benin City</p>
                            </p>

                            <p>
                                <span>State</span>
                                <p>Edo</p>
                            </p>

                            <p>
                                <span>Zip Code</span>
                                <p></p>
                            </p>

                            <p>
                                <span>Country</span>
                                <p>Nigeria</p>
                            </p>

                            <p>
                                <span>Street Address</span>
                                <p>Asemota Street Off New Lagos Road</p>
                            </p>
                        </div>

                        <div className="adv__inputs">
                            <div className="adv__input__div">
                                <div className="adv__input__button">
                                    <p>select bill</p>
                                </div>
                                <input
                                    type="text"
                                    placeholder=""
                                    value=""
                                    onChange=""
                                    className="adv__input"
                                />
                            </div>

                            <div className="adv__button">
                                <p>Submit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressVerification
