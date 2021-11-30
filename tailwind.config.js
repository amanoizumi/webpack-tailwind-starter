module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    safelist: [
      'text-center',
      'lg: text-right'
    ]
  },
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xx': '1000px'
      },
      colors: {
        fill: '#FFFF'
      },
    },
  },
  variants: {
    // 開啟 JIT 後就不用寫這段
    extend: {},
  },
  plugins: [],
}
