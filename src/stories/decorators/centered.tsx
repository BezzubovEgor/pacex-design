import React from 'react';

export const centered = (Story: React.ComponentType) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Story />
    </div>
);
