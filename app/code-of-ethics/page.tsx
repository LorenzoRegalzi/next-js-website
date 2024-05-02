"use client";

import Button from "../ui/components/button";
import CardIcon from "../ui/components/card-icon";
import CardIconNoColor from "../ui/components/card-icon-no-color";



export default function CodeOfEthics() {


  return (
    <>
      <div className="w-100 h-[20rem] flex items-center justify-center" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202) !important', backgroundPosition: 'center'}}>
        <div className="text-center w-[70rem]">
          <h1 className="text-5xl font-extrabold">Codice Etico</h1>
        </div>
      </div>
      <div className="w-100 flex items-center justify-center  bg-customWhite" style={{ paddingTop:'110px', paddingBottom: '45px'}}>
        <div className="w-[70rem] md:flex p-3" style={{paddingLeft: '95px', paddingRight:'95px'}}>
          <div className="w-[100%] md:w-[50%] flex flex-col items-center justify-center">
            <p  className="text-customBlack" style={{marginBottom:'20px'}}>Il Codice Etico è uno degli strumenti della responsabilità sociale delle imprese per la diffusione e attuazione di buone pratiche di comportamento.</p>
            <p className="text-customBlack">Il nostro codice nasce dalla convinzione che essere responsabili significa fondare la relazione tra le persone sull’obiettivo del bene comune, condividendo un sistema di valori a cui ogni persona aderisce in modo spontaneo, all’interno dell’organizzazione.</p>
            <p style={{marginTop:'20px'}} className="text-customBlack">Vuole essere un punto di riferimento e una guida per chi lavora in DeltAts e per chi ha interesse a perseguirne la Missione.
                Esprime impegni che ogni collaboratrice e collaboratore di DeltAts – ognuno secondo il proprio ruolo e le proprie responsabilità – si assume nel condurre ogni attività aziendale, verso tutti i portatori di interesse dell’impresa.</p>
          </div>
          <div className="md:w-[50%] relative">
            <CardIconNoColor></CardIconNoColor>
            <Button text="Scarica codice etico"></Button>
          </div>
        </div>
      </div>
    </>
  );
}
