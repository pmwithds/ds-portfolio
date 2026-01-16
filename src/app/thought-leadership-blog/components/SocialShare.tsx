import Icon from '@/components/ui/AppIcon';

interface SocialShareProps {
  articleTitle: string;
}

const SocialShare = ({ articleTitle }: SocialShareProps) => {
  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: 'LinkIcon',
      color: 'hover:bg-brand-blue hover:text-white',
      url: '#'
    },
    {
      name: 'Twitter',
      icon: 'ChatBubbleLeftIcon',
      color: 'hover:bg-brand-blue hover:text-white',
      url: '#'
    },
    {
      name: 'Facebook',
      icon: 'ShareIcon',
      color: 'hover:bg-brand-blue hover:text-white',
      url: '#'
    },
    {
      name: 'Email',
      icon: 'EnvelopeIcon',
      color: 'hover:bg-brand-red hover:text-white',
      url: '#'
    }
  ];

  return (
    <div className="bg-card rounded-lg shadow-subtle p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading font-semibold text-lg text-foreground">Share Insights</h3>
        <Icon name="ShareIcon" size={20} className="text-primary" />
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        Help fellow PMs discover valuable content
      </p>
      
      <div className="flex flex-wrap gap-3">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className={`flex items-center space-x-2 px-4 py-2 bg-muted rounded-md text-foreground transition-smooth ${link.color}`}
            aria-label={`Share on ${link.name}`}
          >
            <Icon name={link.icon as any} size={18} />
            <span className="text-sm font-medium">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;