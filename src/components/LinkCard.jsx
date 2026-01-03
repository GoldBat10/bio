import React from 'react';
import { motion } from 'framer-motion';

const LinkCard = ({ icon: Icon, title, url, index }) => {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 + (index * 0.1) }}
            whileHover={{ scale: 1.02, backgroundColor: 'var(--color-surface-hover)' }}
            whileTap={{ scale: 0.98 }}
            className="glass-panel"
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                margin: '0.8rem 0',
                width: '100%',
                textDecoration: 'none',
                color: 'var(--color-text)',
                transition: 'background-color 0.2s',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {Icon && (
                <div style={{
                    marginRight: '1rem',
                    fontSize: '1.5rem',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Icon />
                </div>
            )}
            <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{title}</h3>
            </div>
            <div style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
                →
            </div>
        </motion.a>
    );
};

export default LinkCard;
