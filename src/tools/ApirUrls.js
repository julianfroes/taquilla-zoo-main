import { createContext } from "react";

const host = 'https://apitaquilla-production.up.railway.app/api/';

export const ApiUrls = createContext({
  // Sales
  createSale: host + 'ventas',
  getSales: host + 'ventas',
  deleteVenta: host + 'ventas',  
  updateVenta: host + 'ventas/actualizar/',  

  // Offers
  getOffers: host + 'promocion',

  // Animals
  getAnimals: 'https://safe-current-production.up.railway.app/api/animals',
});