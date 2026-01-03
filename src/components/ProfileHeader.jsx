import React from 'react';
import { motion } from 'framer-motion';

const ProfileHeader = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem', textAlign: 'center' }}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="animate-float"
        style={{ marginBottom: '1rem' }}
      >
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid var(--color-primary)',
          boxShadow: 'var(--glow-primary)',
          position: 'relative'
        }}>
          <img 
            src="/gold_avatar.png" 
            alt="Gold Avatar" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </motion.div>
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glow-text"
        style={{ 
          fontSize: '2.5rem', 
          color: 'var(--color-primary)',
          marginBottom: '0.5rem',
          textTransform: 'uppercase'
        }}
      >
        GOLD
      </motion.h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ 
          color: 'var(--color-text-dim)',
          fontSize: '1.1rem',
          maxWidth: '300px'
        }}
      >
        Roblox Parkour Content Creator
      </motion.p>
    </div>
  );
};

export default ProfileHeader;
