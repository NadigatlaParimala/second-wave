const About = () => {
  return (
    <section className="py-20 px-6 bg-coffee-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-coffee-primary">
          The Second Wave Movement
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Hi These are the new changes for this website
          </p>
          
          <p>
            The second wave of coffee represents a pivotal moment when coffee transformed 
            from a commodity to a craft. It's about understanding the origin, the process, 
            and the artistry behind every cup.
          </p>
          <p>
            At Second Wave, we honor this tradition by sourcing premium beans directly 
            from sustainable farms, roasting them to perfection, and crafting each drink 
            with precision and passion. Every cup tells a story of the hands that grew, 
            processed, and prepared it.
          </p>
          <p className="text-coffee-primary font-semibold">
            We believe great coffee brings people together, creates moments of connection, 
            and elevates the everyday into something extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;