import { useState } from 'react';
import { ValentineCard } from './components/ValentineCard';
import { VideoPage } from './components/VideoPage';

function App() {
  const [showVideo, setShowVideo] = useState(false);

  const handleYesClick = () => {
    setShowVideo(true);
  };

  const handleBack = () => {
    setShowVideo(false);
  };

  if (showVideo) {
    return <VideoPage onBack={handleBack} />;
  }

  return <ValentineCard onYesClick={handleYesClick} />;
}

export default App;
