// export const API_KEY = process.env.REACT_APP_API_KEY;
export const IMG_BASE = "https://image.tmdb.org/t/p/original";
export const BASE_URL = "https://api.themoviedb.org/3";
export const authOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2ZiZjM5YjU3ODk5Y2QwZmVlNDZmMmFiMGNmYjk2NCIsInN1YiI6IjYxODZhODMyMTNhMzg4MDA2NjA2ZDI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nbth2TeJfiI6nAyx-lTvYcBb_onbiFiEOIMe8cfciA4",
  },
};

//CALCULATING TIME IN HOURS AND MINUTES
export const calcMovieRuntime = (dividend, divisor) => {
  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;
  return { quotient, remainder };
};

//ABBREVATING CURRENCY
export const formatNumber = (number) => {
  if (number >= 1e12) {
    return (number / 1e12).toFixed(0) + "T";
  } else if (number >= 1e9) {
    return (number / 1e9).toFixed(0) + "B";
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(0) + "M";
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(0) + "K";
  } else {
    return number && number.toString();
  }
};
