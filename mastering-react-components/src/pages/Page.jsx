import PropTypes from 'prop-types';

import Main from "../components/Main/Main"
import Header from "../components/Header/Header"

const Page = ({ children }) => {
  return (
    <>
        <Header title="Welcome to our Gallery!" />
        <Main />
        {children}
    </>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired, 
    PropTypes.arrayOf(PropTypes.element.isRequired), 
  ]).isRequired,
};

export default Page