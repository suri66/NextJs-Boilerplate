import AppLayout from '../components/core/AppLayout/AppLayout';
import AuthLayout from 'components/core/AuthLayout';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.scss';

import rootReducer from '../redux';
import { AUTH_ROUTES } from 'config/constant';

const store = createStore(rootReducer, applyMiddleware(thunk));

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  let currentRoutePath = router.pathname;
  let appContent = <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
  if(AUTH_ROUTES.includes(currentRoutePath)) {
    appContent = <AuthLayout>
    <Component {...pageProps} />
  </AuthLayout>
  }
  return (
  <Provider store={store}>
    {appContent}
  </Provider>
)};

MyApp.propTypes = {
  pageProps: PropTypes.shape({}).isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
