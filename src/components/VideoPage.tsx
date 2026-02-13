import { YOUTUBE_VIDEO_ID } from '../config/constants';

interface VideoPageProps {
  onBack?: () => void;
}

export function VideoPage({ onBack }: VideoPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-romantic font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-8">
          Thank you! 💕
        </h1>
        
        <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&start=10&rel=0`}
            title="Valentine Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {onBack && (
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            ← Back
          </button>
        )}

        <p className="text-gray-500 text-sm mt-6">
          Made with 💕
        </p>
      </div>
    </div>
  );
}
