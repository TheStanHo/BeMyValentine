import { YesButton } from './YesButton';
import { MovingButton } from './MovingButton';

interface ValentineCardProps {
  onYesClick: () => void;
}

export function ValentineCard({ onYesClick }: ValentineCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center relative overflow-hidden">
        {/* Decorative hearts */}
        <div className="absolute top-4 left-4 text-4xl opacity-20">💕</div>
        <div className="absolute top-8 right-8 text-3xl opacity-20">💖</div>
        <div className="absolute bottom-6 left-6 text-3xl opacity-20">💗</div>
        <div className="absolute bottom-8 right-4 text-4xl opacity-20">💝</div>

        <h1 className="text-4xl md:text-6xl font-romantic font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-6">
          Will you be my valentine?
        </h1>

        <div className="mt-12 mb-8 flex flex-col sm:flex-row gap-6 items-center justify-center relative min-h-[120px]">
          <YesButton onClick={onYesClick} />
          <MovingButton />
        </div>

        <p className="text-gray-500 text-sm mt-8">
          Choose wisely... 💕
        </p>
      </div>
    </div>
  );
}
