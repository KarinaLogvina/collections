const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            colors: {
                black: colors.black,
                white: colors.white,
                blue: colors.indigo,
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    }
}