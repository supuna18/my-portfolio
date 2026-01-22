export const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Copyright only */}
        <p className="text-gray-400">
          © {new Date().getFullYear()} Supuna Anjana. All rights reserved @2026.
        </p>

      </div>
    </footer>
  );
};