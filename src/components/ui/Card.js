const Card = ({ as: Element = 'article', className = '', children }) => (
  <Element className={`card ${className}`}>{children}</Element>
);

export default Card;
