import AppLayout from '../components/core/AppLayout/AppLayout';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import rootReducer from '../redux';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </Provider>
);

MyApp.propTypes = {
  pageProps: PropTypes.shape({}).isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
