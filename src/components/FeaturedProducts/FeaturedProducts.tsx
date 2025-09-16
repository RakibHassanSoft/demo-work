
import { FaStar, FaStarHalfAlt, FaTruck, FaHeadset, FaUndoAlt, FaLock } from 'react-icons/fa';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Fresh Strawberry',
      category: 'Fruits',
      price: 45,
      originalPrice: 58,
      weight: '500g',
      image: 'https://via.placeholder.com/400x300.png?text=Fresh+Strawberry',
      rating: 4.5,
      tag: 'NEW',
    },
    {
      id: 2,
      name: 'Fresh Cauliflower',
      category: 'Vegetables',
      price: 10,
      originalPrice: 12,
      weight: '1 kg',
      image: 'https://via.placeholder.com/400x300.png?text=Fresh+Cauliflower',
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Walnut Dry Fruit',
      category: 'Dry Fruit',
      price: 5,
      originalPrice: 8,
      weight: '1 kg',
      image: 'https://via.placeholder.com/400x300.png?text=Walnut+Dry+Fruit',
      rating: 3.5,
      tag: 'SALE',
      note: '2kg left',
    },
    {
      id: 4,
      name: 'Vegetable Pickles',
      category: 'Pickles',
      price: 25,
      originalPrice: 39,
      weight: '2 kg',
      image: 'https://via.placeholder.com/400x300.png?text=Vegetable+Pickles',
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Fresh Apples',
      category: 'Fruits',
      price: 10,
      originalPrice: 12,
      weight: '1 kg',
      image: 'https://via.placeholder.com/400x300.png?text=Fresh+Apples',
      rating: 4.5,
    },
  ];

  const benefits = [
    {
      icon: <FaTruck className="text-2xl text-teal-500" />,
      title: 'Free Shipping',
      description: 'Free shipping on all US order or above $200',
    },
    {
      icon: <FaHeadset className="text-2xl text-teal-500" />,
      title: '24X7 Support',
      description: 'Contact us 24 hours live support, 7 days in a week',
    },
    {
      icon: <FaUndoAlt className="text-2xl text-teal-500" />,
      title: '30 Days Return',
      description: 'Simply return it within 30 days for an exchange',
    },
    {
      icon: <FaLock className="text-2xl text-teal-500" />,
      title: 'Payment Secure',
      description: 'Contact us 24 hours live support, 7 days in a week',
    },
  ];

  const renderStars = (rating : any) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <section className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <FaStar className="text-blue-500" />
          <h2 className="text-3xl font-semibold text-gray-800">Feature Products</h2>
        </div>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a href="#" className="px-4 py-2 rounded-lg bg-teal-500 text-white shadow-lg">New Arrivals</a>
          <a href="#" className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-200">Best Sellers</a>
          <a href="#" className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-200">Top Rates</a>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Features Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden relative group">
            {product.tag && (
              <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full ${product.tag === 'NEW' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'}`}>
                {product.tag}
              </div>
            )}
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-500 text-sm">{product.category}</p>
              <h3 className="text-lg font-semibold text-gray-800 my-1">{product.name}</h3>
              <div className="flex items-center space-x-1 text-yellow-400 text-sm mb-2">
                {renderStars(product.rating)}
              </div>
              <div className="flex justify-between items-end">
                <div className="flex items-end">
                  <p className="text-xl font-bold text-gray-800">${product.price}</p>
                  {product.originalPrice && <p className="text-xs text-gray-400 line-through ml-1">${product.originalPrice}</p>}
                </div>
                <p className="text-sm text-gray-500">{product.weight}</p>
              </div>
              {product.note && <p className="text-xs text-red-500 mt-2">{product.note}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
            {benefit.icon}
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{benefit.title}</h4>
              <p className="text-sm text-gray-500">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;