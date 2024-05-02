import ArrowRightIcon from "../icon/arrow-right";

const Footer = () => {
    return (
      <footer className="bg-customBlue text-gray-300 py-12">
        <div className="container mx-auto py-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">DeltAts</h2>
              <div className="space-y-2">
                <p>Progettazione, produzione stampi e stampaggio materie plastiche.</p>
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Società</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <a href="#" className="hover:text-gray-200" style={{marginLeft: '3px'}}>Azienda</a>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <a href="#" className="hover:text-gray-200" style={{marginLeft: '3px'}}>Qualità</a>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <a href="#" className="hover:text-gray-200" style={{marginLeft: '3px'}}>Contatti</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Attività</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <a href="#" className="hover:text-gray-200" style={{marginLeft: '3px'}}>Co-engineering</a>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <a href="#" className="hover:text-gray-200" style={{marginLeft: '3px'}}>Analisi e studio dei materiali</a>
                </li>
                <li className="flex items-center">
                  <ArrowRightIcon size='15px'></ArrowRightIcon>
                  <a href="#" className="hover:text-gray-200" style={{marginLeft: '3px'}}>Stampi</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1" >
              <h2 className="text-lg font-semibold mb-4">Contatti</h2>
                <p className="space-y-2">
                  <strong>Indirizzo</strong><br></br>
                  Via Provinciale 35, 10010 Loranzè (Torino) Italia<br></br>
                  <strong>Telefono:</strong> (+39) 0125 538091
                </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex justify-between py-7">
          <div>
            <div>
              <p>DeltAts Srl - P.iva / C.F. 06408910013 - <a data-href="#moove_gdpr_cookie_modal" aria-label="Imposta cookies">Imposta cookies</a> - Credits <br></br><a href="https://www.dexanet.com" target="_blank">Dexa - Ittrio</a></p>
            </div>
          </div>
          <div>
            <div>
              <ul className="container mx-auto flex">
                <li ><a target="_blank" className="mr-4" href="https://www.deltats.eu/wp-content/uploads/2023/01/Privacy-DELTATS.pdf">Privacy</a></li>
                <li ><a href="https://www.deltats.eu/cookies/">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;