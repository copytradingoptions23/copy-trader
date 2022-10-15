import React from "react"
import "./IdentityVerification.scss"

const IdentityVerification = () => {
    return (
        <div className="idv__container">
            <div className="idv__con">
                <div className="idv__box">
                    <div className="idv__head">
                        <h1>Verify Your Identity</h1>
                        <p>
                            Please verify your identity by uploading a valid government issued
                            identification card.
                        </p>
                    </div>

                    <div className="idv__inputs">
                        <p>
                            You may experience difficulties when uploading from an ios device. Make
                            sure your browser has camera access in your ios settings.
                        </p>
                        <div className="idv__input__div">
                            <div className="idv__input__button">
                                <p>select front</p>
                            </div>
                            <input
                                type="text"
                                placeholder=""
                                value=""
                                onChange=""
                                className="idv__input"
                            />
                        </div>
                        <div className="idv__input__div">
                            <div className="idv__input__button">
                                <p>select back</p>
                            </div>
                            <input
                                type="text"
                                placeholder=""
                                value=""
                                onChange=""
                                className="idv__input"
                            />
                        </div>
                        <div className="idv__button">
                            <p>Submit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdentityVerification
