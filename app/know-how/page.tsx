import Button from "../ui/components/button";

export default function Page() {
    return (
        <>
            <div className="w-100 h-[20rem] flex items-center justify-center" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="text-center w-[70rem]">
                <h1 className="text-5xl font-extrabold">Know How</h1>
                </div>
            </div>
            <div className="w-100 bg-customWhite flex-col flex items-center p-12">
                <p className="text-customBlack justify-center text-center">La capacità di affrontare le diverse richieste dei nostri clienti e la ricerca continua di innovazione rappresentano da sempre i punti di forza di DeltAts. Per questo sin dal primo contatto, i nostri uffici commerciale e tecnico, analizzano le richieste e forniscono le prime risposte.
                    DeltAts combina alta produttività ed efficienza con elevata flessibilità e versatilità che, uniti ad un know how decennale nel settore, permettono di essere partner affidabile per i maggiori produttori di componenti auto italiani e esteri.</p>
            </div>
            <div className="md:flex bg-customWhite p-12">
                <div className=" w-[100%] md:w-[33.33%] flex items-center justify-center">
                    <img src="https://www.deltats.eu/wp-content/uploads/2019/05/know-how-1-300x225.jpg" alt="" width={300} height={22}/>
                </div>
                <div className=" w-[100%] md:w-[33.33%] flex items-center justify-center">
                    <img src="https://www.deltats.eu/wp-content/uploads/2019/05/know-how-2-300x225.jpg" alt="" width={300} height={22}/>
                </div>
                <div className=" w-[100%] md:w-[33.33%] flex items-center justify-center">
                    <img src="https://www.deltats.eu/wp-content/uploads/2019/05/know-how-4-300x225.jpg" alt="" width={300} height={22}/>
                </div>
            </div>
            <div className="md:flex bg-customWhite p-12">
                <div className=" w-[100%] md:w-[33.33%] flex flex-col" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                    <h1 className="text-customBlack text-xl text-left font-extrabold" style={{paddingTop: '25px', paddingBottom: '32px'}}>Co-engineering</h1>
                    <p className="text-customBlack text-left">L’ufficio tecnico DeltAts è dotato dei più aggiornati strumenti CAD 3D che consentono di operare su tutti i formati di file attualmente utilizzati.</p>
                </div>
                <div className=" w-[100%] md:w-[33.33%] flex flex-col" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                    <h1 className="text-customBlack text-xl text-left font-extrabold" style={{paddingTop: '25px', paddingBottom: '32px'}}>Prototipazione</h1>
                    <p className="text-customBlack text-left">Lo studio e la pianificazione vengono eseguiti al fine di ottimizzare i tempi di sviluppo e costruzione dello stampo.</p>
                </div>
                <div className=" w-[100%] md:w-[33.33%] flex flex-col" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                    <h1 className="text-customBlack text-xl text-left font-extrabold" style={{paddingTop: '25px', paddingBottom: '32px'}}>Analisi e studio dei materiali</h1>
                    <p className="text-customBlack text-left">DeltAts usa moderni software che permettono l’analisi e la simulazione dei flussi della materia prima.</p>
                </div>
            </div>
            <div className="w-100 h-[20rem] flex items-center justify-center p-14" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/06/bg-qualita.jpg?id=8744) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="w-[70%] flex flex-col">
                    <h1 className="text-5xl text-left font-extrabold">Ricerca e innovazione</h1>
                    <p style={{marginTop: '20px', marginBottom: '25px'}} className="text-left">La capacità di affrontare le diverse richieste da parte dei nostri clienti unita alla ricerca continua di innovazione tecnologica rappresentano da sempre i punti di forza di DeltAts.</p>
                </div>
                <div className="md:w-[30%]  flex items-center justify-center" >
                    <Button text="Contattaci"></Button>
                </div>
            </div>





            
        </>
      );
}