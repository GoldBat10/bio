import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import LinkCard from './components/LinkCard';
import { FaYoutube, FaDiscord, FaTiktok, FaGamepad, FaTwitter } from 'react-icons/fa';

function App() {
  const links = [
    { title: 'Subscribe on YouTube', url: 'https://youtube.com', icon: FaYoutube },
    { title: 'My Parkour Games', url: 'https://roblox.com', icon: FaGamepad },
    { title: 'Join the Discord', url: 'https://discord.com', icon: FaDiscord },
    { title: 'Follow on TikTok', url: 'https://tiktok.com', icon: FaTiktok },
    { title: 'Twitter Updates', url: 'https://twitter.com', icon: FaTwitter },
  ];

  return (
    <div style={{
      width: '100%',
      maxWidth: '480px',
      margin: '0 auto',
      paddingBottom: '2rem'
    }}>
      <ProfileHeader />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '0 1rem'
      }}>
        {links.map((link, index) => (
          <LinkCard
            key={index}
            index={index}
            title={link.title}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </div>

      <div style={{
        marginTop: '3rem',
        textAlign: 'center',
        opacity: 0.4,
        fontSize: '0.8rem'
      }}>
        © 2024 Gold Content
      </div>
    </div>
  );
}

export default App;
