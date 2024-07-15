import Header from "./components/Header";
import Footer from "./components/Footer";
import IForm from "./components/IForm";
import { useState, useEffect } from "react";

const introduction = {
  owner: "Jazã & Sakeenah Residential Estate 1",
  legend: "Landed Estate that rewards every sacrifice with safety, tranquility and prosperity.",
  media: {
    src: "/assets/grid-video-1.mp4",
    type: "image"
  },
  details: [
    {
      key: "Location",
      value: "Ilara, Epe, Lagos State, Nigeria.",
    },
    {
      key: "Land size",
      value: "600 Sqm per plot.",
    },
    {
      key: "Price",
      value: "₦ 10,000 per sqm.",
    },
    {
      key: "Title",
      value: "Private C of O",
    },
  ],
}

const overview = {
  intro_text: "You're welcome to Jazã and Sakeenah Phases, Landed Estate that rewards every sacrifice with safety, tranquility and prosperity.",
  details: [
    {
      title: "Features:",
      description: "Dry land, with perfectable title documents, standard layout and road networks accessible to each plot. They're located within an existing neighbourhood development and it comes with Instant Physical Allocation.",
    },
    {
      title: "Uses:",
      description: "Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture with zero negative environmental impact.",
    },
    {
      title: "Facilities:",
      description: "Perfectable Title Document, Standard Layout, commercial &amp; recreational area, playing ground, gatehouse, road network and complete estate fencing.",
    },
  ],
  list_details: [
    {
      title: "The purchase offers are basically 3.:",
      step: [
        {
          main_step: "The N2m per slot 1-Bedroom Flat co-own which is 40% one-time resell profit in 12 months OR 25% annually in Rental income. Maximum slots per person is 5 slots.",
        },
        {
          main_step: "The N5m per slot 1-Bedroom Duplex Co-own which is 50% one-time resell profit in 12 months OR 35% annually in Rental income. Maximum slots per person is 5 slots.",
        },
        {
          main_step: "The Sole-ownership of any of these apartments as exterior finished delivery together with all the facilities at no extra fee:",
          sub_step: [
            "1 bedroom flat: N17m",
            "1 bedroom duplex: N26m",
            "2 bedroom flat: N28.5m",
            "2 bedroom duplex: N36m",
            "3 bedroom flat: N51.5m",
            "3 bedroom duplex: N57m",
          ],
        },
      ]
        
        
        
      
    },
  ],
}

const features = {
  media: "/assets/jaza-sakeenah.jpg",
  main: [
    "Perfectable Title Document",
    "Standard Layout",
    "Commercial & recreational area.",
    "Playing ground",
    "Road network",
    "Complete estate fencing",
  ],
  sidenote: "Be a part of this Eco-footprint project that is promoting happiness and longevity through communal and eco-luxury living. Perfect for live-in, home-away-from-home relaxation, shortlets, annual rentals, vacation spots for individuals, families, clubs & corporates.",
}

const apartments = [
  {
    title: "A. 1 Bedroom Luxury Flat",
    description: "A finely balanced and spacious home , this apartment features a living room, guest wc, a balcony, an open kitchen and a bedroom.",
    subtitle: "Co-own for Income at N2m per slot (Max. of 5 slots) OR Fully-own the apartment.",
    media: "/assets/jaza-sakeenah.jpg",
    features: [
      "Standard lots: ¼, ½, 1 plot & multiples",
      "Standard Layout",
      "Commercial & recreational area.",
      "Perfectable Title Document",
      "Bit lots: Less, equal or more than standard lots.",
      "Playing ground",
      "Gatehouse",
      "Road network",
      "Complete estate fencing",
    ],
  }
]

const progresses = [
  {
    title: "Progress update one",
    date: "06/02/24",
    content: "Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity. They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase. Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture.",
    media: [
      {
        src: "/assets/grid-video-1.mp4",
        caption: "Caption 1",
        type: "video",
      },
      {
        src: "/assets/jaza-sakeenah.jpg",
        caption: "",
        type: "image",
      },
      {
        src: "/assets/jaza-sakeenah.jpg",
        caption: "",
        type: "image",
      },
      {
        src: "/assets/grid-video-1.mp4",
        caption: "Caption 1",
        type: "video",
      },
      {
        src: "/assets/jaza-sakeenah.jpg",
        caption: "",
        type: "image",
      },
    ]
  },
  {
    title: "Progress update two",
    date: "06/02/24",
    content: "Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity. They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase. Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture.",
    media: [
      {
        src: "/assets/grid-video-1.mp4",
        caption: "Caption 1",
        type: "video",
      },
      {
        src: "/assets/jaza-sakeenah.jpg",
        caption: "",
        type: "image",
      },
      {
        src: "/assets/jaza-sakeenah.jpg",
        caption: "",
        type: "image",
      },
      {
        src: "/assets/grid-video-1.mp4",
        caption: "Caption 1",
        type: "video",
      },
      {
        src: "/assets/jaza-sakeenah.jpg",
        caption: "",
        type: "image",
      },
    ]
  },
]

const faqs = [
  {
    question: "What's Jazã & Sakeenah Phase(s)",
    answer: "Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity. They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase. Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture."
  },
  {
    question: "What's Jazã & Sakeenah Phase(s)",
    answer: "Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity. They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase. Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture."
  },
  {
    question: "What's Jazã & Sakeenah Phase(s)",
    answer: "Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity. They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase. Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture."
  },
  {
    question: "What's Jazã & Sakeenah Phase(s)",
    answer: "Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity. They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase. Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture."
  },
  {
    question: "What's Jazã & Sakeenah Phase(s)",
    answer: "Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity. They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase. Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture."
  },
  {
    question: "What's Jazã & Sakeenah Phase(s)",
    answer: "Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity. They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase. Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture."
  },
  {
    question: "What's Jazã & Sakeenah Phase(s)",
    answer: "Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity. They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase. Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture."
  },
  {
    question: "What's Jazã & Sakeenah Phase(s)",
    answer: "Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity. They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase. Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture."
  },
  {
    question: "What's Jazã & Sakeenah Phase(s)",
    answer: "Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity. They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase. Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture."
  },
  {
    question: "What's Jazã & Sakeenah Phase(s)",
    answer: "Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity. They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase. Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture."
  },
]

const locations = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.2046207271198!2d3.5890560862510816!3d6.4697318889131115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf9fab4d5e46d%3A0x2325ade21d0eb15f!2s5%20Ganiyu%20Dawodu%20St%2C%20Eti-Osa%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1714141826893!5m2!1sen!2sng",
]

export default function App() {
  const [interestForm, setInterestForm] = useState(false)
  const [faqIndex, setFaqIndex] = useState(0)
  const [activeFaq, setActiveFaq] = useState(false)
  const [startTime] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState({ days: '', hours: '', minutes: '', seconds: '' });

  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch('https://florahomes-backend.herokuapp.com/api/properties/64b3e0bb150457780302efdb');
        
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        console.log('loading details');
      }
    };

    fetchProperty();
  }, []);

  const toggleActiveFaq = (i) => {
    setActiveFaq(!activeFaq)
    setFaqIndex(i)
  }
  
  const duration = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

  const calculateTimeLeft = () => {
    const difference = duration - (new Date() - startTime);
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header/>

      <section className="bg-[#105C04] pt-24 pb-4 px-4 lg:px-48">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <div >
                <h2 className="text-center text-[1.5rem] lg:mt-0 lg:text-[24px] font-[600] mb-4 lg:mb-8">Welcome To </h2>
                <h1 className="text-center text-[1.8rem] lg:text-[3.3rem] leading-[2.3rem] lg:leading-[4rem] font-medium mb-4 lg:mb-12">
                  {property?.name}
                </h1>
              </div>
              <div className="text-center">
                <p className="text-[1rem]  lg:text-[1.5rem] leading-[1.5rem]  lg:leading-[2.5rem] m-0 mb-6">
                {property?.caption}
                </p>
              </div>
              <br/><br/>
              <div className="border-[#ffc20b] border-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] py-2 px-2">
                {
                  property?.coverMediaType == "image" 
                  ?
                  <img src={property?.photo} alt="jaza homes" width={"100%"} height={"auto"}/>
                  :
                  <video width="100%" autoPlay controls>
                    <source src={property?.coverPhoto} type="video/mp4"/>
                  </video>
                }
              </div>
              <br/><br/>
              <table>
                <tbody>
                  {
                    introduction.details.map((detail, index) => (
                    <tr key={index}>
                      <td className="font-bold">{detail.key}:</td>
                      <td>{detail.value}</td>
                    </tr>
                    ))
                  }
                  
                </tbody>
              </table>
              {/* <mark>
                <strong> IMPORTANT NOTICE:</strong> After filling the interest form, <u>DO NOT MAKE ANY PAYMENT </u> until you&apos;ve been contacted by a Jazã &amp; Sakeenah Manager. This is because this offer might close at any time from now. Thank you for your understanding.
              </mark> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF0DC] py-24 px-4 lg:px-48 relative overflow-hidden">
        <img src="/assets/layer7.svg" alt="layer" className="absolute top-[300px] left-0"/>
        <div>
          <div className="text-[1rem]">
            <p dangerouslySetInnerHTML={{ __html: property?.content }}></p>
            {
              overview.details.map((content, index) => (
                <div key={index}>
                  <hr className="bg-[#105C04] w-[100%] h-2 my-4"/>
                  <h4 className="text-[1.25rem] font-medium">{content.title}&nbsp;</h4>
                  <p>{content.description}</p>
                </div>
              ))
            }
          </div>
        </div>

        <br/>

        <div>
          <ul className="border-solid border-4 border-[#ffc20b] px-2 py-2">
            <li><b>Before the offer closes...</b></li>
            <li><b>Own one apartment for yourself OR</b></li>
            <li><b>Co-own in slot(s) to earn Income.</b></li>
          </ul>
        </div>
        
        <br/>

        <div>
          {overview.list_details.map((list_detail, index) => (
            <div key={index}>
              <h4 className="text-[1.25rem] font-medium">{list_detail.title}</h4>
              <ul className="flex flex-col gap-y-4">
                {
                  list_detail.step.map((list, index) => (
                    <li key={index}>
                      <div className="flex gap-x-2 items-start">
                        <span className="shrink-0 text-[.75rem] flex w-5 h-5 rounded-full items-center justify-center border-[#105C04] border-[1px]">
                          {(index + 1)}
                        </span>
                        {list.main_step}
                      </div>
                      {
                        list.sub_step &&
                        <ul className="ml-8 flex flex-col gap-y-4 py-4">
                          {
                            list.sub_step.map((sub, index) => (

                            <li key={index} className="flex gap-x-4 items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="512"
                                height="512"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                fill="#64A001"
                              >
                                <path d="M16.298 8.288l1.404 1.425-5.793 5.707a2.001 2.001 0 01-2.823-.005l-2.782-2.696 1.393-1.437 2.793 2.707 5.809-5.701zM24 12c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12zm-2 0c0-5.514-4.486-10-10-10S2 6.486 2 12s4.486 10 10 10 10-4.486 10-10z"></path>
                              </svg>
                              <span>{sub}</span>
                              </li>
                            ))
                          }
                        </ul>
                      }
                    </li>
                  ))
                }
              </ul>
              
              <div className="text-center mt-8">
                <div className="text-center mb-4 mt-4 font-semibold text-[#000000] text-[1rem] lg:text-[1.5rem]">
                  <div>
                    <span className="py-1">{timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds</span>
                  </div>
                </div>
                <button className="btn-style-two" onClick={()=>setInterestForm(true)}>
                  <span>Click Now To Start Your Journey</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#105C04] py-24 px-4 lg:px-48">
        <div className="auto-container">
          <div className="row">
            <div className="text-white">
              <img src={property?.coverPhoto} alt="jaza homes" width={"100%"} height={"auto"}/>
              
              <br/>

              <div className="tracking-[6px]">
                <span>FEATURES AND FACILITIES</span>
              </div>

              <br/>

              <ul className="text-[#ffffff] flex flex-col gap-y-4">
                {
                  features.main.map((feature, index) => (
                    <li key={index} className="flex gap-x-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="512"
                        height="512"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        fill="#ffc20b"
                      >
                        <path d="M16.298 8.288l1.404 1.425-5.793 5.707a2.001 2.001 0 01-2.823-.005l-2.782-2.696 1.393-1.437 2.793 2.707 5.809-5.701zM24 12c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12zm-2 0c0-5.514-4.486-10-10-10S2 6.486 2 12s4.486 10 10 10 10-4.486 10-10z"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))
                }
              </ul>

              <br/><br/>

              <p>{features.sidenote}</p>

              <br />

              <p>Own one apartment fully for yourself OR co-own in slot(s) to earn annual rental or one-time 12 months resell income.</p>

              <br/>

              <div className="text-center mt-8">
                <div className="text-center mb-4 mt-4 font-semibold text-[#ffffff] text-[1rem] lg:text-[1.5rem]">
                  <div>
                    <span className="py-1">{timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds</span>
                  </div>
                </div>
                <button className="btn-style-three" onClick={()=>setInterestForm(true)}>
                  <span className="btn-title">Click Now To Start Your Journey</span>
                </button>
              </div>              
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF0DC] py-24">
        {
          property?.info.map((apartment, index) => (
            <div key={index} className="homes-details-container border-b-8 border-[#105C04]">
              <div className="text-center flex flex-col gap-y-4 items-center mb-4 mt-8 px-4 lg:px-48">
                <h1 className="text-[1.5rem] lg:text-[2.5rem] font-medium ">{apartment.infoTitle}</h1>
                <p className="border-solid border-t-4 border-[#ffc20b] max-w-[600px]">{apartment.description}</p>
                <h3 className="text-[1rem] font-semibold">{apartment.subtitle}</h3>
              </div>
              <br/>

              <div className="border-[#ffc20b] border-2 px-2 py-2">
                <img src={apartment.infoImage} alt="jaza homes" width={"100%"} height={"auto"}/>
              </div>

              <div className="flex flex-col lg:flex-row justify-evenly text-[.875rem] py-8 px-4">
                <ul>
                  {
                    apartment.infoFeature.map((feature, index) => (
                      <li key={index} className="border-dashed border-b-[1px] border-[#ffc20b] py-2 flex items-center gap-x-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="512"
                          height="512"
                          data-name="Layer 1"
                          viewBox="0 0 24 24"
                          fill="#64A001"
                        >
                          <path d="M16.298 8.288l1.404 1.425-5.793 5.707a2.001 2.001 0 01-2.823-.005l-2.782-2.696 1.393-1.437 2.793 2.707 5.809-5.701zM24 12c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12zm-2 0c0-5.514-4.486-10-10-10S2 6.486 2 12s4.486 10 10 10 10-4.486 10-10z"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))
                  }
                </ul>
                {/* <div className="hidden lg:block self-end w-[10px] h-[50px] mt-8 bg-[#ffc20b]"></div> */}
                
              </div>
            </div>
          ))
        }
      </section>

      <section>
        <div className='bg-[#64A001] px-4 lg:px-24 py-24'>
          <div className="text-center mb-12">
            <h2 className="text-white font-semibold">STEPS TO OWN YOUR UNIT(S)</h2>
          </div>
          <ul className='flex flex-col gap-y-8 gap-x-8 lg:gap-y-0'>
            <li className='flex gap-x-2 lg:w-[50%] lg:ml-[auto] lg:translate-x-[-2.5rem]'>
              <div className='grow flex flex-col items-center h-[auto]'>
                <span className='min-w-16 min-h-16 lg:min-w-20 lg:min-h-20 font-bold flex justify-center items-center rounded-full bg-[#ffffff] border-dashed border-2 border-[#ffc20b] text-center'>1</span>
                <div className='grow w-[0] h-[auto] lg:border-dashed lg:border-l-2 border-[#ffc20b]'></div>
              </div>

              <div className='relative flex items-start w-[100%] '>
                <span className="mt-4 border-solid border-r-[#ffffff] border-r-[16px] border-y-transparent border-y-[16px] border-l-0"></span>
                <span className='grow rounded-2xl text-[.875rem] px-4 py-6 bg-[#ffffff] shadow-xl'>
                Register / Login
                </span>
              </div>
            </li>
            
            <li className='flex gap-x-2 lg:w-[50%] lg:mr-[auto] lg:translate-x-[2.5rem]'>
              <div className='relative flex items-start w-[100%] text-right'>
                <span className='grow rounded-2xl text-[.875rem] px-4 py-6 bg-[#ffffff] shadow-xl'>
                 Choose Category
                </span>
                <span className="mt-4 border-solid border-l-[#ffffff] border-l-[16px] border-y-transparent border-y-[16px] border-r-0"></span>
              </div>

              <div className='grow flex flex-col items-center h-[auto]'>
                <span className='min-w-16 min-h-16 lg:min-w-20 lg:min-h-20 font-bold flex justify-center items-center rounded-full bg-[#ffffff] border-dashed border-2 border-[#40cbb4] text-center'>2</span>
                <div className='grow w-[0] h-[auto] lg:border-dashed lg:border-l-2 border-[#40cbb4]'></div>
              </div>
            </li>

            <li className='flex gap-x-2 lg:w-[50%] lg:ml-[auto] lg:translate-x-[-2.5rem]'>
              <div className='grow flex flex-col items-center h-[auto]'>
                <span className='min-w-16 min-h-16 lg:min-w-20 lg:min-h-20 font-bold flex justify-center items-center rounded-full bg-[#ffffff] border-dashed border-2 border-[#0e2721] text-center'>3</span>
                <div className='grow w-[0] h-[auto] lg:border-dashed lg:border-l-2 border-[#0e2721]'></div>
              </div>

              <div className='relative flex items-start w-[100%] '>
                <span className="mt-4 border-solid border-r-[#ffffff] border-r-[16px] border-y-transparent border-y-[16px] border-l-0"></span>
                <span className='grow rounded-2xl text-[.875rem] px-4 py-6 bg-[#ffffff] shadow-xl'>

                Execute Your Agreement.
                </span>
              </div>
            </li>

            <li className='flex gap-x-2 lg:w-[50%] lg:mr-[auto] lg:translate-x-[2.5rem]'>
              <div className='relative flex items-start w-[100%] text-right'>
                <span className='grow rounded-2xl text-[.875rem] px-4 py-6 bg-[#ffffff] shadow-xl'>
                
                Proceed to Payment
                </span>
                <span className="mt-4 border-solid border-l-[#ffffff] border-l-[16px] border-y-transparent border-y-[16px] border-r-0"></span>
              </div>
              
              <div className='grow flex flex-col items-center h-[auto]'>
                <span className='min-w-16 min-h-16 lg:min-w-20 lg:min-h-20 font-bold flex justify-center items-center rounded-full bg-[#ffffff] border-dashed border-2 border-[#e6275a] text-center'>4</span>
                <div className='grow w-[0] h-[auto] lg:border-dashed lg:border-l-2 border-[#e6275a]'></div>
              </div>
            </li>

            <li className='flex gap-x-2 lg:w-[50%] lg:ml-[auto] lg:translate-x-[-2.5rem]'>
              <div className='grow flex flex-col items-center h-[auto]'>
                <span className='min-w-16 min-h-16 lg:min-w-20 lg:min-h-20 font-bold flex justify-center items-center rounded-full bg-[#ffffff] border-dashed border-2 border-[#ffc20b] text-center'>5</span>
                <div className='grow w-[0] h-[auto] lg:border-dashed lg:border-l-2 border-[#ffc20b]'></div>
              </div>

              <div className='relative flex items-start w-[100%] '>
                <span className="mt-4 border-solid border-r-[#ffffff] border-r-[16px] border-y-transparent border-y-[16px] border-l-0"></span>
                <span className='grow rounded-2xl text-[.875rem] px-4 py-6 bg-[#ffffff] shadow-xl'>

                Update Your Information.
                </span>
              </div>
            </li>

            <li className='flex gap-x-2 lg:w-[50%] lg:mr-[auto] lg:translate-x-[2.5rem]'>
              <div className='relative flex items-start w-[100%] text-right'>
                <span className='grow rounded-2xl text-[.875rem] px-4 py-6 bg-[#ffffff] shadow-xl'>
                
                Get Physical Land Allocation
                </span>
                <span className="mt-4 border-solid border-l-[#ffffff] border-l-[16px] border-y-transparent border-y-[16px] border-r-0"></span>
              </div>
              
              <div className='grow flex flex-col items-center h-[auto]'>
                <span className='min-w-16 min-h-16 lg:min-w-20 lg:min-h-20 font-bold flex justify-center items-center rounded-full bg-[#ffffff] border-dashed border-2 border-[#40cbb4] text-center'>6</span>
                <div className='grow w-[0] h-[auto] lg:border-dashed lg:border-l-2 border-[#40cbb4]'></div>
              </div>
            </li>
          </ul>
          <div className="text-center mt-8">
            <h4 className="font-semibold text-[1rem] py-8 text-white">NOW IT&apos;S TIME TO TAKE YOUR FIRST STEP</h4>
            <div className="text-center mb-4 mt-4 font-semibold text-[#ffffff] text-[1rem] lg:text-[1.5rem]">
              <div>
                <span className="py-1">{timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds</span>
              </div>
            </div>
            <button className="btn-style-three" onClick={()=>setInterestForm(true)}>
              <span className="btn-title">Click Now To Start Your Journey</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#EDF8F6] px-4 lg:px-24 py-24">
        <h2 className='text-2xl text-[#105C04] mb-16 text-center lg:text-left font-semibold'>Progress <br /> 
        <span className='text-[#64A001]'> Updates</span></h2>

        <ul className='flex flex-col gap-8'>
          {
            progresses.map((progress, index) => (
              <li key={index} className='text-base font-semibold flex flex-col justify-between'>
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex items-start gap-4'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      fill="#64A001"
                    >
                      <path d="M16.298 8.288l1.404 1.425-5.793 5.707a2.001 2.001 0 01-2.823-.005l-2.782-2.696 1.393-1.437 2.793 2.707 5.809-5.701zM24 12c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12zm-2 0c0-5.514-4.486-10-10-10S2 6.486 2 12s4.486 10 10 10 10-4.486 10-10z"></path>
                    </svg>
                    <div>
                      <h4 className='text-[#105C04] font-medium'>{progress.title}</h4>
                      <span className='text-[#64A001]'>{progress.date}</span>
                    </div>
                  </div>
                
                  <div className='flex items-start justify-end gap-2'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 40 40"
                      className="shrink-0"
                    >
                      <path
                        fill="#ffc20b"
                        d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
                      ></path>
                      <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
                      <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
                    </svg> 
                  </div>
                </div>        

                <div className='px-8 py-8'>
                  <p className='text-justify font-normal text-[.875rem]'>
                  {progress.content}
                  </p>
                  
                  {
                    progress.media &&
                    <div className='grid gap-2 mt-8' style={{gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'}}>
                      {
                        progress.media.map((media, index) => (
                          <>
                          {
                            media.type == "image" &&
                            <div className='flex flex-col' key={index}>
                              <img src={media.src} alt={media.caption} width={"100%"} height={"auto"} style={{border: '2px solid #64A001', background: '#64A001', objectFit: 'contain', minHeight: '100px', maxHeight: '100px'}}/>
                              {
                                media.caption &&
                                <span className='text-[.7rem] leading-none'>Caption</span>
                              }
                            </div>
                          }
                          {
                            media.type == "video" &&
                            <div className='flex flex-col' key={index}>
                              <video width={"100%"} height={"auto"} style={{border: '2px solid #64A001', background: '#64A001', minHeight: '100px', maxHeight: '100px', margin: '0'}} controls>
                                <source src={media.src} type="video/mp4"/>
                              </video>
                              {
                                media.caption &&
                                <span className='text-[.7rem] leading-none'>Another Caption</span>
                              }
                            </div>
                          }
                          </>
                        ))
                      }
                    </div>
                  }

                </div>
              </li>
            ))
          }
        </ul>
        
        <div className="text-center my-16">
          <button className="btn-style-two" onClick={()=>setInterestForm(true)}>
            <span className="btn-title">Click Now To Start Your Journey</span>
          </button>
        </div>
      </section>

      <section className="border-[#ffc20b] border-2 px-2 py-2">
        {
          locations.map((location, index) => (
            <iframe 
            key={index}
            src={location} 
            width="100%" height="450" style={{border: '0', marginBottom: '1rem'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          ))
        }
      </section>

      <section className='bg-[#EDF8F6] px-4 lg:px-24 py-24'>
        <h2 className='text-2xl text-[#105C04] mb-16 text-center lg:text-left font-semibold'>Frequently <br />Asked 
        <span className='text-[#64A001]'> Questions</span></h2>

        <ul className='flex flex-col gap-8'>
          {
            faqs.map((faq, index) => (
            <li key={index} className='px-4 py-4 rounded-sm bg-[#105C04] text-[#ffffff]'>
              <div className='flex  justify-between' onClick={() => toggleActiveFaq(index)}>
                <h3 className='text-base font-semibold'>{'Q' + (index + 1) + ' ' + faq.question}</h3>
                {
                activeFaq && faqIndex == index ? 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 35 35"
                  className="shrink-0"
                >
                  <g clipPath="url(#clip0_1_2045)">
                    <path
                      fill="#F2BC5E"
                      d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2045">
                      <path fill="#fff" d="M0 0H35V35H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                :
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 40 40"
                  className="shrink-0"
                >
                  <path
                    fill="#ffc20b"
                    d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
                  ></path>
                  <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
                  <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
                </svg> 
                }
              </div>
              
              {
                activeFaq && faqIndex == index ? 
                <p className='px-4 py-4'>
                Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity.

                They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase.
                
                Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture … 
                </p>
                :
                ''
              }
            </li>
            ))
          }
          
        </ul>
        
        {/* <div className="text-center my-16">
          <button className="btn-style-two" onClick={()=>setInterestForm(true)}>
            <span className="btn-title">Join Other Land Owners Today</span>
          </button>
        </div> */}
      </section>

      <Footer/>
      
      {interestForm && <IForm closeForm={() => setInterestForm(false)}/>}
      
    </>
  );
}