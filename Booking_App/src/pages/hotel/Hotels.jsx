import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer'
import './hotel.css';

const Hotels = () => {
    const photos = [
        {
            src: "/images/aptmadrid.png"
        },
        {
            src: "/images/Austin.png"
        },
        {
            src: "/images/berlin.png"
        },
        {
            src: "/images/Four.png"
        },
        {
            src: "/images/hilton.png"
        },
        {
            src: "/images/prauge.png"
        }
    ]
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <div className="hotelTitle">Grand Hotel</div>
                    <div className="hotelAddress">
                        <MdLocationOn />
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className='hotelDistance'>
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photos) => (
                            <div className="hotelImgWrapper">
                                <img src={photos.src} alt="hotelImage" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">Stay in the heart of City</h1>
                            <p className="hotelDesc">
                                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                Street Apartments has accommodations with air conditioning and
                                free WiFi. The units come with hardwood floors and feature a
                                fully equipped kitchenette with a microwave, a flat-screen TV,
                                and a private bathroom with shower and a hairdryer. A fridge is
                                also offered, as well as an electric tea pot and a coffee
                                machine. Popular points of interest near the apartment include
                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                airport is John Paul II International Kraków–Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid
                                airport shuttle service.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotels