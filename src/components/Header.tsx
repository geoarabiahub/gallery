const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Automated Mineralogy Gallery
          </h1>
          <p className="text-muted-foreground text-lg">
            High-resolution mineral imaging and analysis techniques
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;