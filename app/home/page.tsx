import Image from 'next/image'; // Importa il componente Image di Next.js
import news1 from '../../img/news/news_1.png'; // Importa il percorso relativo dell'immagine
import news2 from '../../img/news/news_2.png'; // Importa il percorso relativo dell'immagine
import news3 from '../../img/news/news_3.png'; // Importa il percorso relativo dell'immagine
import Description from '../ui/components/description';
import Title from '../ui/components/title';

export default function Page() {
    return (
        <>
            <Title title={'Home'}></Title>
            <Description text={"Sirion Srl è un'azienda leader nel settore dell'illuminazione per il mercato automobilistico, specializzata nello stampaggio plastico ad iniezione. Offriamo un servizio completo, dalla progettazione alla realizzazione del componente finale, garantendo qualità e affidabilità in ogni fase del processo."}></Description>
            <div className="md:flex bg-customWhite p-20">
                <div className=" w-[100%] md:w-[33.33%] bg-customWhite">
                    <h1 className="text-customBlack text-3xl text-left font-medium">Recensioni dei media: cosa dicono di noi i giornali sulla nostra storia e il nostro impegno</h1>
                </div>
                <div className=" w-[100%] md:w-[33.33%] bg-customWhite">
                    <div className="flex">
                        <h1 className="text-textGrey text-5xl text-left font-extrabold" style={{marginRight:'10px'}}>01</h1>
                        <div className="flex flex-col">
                            <h1 className="text-customBlack text-xl text-left font-medium" style={{marginTop:'10px'}}>Stampa</h1>
                            <Image src={news1} alt="Descrizione dell'immagine" width={500} height={300} />
                        </div>
                    </div>
                </div>
                <div className=" w-[100%] md:w-[33.33%] bg-customWhite">
                <div className="flex">
                        <h1 className="text-textGrey text-5xl text-left font-extrabold"  style={{marginRight:'10px'}}>02</h1>
                        <div className="flex flex-col">
                            <h1 className="text-customBlack text-xl text-left font-medium" style={{marginTop:'10px'}}>Piccolo</h1>
                            <Image src={news2} alt="Descrizione dell'immagine" width={500} height={300} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex bg-customWhite ">
                <div className=" w-[100%] md:w-[33.33%] p-20 bg-customDarkGrey2 ">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Storia</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>Sirion Srl, fondata il 01/09/2023 dopo l'acquisizione tramite il bando del MISE dell'ex Blutec, è oggi un attore chiave nel settore automobilistico. Specializzata nella progettazione, stampaggio e assemblaggio di materie plastiche per il mercato dell'Automotive, con particolare attenzione al settore Lighting (interni ed esterni), Sirion Srl rappresenta una realtà produttiva strategica per i principali player del settore. La società è interamente di proprietà della capogruppo DeltAts Srl, con sede a Loranzè (TO).</p>
                </div>
                <div className=" w-[100%] md:w-[33.33%]" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/04/deltats.jpg?id=8212) !important', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                   
                </div>
                <div className=" w-[100%] md:w-[33.33%] p-20 bg-customDarkGrey2 ">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Missione
</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>Sirion si impegna per il successo economico attraverso il miglioramento continuo dei processi e l'utilizzo efficiente delle risorse interne, con il cliente al centro di ogni attività. Con un'attenzione particolare alla soddisfazione del cliente e dei dipendenti, Sirion promuove un ambiente di lavoro sano e rispettoso basato sulla fiducia e sull'innovazione. La qualità, la competitività dei costi e la sostenibilità ambientale guidano il nostro successo, con un'impegno costante per la sicurezza sul posto di lavoro.</p>
                </div>
            </div>
            <div className="md:flex bg-customWhite p-20">
                
                <div className=" w-[100%] md:w-[25%] bg-customWhite">
                    <div className="flex">
                        <h1 className="text-textGrey text-5xl text-left font-extrabold" style={{marginRight:'10px'}}>01</h1>
                        <div className="flex flex-col">
                            <h1 className="text-customBlack text-5xl text-left font-medium">7000</h1>
                            <h3 className="text-customBlack text-left font-medium" style={{marginTop:'15px'}}>mq di struttutra coperta</h3>
                        </div>
                    </div>
                </div>
                <div className=" w-[100%] md:w-[25%] bg-customWhite">
                    <div className="flex">
                        <h1 className="text-textGrey text-5xl text-left font-extrabold" style={{marginRight:'10px'}}>02</h1>
                        <div className="flex flex-col">
                            <h1 className="text-customBlack text-5xl text-left font-medium">30000</h1>
                            <h3 className="text-customBlack text-left font-medium" style={{marginTop:'15px'}}>mq di struttura totale</h3>
                        </div>
                    </div>
                </div>
                <div className=" w-[100%] md:w-[25%] bg-customWhite">
                    <div className="flex">
                        <h1 className="text-textGrey text-5xl text-left font-extrabold" style={{marginRight:'10px'}}>03</h1>
                        <div className="flex flex-col">
                            <h1 className="text-customBlack text-5xl text-left font-medium">80</h1>
                            <h3 className="text-customBlack text-left font-medium" style={{marginTop:'15px'}}>persone nel team</h3>
                        </div>
                    </div>
                </div>
                <div className=" w-[100%] md:w-[25%] bg-customWhite">
                    <div className="flex">
                        <h1 className="text-textGrey text-5xl text-left font-extrabold" style={{marginRight:'10px'}}>04</h1>
                        <div className="flex flex-col">
                            <h1 className="text-customBlack text-5xl text-left font-medium">800</h1>
                            <h3 className="text-customBlack text-left font-medium" style={{marginTop:'15px'}}>tonnellaggio massimo presse</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
      );
}