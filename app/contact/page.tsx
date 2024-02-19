import Button from "../ui/components/button";

export default function Page() {
    return (
        <>
            <div className="w-100 h-[20rem] flex items-center justify-center" style={{backgroundImage: "url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202) !important", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="text-center w-[70rem]">
                <h1 className="text-5xl font-extrabold">Contatti</h1>
                </div>
            </div>
            
            <div className="md:flex bg-customWhite p-12">
                <div className=" w-[100%] md:w-[70%] flex flex-col justify-center items-center" style={{border: '2px solid #f1f1f5',paddingTop: '48px !important', paddingRight: '46px !important', paddingBottom: '70px !important', paddingLeft: '46px !important'}}>
                    <h3 className="text-customBlack font-extrabold text-center text-3xl">Richiesta informazioni</h3>
                    <p className="text-customBlack text-center">Per ricevere ulteriori informazioni utilizzate la form qui sotto.</p>
                    <p className="text-customBlack text-center">Tutti i campi sono obbligatori.</p>
                    <div className="w-[100%] flex justify-between"  style={{marginBottom:'10px',paddingTop:'34px'}}>
                        <input type="text" className="w-[49%]" placeholder="Nome*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px'}}/>
                        <input type="text" className="w-[49%]" placeholder="Cognome*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px'}}/>
                    </div>
                    <div className="w-[100%] flex justify-between" style={{marginBottom:'10px'}}>
                        <input type="text" className="w-[49%]" placeholder="Email*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px'}}/>
                        <input type="text" className="w-[49%]" placeholder="Azienda*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px'}}/>
                    </div>
                    <div className="w-[100%]">
                    <input type="text" placeholder="Messaggio*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px', height:'100px', width:'100%'}}/>
                    </div>
              
                    <div className="flex w-[100%]" style={{marginBottom:'20px', marginTop:'20px'}}>
                        <input type="checkbox" style={{marginRight:'5px'}}/> 
                        <p className="text-customBlack">acconsento al trattamento dei dati personali*</p>
                    </div>
                    <div className="w-[30%]">
                        <Button text="Invia Messaggio" ></Button>
                    </div>
                </div>
                <div className=" w-[100%] md:w-[30%] flex justify-center flex-col bg-customDarkGrey3" style={{paddingTop: '48px !important',paddingRight: '30px !important',paddingBottom: '70px !important',paddingLeft: '30px !important'}} >
                    <p className="text-customBlack font-extrabold">Indirizzo</p>
                    <p className="text-customBlack">Via Provinciale 35, 10010 Loranzè</p>
                    <p className="text-customBlack">(Torino)</p>
                    <div style={{height: '1px', width: '30px', background: 'black', marginTop: '20px', marginBottom: '20px'}}></div>
                    <p className="text-customBlack font-extrabold">Recapiti</p>
                    <p className="text-customBlack">Tel. (+39) 0125 538091</p>
                    <p className="text-customBlack">Fax (+39) 0125 254901</p>
                    <div style={{height: '1px', width: '30px', background: 'black', marginTop: '20px', marginBottom: '20px'}}></div>
                    <p className="text-customBlack font-extrabold">Email</p>
                    <p className="text-customBlack">info@deltats.eu</p>
                    <div style={{height: '1px', width: '30px', background: 'black', marginTop: '20px', marginBottom: '20px'}}></div>
                    <p className="text-customBlack font-extrabold">Società</p>
                    <p className="text-customBlack">P.iva / CF 06408910013</p>
                    <p className="text-customBlack">C.C.I.A.A. n. 790052</p>
                    <p className="text-customBlack">Trib. Ivrea 6164</p>
                    <p className="text-customBlack">Capitale Sociale € 1.500.000 i.v.</p>
                </div>
            </div>
           
            <div className="w-100 h-[25rem] flex items-center justify-center p-10" style={{backgroundImage: "url(https://www.deltats.eu/wp-content/uploads/2022/02/map.jpg?id=9375) !important", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                
            </div>
        </>
      );
}