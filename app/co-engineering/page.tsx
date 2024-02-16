"use client"
import ArrowDownIcon from "../ui/icon/arrow-down";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";

export default function Page() {
    
    return (
        <>
            <div className="w-100 h-[20rem] flex items-center justify-center" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="text-center w-[70rem]">
                <h1 className="text-5xl font-extrabold">Co-engineering</h1>
                </div>
            </div>
            <div className="w-100 bg-customWhite flex-col flex items-center p-12">
                <p className="text-customBlack justify-center text-center">L’esperienza ed il know-how acquisiti nel corso degli anni, consente a DeltAts di analizzare e sviluppare autonomamente ogni progetto e di instaurare con i clienti una concreta collaborazione che si estende al co-engineering dei prodotti secondo le specifiche esigenze, alla realizzazione di modelli e attrezzature nonché alla rapida prototipazione, garantendo così un notevole risparmio sui tempi di produzione e di consegna.</p>
            </div>
            
            <div className="md:flex bg-customWhite ">
                <div className=" w-[100%] md:w-[33.33%] ">
                    <div className="flex flex-col justify-center items-center" style={{paddingBottom: '42px', paddingTop: '42px'}}>
                        <ArrowDownIcon size="30px" color="orange"></ArrowDownIcon>
                        <h1 className="text-customBlack text-xl text-center font-extrabold">CAD 3D</h1>
                        <p className="text-customBlack text-center" style={{marginTop:'20px'}}>L’ufficio tecnico DeltAts è dotato dei più aggiornati strumenti CAD 3D che consentono di operare su tutti i formati di file attualmente utilizzati nel mondo dei progettisti e dei produttori di attrezzature e modelli.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center" style={{paddingBottom: '42px', paddingTop: '42px'}}>
                        <ArrowDownIcon size="30px" color="orange"></ArrowDownIcon>
                        <h1 className="text-customBlack text-xl text-center font-extrabold">Ottimizzazione</h1>
                        <p className="text-customBlack text-center" style={{marginTop:'20px'}}>I nostri tecnici si confrontano quotidianamente con l’ufficio tecnico dei clienti al fine di ricercare soluzioni che garantiscano l’ottimizzazione del prodotto in termini di costo, qualità ed efficienza.</p>
                    </div>
                </div>
                <div className=" w-[100%] md:w-[33.33%] flex items-center justify-center">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={true}
                    >
                    <SwiperSlide>
                        <img width="703" height="842" src="https://www.deltats.eu/wp-content/uploads/2019/05/co-engineering.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width="703" height="842" src="https://www.deltats.eu/wp-content/uploads/2019/06/co-engineering2.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width="703" height="842" src="https://www.deltats.eu/wp-content/uploads/2019/06/co-engineering3.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width="703" height="842" src="https://www.deltats.eu/wp-content/uploads/2019/06/co-engineering4.jpg"/>
                    </SwiperSlide>
                    </Swiper>
                </div>
                <div className=" w-[100%] md:w-[33.33%] ">
                    <div className="flex flex-col justify-center items-center" style={{paddingBottom: '42px', paddingTop: '42px'}}>
                        <ArrowDownIcon size="30px" color="orange"></ArrowDownIcon>
                        <h1 className="text-customBlack text-xl text-center font-extrabold">Ciclo completo</h1>
                        <p className="text-customBlack text-center" style={{marginTop:'20px'}}>L’ufficio tecnico segue il ciclo completo del prodotto: dalla formulazione dell’offerta, a supporto dell’ufficio commerciale, al prodotto finito.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center" style={{paddingBottom: '42px', paddingTop: '42px'}}>
                        <ArrowDownIcon size="30px" color="orange"></ArrowDownIcon>
                        <h1 className="text-customBlack text-xl text-center font-extrabold">Obbiettivi</h1>
                        <p className="text-customBlack text-center" style={{marginTop:'20px'}}>L’obbiettivo finale non viene mai perso di vista e la continua verifica dei requisiti richiesti dal cliente, unita alla simulazione dei materiali e all’analisi dello stampo, ci permettono di spaziare su un’ampia gamma di prodotti, anche di particolare complessità geometrica e dimensionale e di sviluppare ed elaborare tutti i dettagli per la messa in produzione del prodotto.</p>
                    </div>
                </div>
            </div>
        </>
      );
}