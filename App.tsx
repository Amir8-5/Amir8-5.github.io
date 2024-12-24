import React from 'react';
import { WelcomePage } from './components/WelcomePage';
import { PersonPage } from './components/PersonPage';
import { FamilySelection } from './components/FamilySelection';

function App() {
  const familyMembers = [
    {
      name: "Mom",
      description: "The heart of our family, always bringing warmth and love to our home. Your Christmas cookies are legendary and your holiday spirit is contagious. Thank you for making every Christmas magical!",
      images: [
        "https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      name: "Dad",
      description: "Our family's rock and Santa's best helper. Your dedication to making Christmas special for us never goes unnoticed. From putting up the lights to finding the perfect tree, you make the season bright!",
      images: [
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1508857650881-95c4e1c5f1b9?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      name: "Little One",
      description: "The joy and laughter you bring to our Christmas celebrations make everything more special. Your excitement for presents, carols, and holiday magic fills our home with pure happiness!",
      images: [
        "https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1512850183-6d7990f42385?auto=format&fit=crop&q=80&w=800"
      ]
    }
  ];

  return (
    <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll">
      <WelcomePage />
      <FamilySelection familyMembers={familyMembers} />
      
      {familyMembers.map((member, index) => (
        <div 
          key={member.name} 
          id={`person-${member.name.toLowerCase()}`} 
          className="snap-start"
        >
          <PersonPage {...member} index={index} />
        </div>
      ))}
    </div>
  );
}

export default App;