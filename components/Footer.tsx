export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center space-y-2">
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} | Sampson Havor | All rights reserved
        </p>
        <p className="text-xs text-gray-400">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
