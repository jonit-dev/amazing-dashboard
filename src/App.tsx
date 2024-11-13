import { useState } from 'react';
import { clsx } from 'clsx';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={clsx(
      'min-h-screen flex',
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#FDF8F3]'
    )}>
      <Sidebar isDarkMode={isDarkMode} />
      <MainContent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}

export default App;