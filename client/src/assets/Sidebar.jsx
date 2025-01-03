import React from 'react';

function Sidebar() {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 p-4">
      <a href="https://github.com/BrandonFors" target="_blank"><img src="/icons/github.svg" className="w-10 h-10" /></a>
      <a href="https://www.linkedin.com/in/brandon-forseth/" target="_blank"><img src="/icons/linkedin.svg" className="w-10 h-10" /></a>
      <a href="mailto:brandonfor77@gmail.com"><img src="/icons/gmail.svg" className="w-10 h-10" /></a>
    </div>
  );
}

export default Sidebar;
