import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import './layout.css';
const Layout = ({ children }) => {

    const [background, setBackground] = useState(false);
    const layout = document.querySelector('.layout');
    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            setBackground(true)
        } else {
            setBackground(false)
        }
      });
    }, [layout])

  return (
    <div>
        <div className={background ? 'layout active' : 'layout'}>
            <Header />
        </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
