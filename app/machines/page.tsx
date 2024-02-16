"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

export default function Page() {
    const [showRobot, setShowRobot] = useState(true)
    const [showLine, setShowLine] = useState(false)
    const [showIsland, setShowIsland] = useState(false)

    const openTab = (title: any) => {
        switch (title) {
            case 'Robot':
                setShowLine(false);
                setShowIsland(false);
                setShowRobot(true);
                break;
            case 'Linee':
                setShowRobot(false);
                setShowIsland(false);
                setShowLine(true);
                break;
            case 'Isole':
                setShowRobot(false);
                setShowLine(false);
                setShowIsland(true);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="w-100 h-[20rem] flex items-center justify-center" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="text-center w-[70rem]">
                <h1 className="text-5xl font-extrabold">Macchinari</h1>
                </div>
            </div>
            
            <div className="md:flex bg-customWhite p-12">
                <div className=" w-[100%] md:w-[50%] flex justify-center" >
                 
                        <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={true}

                        style={{width: '80%'}}
                        >
                            <SwiperSlide>
                                <img  src="https://www.deltats.eu/wp-content/uploads/2019/05/linea-collaudo-vacuum-tank.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img  src="https://www.deltats.eu/wp-content/uploads/2019/05/macchinari-4.jpg"/>
                            </SwiperSlide>
                        </Swiper>
                  
              
                </div>
                <div className=" w-[100%] md:w-[50%] flex flex-col">
                    <p className="text-customBlack text-sm text-left font-semibold" style={{marginTop:'20px'}}>
                        Il reparto stampaggio materie plastiche di DeltAts dispone di un parco macchine in continua evoluzione e all’avanguardia.
                        Trenta presse idrauliche dalle 25 alle 800 tonnellate, con un impianto automatico centralizzato per la distribuzione e il trattamento dei polimeri.</p>
                    
                    <div style={{
                        padding: '13px 35px 12px 15px',
                        border: '1px #d9dbdb solid',
                        cursor: 'pointer',
                        marginBottom: '10px'
                    }} onClick={() => openTab('Robot')}>
                        <p className="text-customBlack text-sm text-left font-semibold">ROBOT</p>
                    </div>
                    {
                        showRobot && <p className="text-customBlack text-sm text-left font-semibold">In DeltAts vengono utilizzati robot a 5 e 4 assi, e robot antropomorfi a seconda del prodotto da realizzare e delle necessità del cliente.</p>
                    }
                    <div style={{
                        padding: '13px 35px 12px 15px',
                        border: '1px #d9dbdb solid',
                        cursor: 'pointer',
                        marginBottom: '10px'
                    }} onClick={() => openTab('Linee')}>
                        <p className="text-customBlack text-sm text-left font-semibold">LINEE</p>
                    </div>
                    {
                        showLine && <p className="text-customBlack text-sm text-left font-semibold">Linee di collaudo per valvole in automatico, linee di collaudo oil cup filler, linee di collaudo vacuum tank.
                        Linee di saldatura valvole ad ultrasuoni, ad ultrasuoni con pvc.
                        Linee di saldatura serbatoi a vibrazione e a lama calda.</p>
                    }
                     <div style={{
                        padding: '13px 35px 12px 15px',
                        border: '1px #d9dbdb solid',
                        cursor: 'pointer',
                        marginBottom: '10px'
                    }} onClick={() => openTab('Isole')}>
                        <p className="text-customBlack text-sm text-left font-semibold">ISOLE</p>
                    </div>
                    {
                        showIsland && <p className="text-customBlack text-sm text-left font-semibold">In base alle esigenze di ogni lavorazione utilizziamo isole di assemblaggio e controllo totalmente o parzialmente automatizzate.</p>
                    }
                </div>
            </div>
            <div className="w-100 h-[25rem] flex items-center justify-center " style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/06/bg-macchinari.jpg?id=8667) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="w-[70rem] md:flex">
                    <div className="w-[80%]">
                        <h1 className="text-5xl font-extrabold">Isola automatizzata</h1>
                        <p className="text-xl">Isola di assemblaggio valvole tramite saldatura ad ultrasuoni, test di tenuta / perdite di carico e marcatura.</p>
                    </div>
                    <div className="xl:w-[100%] md:w-[20%] flex justify-center items-center" >
                        <img style={{ width: '92px', height: '92px'}} src="https://www.deltats.eu/wp-content/uploads/2022/02/video-icon.png"/> 
                    </div>
                </div>
            </div>
        </>
      );
}