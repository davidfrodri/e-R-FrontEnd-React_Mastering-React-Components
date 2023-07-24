import PropTypes from 'prop-types';

const Footer = ({ title="Footer title", copyright}) => {
  return (
    <footer id="footer" className="flex flex-col justify-center items-center h-150 gap-10 py-10 bg-neutral-700 text-white">
        <p className='font-mono text-4xl'>{title}</p>
        <p className='font-mono text-zinc-500'>{copyright || `Copyright ${new Date().getFullYear()}`}</p>
    </footer>
  )
}

Footer.propTypes = {
  title: PropTypes.string,
};

export default Footer