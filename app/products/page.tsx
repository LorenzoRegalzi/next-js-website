export default function Page() {
    return (
        <>
          <div className="w-100 h-[20rem] flex items-center justify-center" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="text-center w-[70rem]">
              <h1 className="text-5xl font-extrabold">Prodotti</h1>
            </div>
          </div>
          <div className="w-100 bg-customWhite flex-col flex items-center p-12">
            <p className="text-customBlack justify-center text-center">Trasformare un progetto in prodotto finito significa trovare il materiale giusto per realizzarlo: la qualità dei componenti dipende anche da questo. Per questa ragione siamo molto attenti alla scelta delle materie prime.<br/>
Noi utilizziamo solo materiali con elevate performance (POM, PA66, PA66 30% caricato vetro) in grado di sopportare temperature da -40 a 130° C; di resistere agli attacchi dei prodotti chimici e dei carburanti.<br/>
Grazie alla nostra tecnologia e flessibilità, siamo in grado di soddisfare ogni esigenza dei nostri clienti e produrre svariati prodotti per il settore automotive, tipo: frame, valvole controllo pressione, valvole antideflusso, canister per filtri carbone, controllo devio luci, oil cup-filler.</p>
       
            </div>
            <div className="md:flex">
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Frame</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>I frame sono semilavorati costituiti da uno o più inserti metallici sovrastampati.
                        Le piste consentono di realizzare connessioni elettriche, mentre la plastica stampata ha la funzione di struttura e di isolante elettrico tra gli inserti. Il materiale utilizzato per gli inserti è solitamente rame. A seconda del tipo e della funzione, lo spessore varia da 0,2 ad oltre 1 mm. Gli inserti sono di solito trattati per proteggerli dalla corrosione e per aumentare la saldabilità e migliorare la conducibilità. Il materiale plastico utilizzato è solitamente PA6, PA66 o PBT caricato vetro.</p>
                </div>
                <div className=" w-[100%] md:w-[50%]" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/06/frame.jpg?id=8765) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

                </div>
            </div>
            <div className="md:flex">
                <div className=" w-[100%] md:w-[50%]" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/04/valvole-antideflusso.jpg?id=8315) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

                </div>
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Valvole antideflusso</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>Le valvole antideflusso (o di non ritorno) sono valvole impiegate nel circuito combustibile o nel circuito di vapori di olio per evitare che i flussi possano andare in senso contrario. Sono utilizzate di solito nei circuiti benzina sui ciclomotori oppure nei circuiti Blue-By (Iveco- Reflex).</p>
                </div>
            </div>
            <div className="md:flex">
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Valvole di sicurezza</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>Le valvole di sicurezza si distinguono in: valvole di sicurezza a 2 vie montate tra il serbatoio e il canister che, permettono il controllo delle pressioni nei due sensi. Comunemente definite valvole di ventilazione; valvole di sicurezza monodirezionali montate su serbatoi in genere per limitare la massima pressione.</p>
                </div>
                <div className=" w-[100%] md:w-[50%]" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/04/valvole-sicurezza.jpg?id=8309) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

                </div>
            </div>
            <div className="md:flex">
                <div className=" w-[100%] md:w-[50%]" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/04/valvole-ritegno.jpg?id=8308) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

                </div>
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Valvole di ritegno</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>Le valvole di ritegno depressione per servofreno (comunemente chiamate valvole servofreno), sono montate tra il generatore di depressione (pompa o altro) e il servofreno e servono a mantenere la depressione nello stesso.</p>
                </div>
            </div>
            <div className="md:flex">
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Canister</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>Il serbatoio a carboni attivi (canister) è collegato all’aerazione del serbatoio carburante tramite il tubo di compensazione della pressione e serve a raccogliere il vapore di carburante che si genera con il riscaldamento e a stoccarlo temporaneamente. I vapori, contenuti nel canister, vengono aspirati dal motore che contemporaneamente li elimina bruciandoli.</p>
                </div>
                <div className=" w-[100%] md:w-[50%]" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/06/canister.jpg?id=8754) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

                </div>
            </div>
            <div className="md:flex">
                <div className=" w-[100%] md:w-[50%]" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/04/serbatoi-depressione.jpg?id=8306) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

                </div>
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Serbatoio a depressione</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>È un contenitore che viene alimentato dalla pompa servofreno. Ne esistono due tipi: 1) Serbatoio monotubo che può essere utilizzato per molteplici applicazioni. 2) Serbatoio bi-tubo (soluzione solo Fiat) che alimenta due circuiti; un circuito alimenta di depressione una valvola proporzionale controllata dalla centralina che regola la chiusura/apertura delle palette del turbo e il secondo circuito serve a chiudere la farfalla dell’aria quando si gira la chiave per spegnere i motori diesel.</p>
                </div>
            </div>
            <div className="md:flex">
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Evaporatore con valvola multifunzione</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>È un piccolo canister senza carbone in cui confluiscono i vapori di benzina dal serbatoio, generati dalle variazioni di temperatura e di pressione, e possono essere aspirati dalla depressione del motore. La valvola ha tre funzioni: 1) Aprire a pressione definita per far entrare i vapori. 2) Ventilare verso il serbatoio quando si genera depressione. 3) far intervenire il galleggiante e chiudere l’accesso al contenitore quando sale il livello della benzina nello stesso.</p>
                </div>
                <div className=" w-[100%] md:w-[50%]" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/06/canister.jpg?id=8754) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

                </div>
            </div>
        </>
      );
}