export const PRODUCT_COLORS: COLORS = {
  red: {
    background: 'red',
    text: 'black'
  },
  black: {
    background: 'black',
    text: 'white'
  },
  blue: {
    background: 'blue',
    text: 'black'
  },
  white: {
    background: 'white',
    text: 'black'
  }
};

interface COLORS {
  red: ColorPrors;
  black: ColorPrors;
  blue: ColorPrors;
  white: ColorPrors;
}

interface ColorPrors {
  background: string;
  text: string;
}