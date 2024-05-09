import React, { createContext, useState } from 'react'

export const ShopContext = createContext(null);

export const ShopContextProvider = (items) => {

    const [btcAmount, setBtcAmount] = useState(null);

    
    const contextValue = {btcAmount, setBtcAmount}
    

  return (
    <ShopContext.Provider value={contextValue}>{items.children}</ShopContext.Provider>
  )
}
