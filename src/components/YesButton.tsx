interface YesButtonProps {
  onClick: () => void;
}

export function YesButton({ onClick }: YesButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-pink-600 hover:to-rose-600 active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-300"
    >
      Yes! 💕
    </button>
  );
}
