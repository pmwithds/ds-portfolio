import Icon from '@/components/ui/AppIcon';

interface NewsletterCTAProps {
  onSubscribe: (email: string) => void;
}

const NewsletterCTA = ({ onSubscribe }: NewsletterCTAProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    if (email) {
      onSubscribe(email);
      e.currentTarget.reset();
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-lg p-8 lg:p-12 mb-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent bg-opacity-20 rounded-full mb-6">
          <Icon name="EnvelopeIcon" size={32} className="text-white" />
        </div>
        
        <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
          PM Insights Newsletter
        </h2>
        
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Get frameworks, methodologies, and strategic insights delivered monthly. Join 2,500+ product managers who stay ahead of industry trends.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            name="email"
            placeholder="your.email@company.com"
            required
            className="flex-1 px-6 py-4 rounded-md bg-primary-foreground bg-opacity-10 border border-primary-foreground border-opacity-20 text-primary-foreground placeholder-primary-foreground placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-accent text-base"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-accent text-accent-foreground rounded-md font-semibold text-base hover:bg-opacity-90 transition-smooth whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>
        
        <p className="text-sm opacity-80 mt-4">
          No spam. Unsubscribe anytime. Read our privacy policy.
        </p>
      </div>
    </section>
  );
};

export default NewsletterCTA;