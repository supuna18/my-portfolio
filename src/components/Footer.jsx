
export const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Supuna Anjana. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};