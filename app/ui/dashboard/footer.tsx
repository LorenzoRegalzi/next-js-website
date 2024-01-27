const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-200">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">Services</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Contact</h2>
              <ul className="space-y-2">
                <li>Email: example@example.com</li>
                <li>Phone: 123-456-7890</li>
                <li>Address: 123 Street, City</li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Social</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-200">Facebook</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">Twitter</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;