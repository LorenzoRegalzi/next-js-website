"use client"

import Button from "../ui/components/button";
import ArrowDownIcon from "../ui/icon/arrow-down";

export default function Page() {
    return (
        <>
            <div className="w-100 h-[20rem] flex items-center justify-center" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="text-center w-[70rem]">
                <h1 className="text-5xl font-extrabold">Produzione</h1>
                </div>
            </div>
            
            <div className="md:flex bg-customWhite p-20">
                <div className=" w-[100%] md:w-[50%] flex justify-center" >    
                    <img width='90%' src="https://www.deltats.eu/wp-content/uploads/2019/05/isola-automatizzata.jpg"/>
                </div>
                <div className=" w-[100%] md:w-[50%] flex flex-col justify-center">
                    <h1 className="text-customBlack text-4xl text-left font-extrabold">Sviluppo Interno</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>Per ogni area produttiva, sia essa una pressa o un’sola robotizzata, layout e processo vengono sviluppati internamente. In questo modo, DeltAts ha il completo controllo del modo in cui i componenti vengono realizzati.</p>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>Sia il reparto produzione che l’ufficio tecnico possono velocemente intervenire per migliorare o adeguare il processo, nel momento in cui ce ne fosse bisogno.</p>
                </div>
            </div>
            <div className="w-100 bg-customWhite flex-col flex items-center p-12">
                <h1 className="text-customBlack text-4xl ext-center font-extrabold">I nostri reparti</h1>
                <p className="text-customBlack justify-center text-center">Sono composti dal reparto presse, isole di stampaggio e co-stampaggio, reparto attrezzeria e dal reparto deumidificazione ed erogazione automatica dei materiali, magazzino materie prime, magazzino semilavorati, magazzino prodotti finiti.</p>
            </div>
            <div className="md:flex bg-customWhite p-12">
                <div className=" w-[100%] md:w-[50%] flex justify-center" style={{padding:'15px'}}>    
                    <div className="flex flex-col justify-center items-center" style={{border:'1px solid #e0e0e0', padding: '45px 25px'}}>
                        <ArrowDownIcon size="60px" color="orange"></ArrowDownIcon>
                        <h1 className="text-customBlack text-xl text-center font-extrabold">Macchinari</h1>
                        <p className="text-customBlack text-center" style={{marginTop:'20px', marginBottom:'20px'}}>Il reparto stampaggio materie plastiche di DeltAts dispone di un parco macchine in continua evoluzione. Trenta presse idrauliche dalle 25 alle 800 ton, con un impianto automatico centralizzato per la distribuzione e il trattamento dei polimeri.</p>
                        <Button text='Scopri'></Button>
                    </div>
                </div>
                <div className=" w-[100%] md:w-[50%] flex justify-center" style={{padding:'15px'}}>
                    <div className="flex flex-col justify-center items-center" style={{border:'1px solid #e0e0e0', padding: '45px 25px'}}>
                        <ArrowDownIcon size="60px" color="orange"></ArrowDownIcon>
                        <h1 className="text-customBlack text-xl text-center font-extrabold">Industria 4.0</h1>
                        <p className="text-customBlack text-center" style={{marginTop:'20px', marginBottom:'20px'}}>Dal sistema automatico di distribuzione e trattamento del materiale verso le presse di stampaggio, al sistema di rilevazione e controllo centralizzato, DeltAts è sicuramente entrata a far parte di quel mondo chiamato Industria 4.0.</p>
                        <Button text='Scopri'></Button>
                    </div>
                </div>
            </div>
        </>
      );
}