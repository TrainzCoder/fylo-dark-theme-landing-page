module.exports = {
  purge: {
    // enabled:true,
    content: ["./*.html"]
   },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'introEmail':'hsl(217, 28%, 15%)',
        'main':'hsl(218, 28%, 13%)',
        'footer':'hsl(216, 53%, 9%)',
        'testimonial':'hsl(219, 30%, 18%)',
        'white':'hsl(0, 0%, 100%)',
        'error':'hsl(0, 100%, 63%)',
        'link':'#62e0d9'
      },
      backgroundImage: theme => ({
        'buttonCta': "var(--buttonCta)",
        'ctaHover': "var(--ctaHover)",
        'curvyDesktop': "url('../images/bg-curvy-desktop.svg')",
        'curvyMobile': "url('../images/bg-curvy-mobile.svg')"
      }),
      fontFamily: {
        raleway: ['Raleway','sans-serif'],
        openSans: ['Open Sans','sans-serif']
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover'],
      fontWeight: ['hover']
    },
  },
  plugins: [],
}
