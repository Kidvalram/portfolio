module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    
    extend: {
      
      colors: {
        oxford_blue: "#14213D",
        ivory: "#FEFFEE",
        rich_black: "#0C1324",
        grullo: "#B4A093",
        marigold: "#EAA327 !important",
        marigold_pressed: "#D89725 !important",
        drop: "rgba(138,136,137,0.72)",
      },
      
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
        'playfair': ["Playfair", "sans-serif"],
        'trirong': ["Trirong", "sans-serif"],
      },
      
      boxShadow: {
        'right': '5px 0 5px -5px rgba(138,136,137,0.72)',
        'left' : '-5px 0 5px -5px rgba(138,136,137,0.72)',
        'top' : 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
        'bottom' : 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        'inner-cards' : '25px 0px 15px -25px rgba(0,0,0,0.45) inset , -25px 0px 15px -25px rgba(0,0,0,0.45) inset',
        'inner-container' : 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px 1px 1px 1px inset',
        'inner-bottom': 'rgb(204, 219, 232) 0px -12px 8px -10px inset'
      }
      
    },
    
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1680px',
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
    },
}
