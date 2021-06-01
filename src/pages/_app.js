import AppLayout from 'components/core/AppLayout/AppLayout';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
);

MyApp.propTypes = {
  pageProps: PropTypes.shape({}).isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
