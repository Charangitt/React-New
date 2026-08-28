import ProductCard from "./ProductCard";

function App() {

  const products = [
  { id: 1, name: "Wireless Headphones", price: 2499, category: "Electronics", inStock: true, rating: 4 },
  { id: 2, name: "Running Shoes", price: 3499, category: "Footwear", inStock: false, rating: 5 },
  { id: 3, name: "Coffee Mug", price: 499, category: "Home", inStock: true, rating: 3 },
  { id: 4, name: "Notebook", price: 199, category: "Stationery", inStock: true, rating: 4 },
  { id: 5, name: "Smart Watch", price: 5999, category: "Electronics", inStock: false, rating: 5 },
];

  return (
    <div>
      {products.map((item,index)=><ProductCard key={index} props={item}/>)}
    </div>
  );
}

export default App;