import classes from "./index.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { HashLink } from "react-router-hash-link";
import { Typography, Grid, Container, Box } from "@mui/material";
import logoImg from "../../assets/logo.svg";
import iconCall from "../../assets/call.svg";
import iconCar from "../../assets/car.svg";
// import iconWrite from "../../assets/write.svg";
import iconStar from "../../assets/star.svg";
import iconCheck from "../../assets/checkbox.svg";
import iconWhatsapp from "../../assets/whatsapp.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "./Navbar";
import Logo from "../../assets/images/Logo.png"
import mailIcon from "../../assets/images/mailIcon.png"
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./swiperCustom.css";
import { useMediaQuery } from 'react-responsive';
import { BASEURL } from "../herper";
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function HomePage() {
    const [apiData, setData] = useState({ "reviews": [], "vechiles": [], "gallery": [] });

    const slides2 = useMediaQuery({ query: '(min-width:910px) and (max-width:1370px)' });
    const slides1 = useMediaQuery({ query: '(max-width:910px)' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Update the API URL to localhost:3004
                const response = await axios.get(`${BASEURL}/data`);
                setData(response.data);
                console.log(response.data);
                window.APIDATALOADED = true;
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    return (
        <>
            
            {/* <section className={classes.header}>
                <div className={classes.headerText}>
                    <div>Plan your trip now</div>
                    <div>Driving dreams, creating memories. Pankaj Tour & Travels - Your Key to Unforgettable Journeys."</div>
                    <Typography style={{marginBottom:"20px"}}>
                    <span style={{color:"#ff4d30", fontWeight:"700"}}>   Pankaj Tour & Travels </span> extends its car rental services across various cities, offering seamless transportation solutions for local city tours and beyond. We cater to diverse clients, including corporate entities like Frog Call Sat Ltd., Quadrant Epp Surlon India Ltd. and many more. Specializing in airport transfers, local/national tours, corporate events, and celebrations, our fleet includes small to luxury cars, Tempo Travelers, and buses. Choose from 4 Hr/40 km or 8 Hr/80 km packages, with customizable options. We prioritize safety, providing well-maintained vehicles and experienced chauffeurs familiar with regional routes. Your one-stop solution for reliable and convenient car rentals in Ghaziabad.
                    </Typography>
                    <div className={classes.headerBtnsWrap}>
                        <a href={`tel:${apiData.call}`} style={{ textDecoration: "inherit", color: "inherit" }}><div className={classes.headerBtn}><img src={iconCall} alt="call" /><span>CALL US</span></div></a>
                        <HashLink style={{ textDecoration: 'inherit', color: 'inherit' }} to="#vechiles"><div className={classes.headerBtn + " " + classes.btnBlack}><img src={iconCar} alt="location" /><span>AVAILABLE CARS</span></div></HashLink>
                    </div>
                </div>
                <div className={classes.headerLogo}>
                    <Typography style={{fontWeight:"800", fontSize:"50px"}}>
                    </Typography>
                </div>
            </section> */}
            <Navbar/>
            <div style={{marginTop:"160px"}}>
            <Grid container sx={{marginTop:"60px"}}>
                <Grid item sm={12}>
                    <Typography style={{textAlign:'center', fontWeight:'600', marginBottom:"20px", fontSize:"30px"}}> <span style={{color:'#ff4d30'}}>Plan</span> your trip now</Typography>
                    <Container>
                    <Typography variant='h3' style={{textAlign:'center', fontWeight:'600', marginBottom:"20px"}}> Driving dreams, creating memories. <br/> <span style={{color:"#ff4d30"}}>Pankaj Tour & Travels</span> - Your Key to Unforgettable Journeys."</Typography>
                    
                    <Typography style={{marginBottom:"20px"}}>Pankaj Tour & Travels extends its car rental services across various cities, offering seamless transportation solutions for local city tours and beyond. We cater to diverse clients, including corporate entities like Frog Call Sat Ltd., Quadrant Epp Surlon India Ltd. and many more. Specializing in airport transfers, local/national tours, corporate events, and celebrations, our fleet includes small to luxury cars, Tempo Travelers, and buses. Choose from 4 Hr/40 km or 8 Hr/80 km packages, with customizable options. We prioritize safety, providing well-maintained vehicles and experienced chauffeurs familiar with regional routes. Your one-stop solution for reliable and convenient car rentals in Ghaziabad.</Typography>
                    </Container>
                    <div className={classes.headerBtnsWrap} style={{marginLeft:"40vw"}}>
                        <a href={`tel:${apiData.call}`} style={{ textDecoration: "inherit", color: "inherit" }}><div className={classes.headerBtn}><img src={iconCall} alt="call" /><span>CALL US</span></div></a>
                        <HashLink style={{ textDecoration: 'inherit', color: 'inherit' }} to="#vechiles"><div className={classes.headerBtn + " " + classes.btnBlack}><img src={iconCar} alt="location" /><span>AVAILABLE CARS</span></div></HashLink>
                    </div>
                </Grid>
            </Grid>
                


            <section className={classes.bookHook}>
                <div className={classes.carHead}>
                    <div>Why choose us</div>
                    <div>Offered<span style={{ color: "#ff4d30" }}> Services</span></div>
                </div>
                <div className={classes.servicesOffered}>
                    <div className={classes.serviceOff}>
                        <img src={iconCheck} alt="check" /><span>City Tours</span>
                    </div>
                    <div className={classes.serviceOff}>
                        <img src={iconCheck} alt="check" /><span>Corporate car rental</span>
                    </div>
                    <div className={classes.serviceOff}>
                        <img src={iconCheck} alt="check" /><span>Airport/Railway pick and drop</span>
                    </div>
                    <div className={classes.serviceOff}>
                        <img src={iconCheck} alt="check" /><span>Customized Packages</span>
                    </div>
                </div>
            </section>
            <section className={classes.bookHook} style={{marginTop:"-40px"}}>
                <div className={classes.servicesOffered}>
                    <div className={classes.serviceOff}>
                        <img src={iconCheck} alt="check" /><span>Local & National Travel</span>
                    </div>
                    <div className={classes.serviceOff}>
                        <img src={iconCheck} alt="check" /><span>Safety Measures</span>
                    </div>

                    <div className={classes.serviceOff}>
                        <img src={iconCheck} alt="check" /><span>Weddings & Auspicious Occasions</span>
                    </div>
                    <div className={classes.serviceOff}>
                        <img src={iconCheck} alt="check" /><span>Individual & Family outings</span>
                    </div>
                </div>
            </section>
            <Grid container>
                <Grid item sm={12}>

                </Grid>
            </Grid>

            <section className={classes.carSection} id="vechiles">
                <div className={classes.carHead}>
                    <div>Vechile Models</div>
                    <div>Our <span style={{ color: "#ff4d30" }}>Rental Fleet</span></div>
                </div>
                <div className={classes.carWrap}>
                    {
                        apiData.vechiles.map(e => {
                            return <div className={classes.carCard}>
                                <div className={classes.cardCardImg}><img src={e.image} alt="car" /></div>
                                <div className={classes.carCardText}>
                                    <div className={classes.carCardTitle}>{e.name}</div>
                                    <div className={classes.cardCardInfo}>
                                        <div className={classes.carCardPrice}>{e.costPerDay}</div>
                                        <div>
                                            <div>KM/L Mileage</div>
                                            {/* <div>{e.limit} km limit</div> */}
                                        </div>
                                    </div>
                                    <div className={classes.aboutCar}>
                                        {e.about}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>

            <section className={classes.bookHook}>
                <div className={classes.carHead}>
                    <div>What people say about us</div>
                    <div><span style={{ color: "#ff4d30" }}>Client</span> Testimonials</div>
                </div>
                <div className={classes.reviewCardWrap}>
                    {
                        apiData.reviews.map(e => {
                            return <div className={classes.reviewCard}>
                                <div>
                                <div className={classes.rcText}>{e.name}</div>

                                    <div className={classes.rating}>
                                        <img src={iconStar} alt="star" className={classes.starIcon} />
                                        <img src={iconStar} alt="star" className={classes.starIcon} />
                                        <img src={iconStar} alt="star" className={classes.starIcon} />
                                        <img src={iconStar} alt="star" className={classes.starIcon} />
                                        <img src={iconStar} alt="star" className={classes.starIcon} />
                                    </div>
                                    <div className={classes.name}>{e.content}</div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>

            <section className={classes.location}>
                <div className={classes.sectionHead}>Our services are available <span style={{ color: "#ff4d30" }}>24x7</span></div>
                {
                    apiData.location ?
                        <iframe
                            title="maps"
                            width="800"
                            height="450"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowfullscreen
                            referrerpolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAcAIpEFWAMwPUMSv8xgQvj2l8ObqKIcFY&q=${apiData.location}`}>
                        </iframe>
                        : null
                }
            </section>

            <section className={classes.bookHook}>
                <div className={classes.carHead}>
                    <div>Look into our services</div>
                    <div>Our <span style={{ color: "#ff4d30" }}>Gallery</span></div>
                </div>
                <Swiper
                    className={classes.swiper}
                    id="swiper"
                    slidesPerView={slides1 ? 1 : (slides2 ? 2 : 3)}
                    spaceBetween={0}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true
                    }}
                    speed={500}
                    loop
                >
                        <SwiperSlide  style={{ listStyle: "none" }}>
                            <div className={classes.galleryCard}>
                                <img src={'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFqYXN0aGFufGVufDB8fDB8fHww'} alt="gallery" />
                            </div>
                            <div className={classes.carCardText}>
                                    <div style={{marginLeft:'55px'}} className={classes.carCardTitle}>Inter-State Transfer</div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide  style={{ listStyle: "none" }}>
                            <div className={classes.galleryCard}>
                                <img src={'https://static.toiimg.com/photo/92360678.cms'} alt="gallery" />
                            </div>
                            <div className={classes.carCardText}>
                                    <div style={{marginLeft:'55px'}} className={classes.carCardTitle}>Holiday Package</div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide  style={{ listStyle: "none" }}>
                            <div className={classes.galleryCard}>
                                <img src={'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202210/delhiairport-mastyatri-01-sixteen_nine.jpg?size=1200:675'} alt="gallery" />
                            </div>
                            <div className={classes.carCardText}>
                                    <div style={{marginLeft:'55px'}} className={classes.carCardTitle}>Airports Transfer</div>
                                </div>
                        </SwiperSlide>
                        
                        
                </Swiper>
            </section>

            <section className={classes.bookHook + " " + classes.footer}>
                <div className={classes.carHead}>
                    <div>Book your ride now</div>
                    <div><span style={{ color: "#ff4d30" }}>Quick & easy</span> car rental</div>
                </div>
                <div className={classes.headerBtnsWrap + " " + classes.bottomBtns}>
                    <a href={`tel:${apiData.call}`} style={{ textDecoration: "inherit", color: "inherit" }}><div className={classes.headerBtn}><img src={iconCall} alt="call" /><span>CALL US</span></div></a>
                    <a href="Pankaj.tourtravel8@gmail.com" style={{ textDecoration: "inherit", color: "inherit" }}><div className={classes.headerBtn + " " + classes.whatsappBtn}><img style={{height:'20px', width:'auto'}} src={mailIcon} alt="call" /><span>SEND EMAIL</span></div></a>
                </div>
                <div className={classes.headerBtnsWrap + " " + classes.bottomBtns}>
                    
                </div>
                <div style={{marginTop:"40px", fontSize:'20px'}}>© Pankaj Tour and Travels</div>
            </section>
            </div>
        </>
    );
}