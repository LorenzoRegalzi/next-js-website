"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Page() {
    return (
        <>
            <div className="w-100 h-[20rem] flex items-center justify-center" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="text-center w-[70rem]">
                <h1 className="text-5xl font-extrabold">Analisi e studio dei materiali</h1>
                </div>
            </div>
            
            <div className="md:flex bg-customWhite p-12">
                <div className=" w-[100%] md:w-[50%] flex justify-center" >
                 
                        <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={true}

                        style={{width: '40%'}}
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
                <div className=" w-[100%] md:w-[50%] flex flex-col">
                    <h1 className="text-customBlack text-4xl text-left font-extrabold">Analisi e studio <br/> dei materiali</h1>
                    <p className="text-customBlack text-xl text-left font-semibold" style={{marginTop:'20px'}}>Per progettare i componenti e gli stampi, Deltats usa moderni software che permettono l’analisi e la simulazione dei flussi della materia prima.</p>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>L’analisi strutturale del prodotto tiene conto, già in fase di progetto, delle variabili indotte dal processo di iniezione: dalle linee di giunzione all’orientamento delle fibre, fino allo sfogo dei gas. In questo modo si possono prevedere possibili aree critiche dello stampo e dell’intero progetto. Si evitano così errori che, in fase avanzata di realizzazione degli stampi, sono difficili se non impossibili da correggere.
Con lo stesso software si riescono a prevedere i tempi di stampaggio e la produzione oraria, con una precisione del 100%. L’analisi ottenuta è simile a quella che potrebbe essere fatta su un campione reale.</p>
                </div>
            </div>
           
            <div className="w-100 h-[15rem] flex items-center justify-center p-10" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/06/bg-polimeri.jpg?id=8715) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="w-[100%] flex flex-col">
                    <h1 className="text-4xl text-left font-extrabold">I polimeri che utilizziamo sono prodotti dalle migliori industrie presenti sul mercato italiano ed internazionale.</h1>
                </div>
            </div>
        </>
      );
}