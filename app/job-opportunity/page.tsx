import Button from "../ui/components/button";
import ArrowDoubleRight from "../ui/icon/arrow-double-right";
import ArrowDownIcon from "../ui/icon/arrow-down";

export default function Page() {
    return (
        <>
            <div className="w-100 h-[20rem] flex items-center justify-center" style={{backgroundImage: "url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202) !important", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="text-center w-[70rem]">
                <h1 className="text-5xl font-extrabold">Job Opportunity</h1>
                </div>
            </div>
            
            <div className="md:flex bg-customWhite p-12">
                
                <div className=" w-[100%] md:w-[50%] flex justify-center flex-col " style={{paddingTop: '48px !important',paddingRight: '30px !important',paddingBottom: '70px !important',paddingLeft: '30px !important'}} >
                    <p className="text-customBlack font-extrabold text-2xl">Vuoi lavorare con noi?</p>
                    <p className="text-customBlack font-extrabold">Siamo alla ricerca di un ADDETTO OFFICINA STAMPI.</p>
                    <p className="text-customBlack font-extrabold">Job Description</p>
                    <p className="text-customBlack underline">La risorsa si occuperà di:</p>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <ArrowDownIcon color='blue' size='15px'></ArrowDownIcon>
                        <p className="text-customBlack">Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <p className="text-customBlack font-extrabold">Requisiti fondamentali</p>
                    <p className="text-customBlack">Desideriamo entrare in contatto con candidati in possesso di diploma indirizzo tecnico oppure corsi di studio specifici per Tecnici CNC e con un’esperienza di almeno 3/5 anni nel ruolo. E’ richiesta la capacità di lettura disegno tecnico, utilizzo strumenti di misura, conoscenza di base di sistemi CAD/CAM, utilizzo di macchine utensili tradizionali e CNC. Costituisce titolo preferenziale la conoscenza degli stampi per materie plastiche e delle attrezzature specifiche. E’ gradita la conoscenza base dell’inglese tecnico. Completano il profilo dinamicità, flessibilità, puntualità, precisione, doti comunicative e di organizzazione del tempo, capacità di analisi e problem solving, disponibilità ad eventuali straordinari (all’occorrenza anche di sabato in funzione del carico di lavoro). Inquadramento e retribuzione saranno commisurati all’effettiva esperienza maturata.</p>
                </div>
                <div className=" w-[100%] md:w-[50%] flex flex-col justify-center items-center bg-customDarkGrey4" style={{border: '2px solid #f1f1f5',paddingTop: '48px !important', paddingRight: '46px !important', paddingBottom: '70px !important', paddingLeft: '46px !important'}}>
                    <h3 className="text-customBlack font-extrabold text-center text-3xl">Richiesta informazioni</h3>
                    <p className="text-customBlack text-center">Per ricevere ulteriori informazioni utilizzate la form qui sotto.</p>
                    <p className="text-customBlack text-center">Tutti i campi sono obbligatori.</p>
                    <div className="w-[100%] flex justify-between"  style={{marginBottom:'10px',paddingTop:'34px'}}>
                        <input type="text" className="w-[49%]" placeholder="Nome*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px'}}/>
                        <input type="text" className="w-[49%]" placeholder="Cognome*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px'}}/>
                    </div>
                    <div className="w-[100%] flex justify-between" style={{marginBottom:'10px'}}>
                        <input type="text" className="w-[49%]" placeholder="Email*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px'}}/>
                        <input type="text" className="w-[49%]" placeholder="Telefono*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px'}}/>
                    </div>
                    <div className="w-[100%]">
                    <input type="file" placeholder="Messaggio*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px', width:'100%'}}/>
                    </div>
              
                    <div className="flex w-[100%]" style={{marginBottom:'20px', marginTop:'20px'}}>
                        <input type="checkbox" style={{marginRight:'5px'}}/> 
                        <p className="text-customBlack">acconsento al trattamento dei dati personali*</p>
                    </div>
                    <div className="w-[40%]">
                        <Button text="Invia Curriculum" ></Button>
                    </div>
                </div>
            </div>
        </>
      );
}