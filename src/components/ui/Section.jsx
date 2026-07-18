const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
    <div className="section-content">
      <h2 id={`${id}-title`} className="section-title">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default Section;
