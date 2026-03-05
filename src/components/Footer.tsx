const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Gaurav Kalane
        </p>
      </div>
    </footer>
  );
};

export default Footer;
