/**
 * @name AppLayout.js
 * @description App layout wrapper
 * @version 0.0.0
 */

import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NextHead from '../NextHead/NextHead';

const AppLayout = ({ children }) => (
  <div>
    <NextHead />
    <Header />
    <div>{children}</div>
    <ToastContainer />
    <Footer />
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
