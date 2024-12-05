import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type ,onClick}) {
  const base =
    'inline-block text-sm rounded-full bg-orange-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-orange-300 focus:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-2 md:px-4 md:py-2',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round:base+'inline-block px-2.5 py-1 text-base rounded-full -gray-200 font-semibold text-gray-700 hover:bg-gray-300 active:bg-gray-400 transition  sm:px-3 sm:py-1.5 sm:text-sm  md:px-2.5 md:py-1 md:text-xs',
    secondary:
      'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-4 md:py-2',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
    if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
