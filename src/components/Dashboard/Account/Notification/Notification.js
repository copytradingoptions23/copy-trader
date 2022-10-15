import React from "react"
import "./Notification.scss"

const Notification = () => {
    return (
        <div className="notification__container">
            <div className="notification__con">
                <div className="notification__box">
                    <div className="notification__head">
                        <p className="notification__p1">
                            You may disable NOTIFICATIONS PERMISSION from your browser settings,
                            your browser settings will override the website settings.
                        </p>

                        <p className="notification__p2">
                            Notifications Permission (Browser): Denied
                        </p>
                    </div>

                    <div className="notification__inputs">
                        <div className="notification__pem">
                            <p className="notification__smallp">
                                Notifications Permission (Website)
                            </p>

                            <div className="selector__div">
                                <select onChange="" value="" className="selector">
                                    <option value="denied" selected>
                                        Denied
                                    </option>
                                    <option value="granted">Granted</option>
                                </select>
                            </div>
                        </div>

                        <div className="notification__button">
                            <p>Update</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification
