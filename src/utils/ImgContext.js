import React, { createContext, useState } from "react";
const ImgContext = createContext();

const ImgProvider = ({ children }) => {
  const [unsplashImage, setUnsplashImage] = useState();
    
  return (
    <ImgContext.Provider value={{ unsplashImage, setUnsplashImage }}>
      {children}
    </ImgContext.Provider>
  );
};

export {ImgProvider, ImgContext}