import React from 'react';
import './Home.css';
import Product from './Product';

function Home () {
    return (
        <div className = "home">
            <div className = "home__container">
                <img 
                    className = "home__containerImage"
                    src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt = "amazon-backgroundImage"
                />
                <div className = "home__row">
                    <Product
                        id = "00001"
                        title = "Samsung Galaxy Watch Active 2 (Bluetooth, 44 mm) - Black, Aluminium Dial, Silicon Straps"
                        price = {274.62}
                        image = "https://images-na.ssl-images-amazon.com/images/I/51G8gR4wGFL._AC_SY550_.jpg"
                        rating = {5}
                    />
                    <Product
                        id = "00002"
                        title = "OnePlus 9 5G (Winter Mist, 12GB RAM, 256GB Storage)"
                        price = {752.98}
                        image = "https://m.media-amazon.com/images/I/61MJilnI5pL._AC_UY218_.jpg"
                        rating = {4}
                    />
                    <Product
                        id = "00003"
                        title = "OnePlus Bullets Wireless Z Bass Edition (Reverb Red)"
                        price = {27.61}
                        image = "https://m.media-amazon.com/images/I/31I01zObT9L.jpg"
                        rating = {3}
                    />
                </div>
                <div className = "home__row">
                    <Product
                        id = "00004"
                        title = "Philips Series 3000 7-in-1 Multi Grooming Kit for Beard & Hair"
                        price = {24.80}
                        image = "https://images-eu.ssl-images-amazon.com/images/I/61B0s+sqeUL._AC_UL160_SR160,160_.jpg"
                        rating = {4}
                    />
                    <Product
                        id = "00005"
                        title = "Dell Inspiron 7380 13.3-inch FHD Thin & Light Laptop"
                        price = {828.84}
                        image = "https://m.media-amazon.com/images/I/81ipEOgHjTL._AC_SX180_SY120_QL70_.jpg"
                        rating = {5}
                    />
                    <Product
                        id = "00006"
                        title = "Blaupunkt BH11 Bluetooth Over-The-Ear Wireless Headphone with Bass"
                        price = {31.60}
                        image = "https://m.media-amazon.com/images/I/81cz9Qim4yL._QL65_AC_UL640_.jpg"
                        rating = {4}
                    />
                    <Product
                        id = "00007"
                        title = "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs"
                        price = {78.84}
                        image = "https://m.media-amazon.com/images/I/713RJa+LENL._AC_UL320_.jpg"
                        rating = {3}
                    />
                    <Product
                        id = "00008"
                        title = "Unisex-Adult Fleece Hooded Hoodie"
                        price = {11.05}
                        image = "https://m.media-amazon.com/images/I/71fNC29PcqL._AC_UL320_.jpg"
                        rating = {3}
                    />
                </div>
                <div className = "home__row">
                    <Product
                        id = "00009"
                        title = "AmazonBasics 139cm (55 inches) Fire TV Edition 4K Ultra HD Smart LED TV AB55U20PS (Black)"
                        price = {552.26}
                        image = "https://m.media-amazon.com/images/I/61QLVYZGyFS._AC_UL320_.jpg"
                        rating = {5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;