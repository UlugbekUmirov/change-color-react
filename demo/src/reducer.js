const reducer = (state, { type, payload = 50 }) => {
  const limitRGB = (num) => (num < 0 ? 0 : num > 225 ? 225 : num);
  switch (type) {
    case "INCREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r + payload),
      };
    case "DICREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r - payload),
      };
    case "INCREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g + payload),
      };
    case "DICREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g - payload),
      };
    case "INCREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b + payload),
      };
    case "DICREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b - payload),
      };

    default:
      return state;
  }
};
export default reducer;
