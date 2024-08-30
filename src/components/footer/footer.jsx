import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-[100px]">
      <div className="container mx-auto px-4">
        <div className="w-[90%] m-auto flex justify-around">

          <div className="md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Exclusive</h3>
            <p className="mb-4 font-medium">Subscribe</p>
            <p className="mb-6 text-sm">Get 10% off your first order</p>
            <form className="flex border-solid border-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full text-[#FAFAFA] bg-transparent rounded-l-sm focus:outline-none"
              />
              <button className="text-[#FAFAFA] p-2 rounded-r-sm">
                ➔
              </button>
            </form>
          </div>

          <div className="md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <p className="mb-4 text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="mb-4 text-sm">exclusive@gmail.com</p>
            <p className="mb-4 text-sm">+88015-88888-9999</p>
          </div>

          <div className="md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Account</h3>
            <p className="mb-4 text-sm">My Account</p>
            <p className="mb-4 text-sm">Cart</p>
            <p className="mb-4 text-sm">Wishlist</p>
            <p className="mb-4 text-sm">Shop</p>
          </div>

          <div className="md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
            <p className="mb-4 text-sm">Privacy Policy</p>
            <p className="mb-4 text-sm">Terms Of Use</p>
            <p className="mb-4 text-sm">FAQ</p>
            <p className="mb-4 text-sm">Contact</p>
          </div>

          <div className="md:w-1/5">
            <h3 className="text-xl font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <FacebookIcon />
              </a>
              <a href="#" className="hover:text-gray-400">
                <TwitterIcon />
              </a>
              <a href="#" className="hover:text-gray-400">
                <InstagramIcon />
              </a>
              <a href="#" className="hover:text-gray-400">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-sm border-t-2 flex justify-center border-gray-900">
          <p className='mt-[20px] text-[grey]'>© Copyright Rimel 2022. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
