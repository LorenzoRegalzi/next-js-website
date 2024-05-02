"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ArrowDownIcon from '../ui/icon/arrow-down';
import Button from '../ui/components/button';

export default function Page() {
    return (
        <>
            <div className="w-100 h-[20rem] flex items-center justify-center" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="text-center w-[70rem]">
                <h1 className="text-5xl font-extrabold">Stampi</h1>
                </div>
            </div>
            
            <div className="md:flex bg-customWhite p-24">
                <div className=" w-[100%] md:w-[60%] flex flex-col" style={{paddingLeft:'15px', paddingRight:'15px'}}>
                    <h1 className="text-customBlack text-4xl text-left font-extrabold"  style={{marginTop:'20px'}}>Stampi settore automotive</h1>
                    <p className="text-customBlack text-base text-left" style={{marginTop:'20px'}}>Gli stampi, disegnati dall’ufficio tecnico o in collaborazione con il cliente, vengono costruiti dal reparto attrezzeria che è in grado di realizzare lavorazioni meccaniche quali fresatura, tornitura, rettifiche cnc, ecc… lavorazioni che, nel settore stampaggio plastica automotive, hanno bisogno di una precisione assoluta.</p>
                    <p className="text-customBlack text-base text-left" style={{marginTop:'20px'}}>Grazie alle macchine di cui dispone, DeltAts è in grado di produrre stampi dal più semplice al più complesso (stampi per stampaggio a bi-iniezione, per costampaggio plastica/metallo), utilizzando le più moderne tecnologie. Dopo la rifinitura, gli stampi vengono assemblati per poter essere testati, in modo da poter offrire un prodotto privo di difetti e con le tolleranze richieste dal cliente.</p>
                    <div className='flex' style={{marginTop: '35px'}}>
                    <div className=" w-[50%] ">
                        <div className="flex ">

                            <ArrowDownIcon size='60px' color="#004f92"></ArrowDownIcon>
                            <div className="flex flex-col" style={{marginLeft:'10px'}}>
                                <h1 className="text-customBlack text-xl text-left font-medium" style={{marginTop:'10px'}}>Zero difetti</h1>
                                <h3 className="text-customBlack text-left font-medium" style={{marginTop:'15px'}}>Ciò implica che le cose vengano fatte bene la prima volta e che difetti e sprechi vengano piano, piano ridotti fino ad essere eliminati.</h3>
                            </div>
                        </div>
                        </div>
                        <div className=" w-[50%]">
                            <div className="flex">
                                <ArrowDownIcon size='60px' color="#004f92"></ArrowDownIcon>
                                <div className="flex flex-col" style={{marginLeft:'10px'}}>
                                    <h1 className="text-customBlack text-xl text-left font-medium" style={{marginTop:'10px'}}>Tolleranze richieste</h1>
                                    <h3 className="text-customBlack text-left font-medium"  style={{marginTop:'15px'}}>La tolleranza è l’intervallo nel quale sono considerate accettabili le dimensioni del pezzo realizzato. L’utilizzo delle tolleranze è finalizzato a garantire il corretto accoppiamento dei componenti.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-[100%] md:w-[40%] flex justify-center" style={{paddingLeft:'15px', paddingRight:'15px'}}>
                    <img  src="https://www.deltats.eu/wp-content/uploads/2019/05/3d-stampo.jpg"/>
                </div>
            </div>
           
            <div className="w-100 h-[25rem] flex items-center justify-center p-10" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/05/bg-stampi.jpg?id=8435) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="w-[100%] flex flex-col">
                    <h1 className="text-lg text-center font-semibold uppercase" style={{marginBottom: '20px'}}>LA CURA DEI PARTICOLARI FA LA DIFFERENZA</h1>
                    <h1 className="text-4xl text-center font-extrabold" style={{marginBottom: '20px'}}>Analisi e test</h1>
                </div>
            </div>
            <div className="w-100 flex items-center justify-center  bg-customWhite" style={{ paddingTop:'110px', paddingBottom: '45px'}}>
        <div className="w-[70rem] md:flex p-3 bg-customWhite" style={{paddingLeft: '95px', paddingRight:'95px', marginTop: '-230px'}}>
          <div className="w-[100%] md:w-[50%] flex flex-col ">
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={true}

                style={{width: '60%'}}
                >
                    <SwiperSlide>
                        <img  src="https://www.deltats.eu/wp-content/uploads/2019/05/co-engineering.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src="https://www.deltats.eu/wp-content/uploads/2019/06/co-engineering2.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src="https://www.deltats.eu/wp-content/uploads/2019/06/co-engineering3.jpg"/>
                    </SwiperSlide>
                </Swiper>
          </div>
          <div className="md:w-[50%] relative">

            <p className="text-customBlack">Eventuali difformità delle dimensioni, del pezzo prodotto, risultanti dai test, vengono analizzate e corrette immediatamente.
                I test vengono eseguiti ciclicamente fino a quando il prodotto finale sarà conforme alle specifiche richieste dal cliente.</p>
            <p style={{marginTop:'20px', marginBottom:'20px'}} className="text-customBlack">Gli stampi per soddisfare i grandi volumi di produzione previsti, vengono trattati con PVD (Physical vapor deposition), grazie al quale aumenta la scorrevolezza del materiale e si riduce l’usura dell’acciaio stesso di cui sono composti.
                Per questo garantiamo gli stampi per produzioni superiori ad un milione di battute.</p>
            <a href="/products"><Button text="Vedi i prodotti"></Button></a> 
          </div>
        </div>
      </div>
        </>
      );
}