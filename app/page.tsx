"use client"
import CardIcon from "./ui/components/card-icon";
import Button from "./ui/components/button";
import Card from "./ui/components/card";
import CardDoubleColor from "./ui/components/card-double-color";
import Head from "next/head";


export default function Home() {


  return (
    <>
      <Head>
        <link rel="stylesheet" href="/path/to/your/css/icofont.min.css" />
      </Head>
      <div className="w-100 h-[40rem] flex items-center justify-center" style={{backgroundImage: "url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202) !important", backgroundPosition: "center"}}>
        <div className="text-right w-[70rem]">
          <h1 className="text-5xl font-extrabold">Dal progetto <br/>al prodotto</h1>
          <p>Grazie alla pluriennale esperienza, offriamo soluzioni a 360°<br/>
          per la progettazione e lo stampaggio di materie plastiche.</p>
        </div>
      </div>
      <div className="w-100 bg-customWhite flex-col flex items-center">
        <h2 className="text-4xl text-customBlack font-extrabold text-center">L azienda</h2>
        <p className="text-customBlack justify-center text-center">Nata dalla fusione tra due storiche società, Delta Components e ATS, DeltAts è una realtà importante nello stampaggio materie
        plastiche in provincia di Torino. La produzione è destinata principalmente a prodotti ad elevata tecnologia per il settore automotive.</p>
        <div style={{width: "20px", background: "blue", height: "3px", marginBottom:"20px"}}></div>
          <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 relative" style={{paddingRight:"15px", paddingLeft:"15px", marginBottom:"15px"}}>
            <CardIcon></CardIcon>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 relative" style={{paddingRight:"15px", paddingLeft:"15px", marginBottom:"15px"}}>
            <CardIcon></CardIcon>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 relative" style={{paddingRight:"15px", paddingLeft:"15px", marginBottom:"15px"}}>
            <CardIcon></CardIcon>
          </div>
        </div>
      </div>
      <div className="w-100 h-[25rem] flex items-center justify-center " style={{backgroundImage: "url(https://www.deltats.eu/wp-content/uploads/2019/06/bg-video.jpg?id=8629) !important", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className="w-[70rem] md:flex pl-10 pr-10">
          <div className="w-[80%]">
            <h1 className="text-5xl font-extrabold">Isola automatizzata per il co-stampaggio di connettori</h1>
          </div>
          <div className="xl:w-[100%] md:w-[20%] flex justify-center items-center" >
            <img style={{ width: "92px", height: "92px"}} src="https://www.deltats.eu/wp-content/uploads/2022/02/video-icon.png"/> 
          </div>
        </div>
      </div>
      <div className="w-100 flex items-center justify-center  bg-customWhite" style={{ paddingTop:"110px", paddingBottom: "45px"}}>
        <div className="w-[70rem] md:flex" style={{paddingLeft: "95px", paddingRight:"95px"}}>
          <div className="w-[50%] flex items-center justify-center">
            <img style={{ height: "90%"}} src="https://www.deltats.eu/wp-content/uploads/2019/06/pc-prod.jpg"/> 
          </div>
          <div className="md:w-[50%]" >
            <h1 className="text-5xl font-extrabold text-customBlack">I prodotti DeltAts</h1>
            <p style={{marginTop: "20px", marginBottom: "25px"}} className="text-customBlack">Grazie alla nostra tecnologia e flessibilità, siamo in grado di soddisfare ogni esigenza dei nostri clienti e produrre svariati prodotti per il settore automotive, tipo: frame, valvole controllo pressione, valvole antideflusso, canister per filtri carbone, controllo devio luci, oil cup-filler.</p>
            <Button text="Scopri"></Button>
          </div>
        </div>
      </div>
      <div className="w-100 flex items-center justify-center  bg-customWhite" style={{ paddingBottom: "45px"}}>
        <div className="w-[70rem] md:flex" style={{paddingLeft: "95px", paddingRight:"95px"}}>
          <div className="w-[30%] flex items-start justify-center">
            <h1 className="text-5xl font-extrabold text-customBlack">Know How</h1>
          </div>
          <div className="md:w-[70%] flex items-start justify-center" style={{borderLeft: "3px", borderColor: "#e2e2e2", borderStyle: "solid", paddingLeft: "15px", paddingRight: "15px"}} >
            <p  className="text-customBlack">La capacità di affrontare le diverse richieste dei clienti e la ricerca continua di innovazione rappresentano da sempre i punti di forza di DeltAts. Alta produttività ed efficienza combinate a elevata versatilità, ci permettono di essere partner affidabile per i maggiori produttori di componenti auto italiani ed esteri.</p>
          </div>
        </div>
      </div>
      <div className="w-100 bg-customWhite flex-col flex items-center">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 relative" style={{paddingRight:"15px", paddingLeft:"15px", marginBottom:"15px"}}>
            <Card></Card>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 relative" style={{paddingRight:"15px", paddingLeft:"15px", marginBottom:"15px"}}>
            <Card></Card>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 relative" style={{paddingRight:"15px", paddingLeft:"15px", marginBottom:"15px"}}>
            <Card></Card>
          </div>
        </div>
      </div>
      <div className="w-100 h-[30rem] flex items-center justify-center" style={{backgroundImage: "url(https://www.deltats.eu/wp-content/uploads/2019/06/bg-stampi.jpg?id=8617) !important", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", paddingRight: "10%", paddingLeft: "10%"}}>
        <div className="text-left">
          <h1 className="text-5xl font-extrabold text-customBlack">Stampi per il settore <br/> automobilistico</h1>
          <p className="text-customBlack" style={{marginTop: "25px !important", marginBottom: "20px !important", width: "58%"}}>Grazie alle macchine di cui dispone, DeltAts è in grado di produrre stampi dal più semplice al più complesso (stampi per stampaggio a bi-iniezione, per costampaggio plastica/metallo), utilizzando le più moderne tecnologie.</p>
          <Button text="Approfondisci"></Button>
        </div>
      </div>
      <div className="w-100 h-[30rem] flex items-center justify-center" style={{backgroundImage: "url(https://www.deltats.eu/wp-content/uploads/2019/06/bg-azienda.jpg?id=8634) !important", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", paddingRight: "10%", paddingLeft: "10%"}}>
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">Produzione stampi e stampaggio materie plastiche</h1>
          <h3 className="text-2xl font-extrabold"  style={{marginTop: "12px !important", marginBottom: "25px !important"}}>Reparto produttivo con presse dalle 25 alle 800 tonnellate e isole automatizzate.</h3>
          <Button text="Scopri"></Button>
        </div>
      </div>
      <div className="w-100 bg-customWhite flex-col flex items-center">
          <div className="flex flex-wrap" style={{paddingRight:"7%", paddingLeft:"7%", paddingTop: "100px", paddingBottom: "100px"}}>
            <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 relative">
              <CardDoubleColor
                doubleColor={true}
                img="https://www.deltats.eu/wp-content/uploads/2019/06/flag.png"
                title="Valore dell"
                subtitle="esperienza"
                text="Competenza e miglioramento continuo: questo è il metodo che utilizziamo per garantire i migliori risultati sia di prodotto sia di servizio ai nostri clienti."
              ></CardDoubleColor>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 relative">
              <CardDoubleColor
                doubleColor={false}
                img="https://www.deltats.eu/wp-content/uploads/2019/06/award.png"
                title="Massima"
                subtitle="qualità"
                text="Una realtà industriale attrezzata sia per le grandi produzioni in serie di particolari, sia per produzioni speciali, con lavorazioni che puntano alla massima qualità."
              ></CardDoubleColor>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 relative">
              <CardDoubleColor
                doubleColor={true}
                img="https://www.deltats.eu/wp-content/uploads/2019/06/chat.png"
                title="Interlocutore"
                subtitle="unico"
                text="DeltAts presidia tutto il processo per garantire qualità al cliente: progettazione e costruzione stampi per materie plastiche, stampaggio, co-stampaggio e lavorazioni speciali."
              ></CardDoubleColor>
            </div>
        </div>
      </div>
    </>
  );
}
