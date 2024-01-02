import React, { useState } from 'react'
import './Header.css'
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/400.css";
import Bus from '../../Assets/Images/bus (1).png'

function Header() {
    const [open, setOpen] = useState()

    const handleSearchClick = () => {
        setOpen(!open);
    };


    return (
        <>
            <section className='hero-main'>
                <div className='header-main'>
                    <div className='header-flex'>
                        <div className='header-search'>
                            <input type="text" placeholder='From...' />
                            <input type="text" placeholder='To...' />
                            <input type="datetime-local" name="" id="" />
                            <button onClick={handleSearchClick}>Search</button>
                        </div>

                        <div className='bus-details'>
                        <div className='card-heading'>
                                        <p>Bus Details</p>
                                    </div>
                            <div className='bus-cards'>
                                <div className='bus-card'>
                                    <div className='bus-card-header'>
                                        <div className='bus-logo'>
                                            <img src={Bus} alt="" />
                                        </div>
                                        <div className='bus-name'>
                                            <p>KSRTC Fast Passenger</p>
                                        </div>
                                    </div>

                                    <div className='bus-place'>
                                        <p>Ernakulam To Trissur</p>
                                    </div>

                                    <div className='bus-status'>
                                        <div className='bus-status-elements'></div>
                                        <div className='bus-status-line'></div>
                                        <div className='bus-status-elements'></div>
                                        <div className='bus-status-line'></div>
                                        <div className='bus-status-elements'></div>
                                        <div className='bus-status-line'></div>
                                        <div className='bus-status-elements'></div>
                                    </div>

                                </div>

                                <div className='bus-card'>
                                    <div className='bus-card-header'>
                                        <div className='bus-logo'>
                                            <img src={Bus} alt="" />
                                        </div>
                                        <div className='bus-name'>
                                            <p>KSRTC Fast Passenger</p>
                                        </div>
                                    </div>

                                    <div className='bus-place'>
                                        <p>Ernakulam To Trissur</p>
                                    </div>

                                    <div className='bus-status'>
                                        <div className='bus-status-elements'></div>
                                        <div className='bus-status-line'></div>
                                        <div className='bus-status-elements'></div>
                                        <div className='bus-status-line'></div>
                                        <div className='bus-status-elements'></div>
                                        <div className='bus-status-line'></div>
                                        <div className='bus-status-elements'></div>
                                    </div>

                                </div>

                              


                               
                            </div>

                        </div>
                    </div>

                    <div className='bus-map'>
                        <div className='bus-route'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31304.252896082704!2d75.77927679999999!3d11.259084799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704167395927!5m2!1sen!2sin" width="1000" height="450" style={{border:"none"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    {
                        open ?
                            <div className='header-search-elements'>
                                <div className='header-search-element'>
                                    <div className='search-items'>Ernakulam To Trissur <span>02/01/2024</span></div>
                                    <div className='search-items'>Ernakulam To Trissur <span>02/01/2024</span></div>
                                    <div className='search-items'>Ernakulam To Trissur <span>02/01/2024</span></div>
                                    <div className='search-items'>Ernakulam To Trissur <span>02/01/2024</span></div>
                                    <div className='search-items'>Ernakulam To Trissur <span>02/01/2024</span></div>
                                    <div className='search-items'>Ernakulam To Trissur <span>02/01/2024</span></div>
                                    <div className='search-items'>Ernakulam To Trissur <span>02/01/2024</span></div>
                                    <div className='search-items'>Ernakulam To Trissur <span>02/01/2024</span></div>
                                </div>
                            </div>
                            :
                            ""
                    }

                </div>
            </section>
        </>
    )
}

export default Header