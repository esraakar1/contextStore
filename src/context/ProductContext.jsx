// context yapısı uygulama içerisinde verileri prop kullanmadan ihtiyaç duyulan bileşenlere aktarmak için kullanılır 

import { createContext, useEffect, useState } from "react";
import api from "../API";

export const ProductContext = createContext();

// context yapısında tutulacak verileri bileşenlere aktaracak yapıyı tanımla 

export const ProductProvider = ({children}) => {
   const [products, setProducts] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState("all");

//    api isteği at 

useEffect(() => {
    // eğer seçili bir kategori varsa buna istek at yoksa tüm ürünlere istek at 
     
    const url = selectedCategory === "all" ? "/products" : `/products/Category/${selectedCategory}`;

    api.get(url)
    .then((res) => setProducts(res.data));
    
}, [selectedCategory]);
   
    return(
        <ProductContext.Provider value = {{products, setProducts, selectedCategory, setSelectedCategory}} >{children}
        </ProductContext.Provider>
    ) ;
};

export default ProductProvider ;