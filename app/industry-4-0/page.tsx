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
                    <h1 className="text-5xl font-extrabold">Industria 4.0</h1>
                </div>
            </div>
            <div className="md:flex bg-customWhite p-24">
                <div className=" w-[100%] md:w-[40%] flex justify-center" style={{paddingLeft:'15px', paddingRight:'15px'}}>
                    <img  src="https://www.deltats.eu/wp-content/uploads/2019/05/industria-4.0.jpg"/>
                </div>
                <div className=" w-[100%] md:w-[60%] flex flex-col" style={{paddingLeft:'15px', paddingRight:'15px'}}>
                    <h1 className="text-customBlack text-4xl text-left font-extrabold"  style={{marginTop:'20px'}}>Industria 4.0</h1>
                    <p className="text-customBlack text-base text-left" style={{marginTop:'20px'}}>Dal sistema automatico di distribuzione e trattamento del materiale verso le presse di stampaggio, al sistema di rilevazione e controllo centralizzato, DeltAts è sicuramente entrata a far parte di quel mondo chiamato industria 4.0.</p>
                    <p className="text-customBlack text-base text-left" style={{marginTop:'20px'}}>Il nostro sistema centralizzato è in grado di monitorare, in tempo reale, tutte le macchine di produzione, evidenziarne eventuali anomalie e criticità (fermi macchina, guasti, ecc…), effettuare un controllo statistico di processo.</p>
                    <p className="text-customBlack text-base text-left" style={{marginTop:'20px'}}>Dal terminale a fianco macchina (composto da pc collegato al server centrale, da lettore di codici a barre e da stampante per la produzione immediata delle etichette per la rintracciabilità), si possono richiamare i disegni tecnici, tutti i documenti e le specifiche relativi al componente in produzione in quel momento.</p>
                    <div className="w-[50%]">
                        <Button  text="Scopri il parco macchine"></Button>
                    </div>
                </div>
            </div>
            <div className=" bg-customWhite flex">
            <div className=" w-[33.33%]">
            <div className="flex ">
                <ArrowDownIcon size='60px' color="#004f92"></ArrowDownIcon>
                <div className="flex flex-col" style={{marginLeft:'10px'}}>
                    <h1 className="text-customBlack text-xl text-left font-medium" style={{marginTop:'10px'}}>Produzione</h1>
                    <h3 className="text-customBlack text-left font-medium" style={{marginTop:'15px'}}>La produzione viene rilevata istantaneamente ed immessa nel sistema gestionale. In questo modo viene aggiornata immediatamente la situazione del magazzino prodotti finiti, semilavorati e materie prime.</h3>
                </div>
            </div>
            </div>
            <div className=" w-[33.33%]">
                <div className="flex">
                    <ArrowDownIcon size='60px' color="#004f92"></ArrowDownIcon>
                    <div className="flex flex-col" style={{marginLeft:'10px'}}>
                        <h1 className="text-customBlack text-xl text-left font-medium" style={{marginTop:'10px'}}>Informazioni condivise</h1>
                        <h3 className="text-customBlack text-left font-medium"  style={{marginTop:'15px'}}>Le informazioni possono essere visionate dalle varie figure aziendali: assicurazione qualità, responsabile di produzione, logistica, commerciale. L’immediatezza e la condivisione delle informazioni è indispensabile per poter affrontare le varie sfide che il mercato globalizzato ci richiede.</h3>
                    </div>
                </div>
            </div>
            <div className=" w-[33.33%]">
                <div className="flex">
                    <ArrowDownIcon size='60px' color="#004f92"></ArrowDownIcon>
                    <div className="flex flex-col" style={{marginLeft:'10px'}}>
                        <h1 className="text-customBlack text-xl text-left font-medium" style={{marginTop:'10px'}}>Investimenti</h1>
                        <h3 className="text-customBlack text-left font-medium"  style={{marginTop:'15px'}}>Stiamo continuamente investendo in macchinari, attrezzature e sistemi di controllo e gestione che ci aiutino ad evolvere e ad essere pronti alle richieste dei clienti di oggi e di domani.</h3>
                    </div>
                </div>
            </div>
            </div>
            <div className="w-100 h-[30rem] flex items-center justify-end" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/06/bg-industria-1.jpg?id=8738) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingRight: '10%', paddingLeft: '10%'}}>
                <div className="text-left w-[50%]">
                    <h1 className="text-5xl font-extrabold ">Produzione automatizzata e interconnessa</h1>
                    <p className="" style={{marginTop: '25px !important', marginBottom: '20px !important'}}>L’industria 4.0 scaturisce dalla quarta rivoluzione industriale, il processo che porterà alla produzione del tutto automatizzata e interconnessa. DeltAts si sta muovendo verso questa direzione.</p>
                </div>
            </div>
        </>
      );
}