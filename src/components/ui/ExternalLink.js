import Icon from 'components/ui/Icon';

const ExternalLink = ({ href, children, className = 'btn-outline', download = false }) => {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      className={className}
      download={download || undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
      <Icon name={download ? 'download' : 'arrowUpRight'} />
    </a>
  );
};

export default ExternalLink;
