/* Phoenix UI Kit © Skyler J. Jones */

// InteractiveFontShowcase.tsx
import React, { useState } from 'react';

const fonts = [
  // 🖋️ Serif (classic, elegant, readable)
  { name: 'Garamond', family: 'EB Garamond, serif', class: 'font-garamond', category: '🖋️ Serif', description: 'Old-style, bookish warmth' },
  { name: 'Bodoni', family: 'Bodoni Moda, serif', class: 'font-bodoni', category: '🖋️ Serif', description: 'High contrast, fashion/editorial' },
  { name: 'Playfair Display', family: 'Playfair Display, serif', class: 'font-playfair', category: '🖋️ Serif', description: 'Stylish, modern serif for headlines' },
  { name: 'Merriweather', family: 'Merriweather, serif', class: 'font-merriweather', category: '🖋️ Serif', description: 'Web-friendly, chunky serif' },
  
  // 🔤 Sans-Serif (modern, geometric, humanist)
  { name: 'Futura', family: 'Quicksand, sans-serif', class: 'font-futura', category: '🔤 Sans-Serif', description: 'Geometric, Bauhaus-inspired' },
  { name: 'Avenir', family: 'Nunito Sans, sans-serif', class: 'font-avenir', category: '🔤 Sans-Serif', description: 'Softer geometric, versatile' },
  { name: 'DIN', family: 'Work Sans, sans-serif', class: 'font-din', category: '🔤 Sans-Serif', description: 'Industrial, technical clarity' },
  { name: 'Roboto', family: 'Roboto, sans-serif', class: 'font-roboto', category: '🔤 Sans-Serif', description: 'Clean, digital-native' },
  
  // ✨ Display / Decorative (unique personality)
  { name: 'Lobster', family: 'Lobster, cursive', class: 'font-lobster', category: '✨ Display', description: 'Bold script, retro diner feel' },
  { name: 'Pacifico', family: 'Pacifico, cursive', class: 'font-pacifico', category: '✨ Display', description: 'Casual handwritten script' },
  { name: 'Oswald', family: 'Oswald, sans-serif', class: 'font-oswald', category: '✨ Display', description: 'Condensed, strong headlines' },
  { name: 'Abril Fatface', family: 'Abril Fatface, cursive', class: 'font-abril', category: '✨ Display', description: 'Dramatic serif, poster-style' },
  { name: 'Bangers', family: 'Bangers, cursive', class: 'font-bangers', category: '✨ Display', description: 'Comic-style, playful energy' },
  { name: 'Orbitron', family: 'Orbitron, sans-serif', class: 'font-orbitron', category: '✨ Display', description: 'Futuristic, sci-fi aesthetic' },
  { name: 'Blackletter', family: 'UnifrakturMaguntia, cursive', class: 'font-blackletter', category: '✨ Display', description: 'Medieval, gothic vibe' },
];

export const InteractiveFontShowcase: React.FC = () => {
  const [fontSize, setFontSize] = useState('1.5rem');
  const [fontBold, setFontBold] = useState(false);
  const [fontItalic, setFontItalic] = useState(false);
  const [fontUnderline, setFontUnderline] = useState(false);
  const [sampleText, setSampleText] = useState('The quick brown fox jumps over the lazy dog');

  return (
    <div className="phoenix-interactive-fonts phoenix-core" data-phoenix-kit="true">
      {/* Controls */}
      <div className="controls mb-8 p-6 bg-[#0A0A0A] rounded-lg border border-[#2D2D2D]">
        <h4 className="text-sm font-semibold text-gray-200 mb-4">Style Controls</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Font Size</label>
            <select 
              className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#2D2D2D] rounded-lg text-white"
              value={fontSize} 
              onChange={(e) => setFontSize(e.target.value)}
            >
              <option value="0.75rem">Small (12px)</option>
              <option value="1rem">Base (16px)</option>
              <option value="1.5rem">Large (24px)</option>
              <option value="2rem">XL (32px)</option>
              <option value="3rem">2XL (48px)</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Style Options</label>
            <div className="flex gap-2">
              <button 
                className={`px-3 py-2 rounded-lg font-bold ${fontBold ? 'bg-[#FF4D4F] text-white' : 'bg-[#2D2D2D] text-gray-400'}`}
                onClick={() => setFontBold(!fontBold)}
              >
                B
              </button>
              <button 
                className={`px-3 py-2 rounded-lg italic ${fontItalic ? 'bg-[#FF4D4F] text-white' : 'bg-[#2D2D2D] text-gray-400'}`}
                onClick={() => setFontItalic(!fontItalic)}
              >
                I
              </button>
              <button 
                className={`px-3 py-2 rounded-lg underline ${fontUnderline ? 'bg-[#FF4D4F] text-white' : 'bg-[#2D2D2D] text-gray-400'}`}
                onClick={() => setFontUnderline(!fontUnderline)}
              >
                U
              </button>
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Sample Text</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#2D2D2D] rounded-lg text-white"
              value={sampleText}
              onChange={(e) => setSampleText(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Font Grid */}
      <div className="font-grid space-y-6">
        {fonts.map((font) => (
          <div 
            key={font.name}
            className="font-card p-6 bg-[#0A0A0A] rounded-lg border border-[#2D2D2D] hover:border-[#FF4D4F] transition-all cursor-pointer hover:-translate-y-1"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-semibold text-[#FF4D4F]">{font.name}</h4>
              <span className="text-xs px-2 py-1 bg-[#FF4D4F]/10 text-[#FF4D4F] rounded border border-[#FF4D4F]/20">
                {font.category}
              </span>
            </div>
            <div 
              style={{ 
                fontFamily: font.family,
                fontSize: fontSize,
                fontWeight: fontBold ? 700 : 400,
                fontStyle: fontItalic ? 'italic' : 'normal',
                textDecoration: fontUnderline ? 'underline' : 'none',
              }}
              className="text-white mb-4"
            >
              {sampleText}
            </div>
            <div className="flex justify-between items-center p-3 bg-[#1F1F1F] rounded-lg">
              <code className="text-xs text-gray-400">{font.class}</code>
              <button className="text-xs px-3 py-1 bg-[#2D2D2D] text-white rounded hover:bg-[#3D3D3D]">
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};