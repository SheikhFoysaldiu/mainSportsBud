import { AppleOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-evenly items-center footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
        <div className='flex justify-between items-center'>
          <FacebookOutlined style={{ fontSize: '25px', color: '#08c' }} />
          <GoogleOutlined style={{ fontSize: '25px', color: 'green' }} />
          <AppleOutlined style={{ fontSize: '25px', color: 'black' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
