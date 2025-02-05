const chalk = require('chalk');
const setupDB = require('./db');
const Product = require('../models/product');

const products = [
  {
    name: 'Organic Tomatoes',
    sku: 'TOM-001',
    description: 'Fresh, locally grown organic tomatoes. Perfect for salads and cooking.',
    quantity: 100,
    price: 2.99,
    imageUrl: 'https://images.unsplash.com/photo-1546470427-227c8557f389',
    isActive: true,
    taxable: false
  },
  {
    name: 'Premium Rice (25kg)',
    sku: 'RIC-001',
    description: 'High-quality rice, perfect for daily consumption. 25kg package.',
    quantity: 50,
    price: 35.99,
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c',
    isActive: true,
    taxable: false
  },
  {
    name: 'Fresh Carrots (1kg)',
    sku: 'CAR-001',
    description: 'Farm-fresh carrots, rich in vitamins and minerals.',
    quantity: 150,
    price: 1.99,
    imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37',
    isActive: true,
    taxable: false
  },
  {
    name: 'Organic Potatoes (5kg)',
    sku: 'POT-001',
    description: 'Organically grown potatoes, perfect for various dishes.',
    quantity: 75,
    price: 8.99,
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
    isActive: true,
    taxable: false
  },
  {
    name: 'Fresh Green Peas (500g)',
    sku: 'PEA-001',
    description: 'Sweet and tender green peas, freshly harvested.',
    quantity: 100,
    price: 3.99,
    imageUrl: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc',
    isActive: true,
    taxable: false
  }
];

const seedProducts = async () => {
  try {
    console.log(`${chalk.blue('✓')} ${chalk.blue('seeding products started')}`);

    // Clear existing products
    await Product.deleteMany({});

    // Insert new products
    await Product.insertMany(products);

    console.log(`${chalk.green('✓')} ${chalk.green('seeding products finished')}`);
  } catch (error) {
    console.log(
      `${chalk.red('x')} ${chalk.red('error while seeding products')}`
    );
    console.log(error);
    return null;
  }
};

(async () => {
  await setupDB().then(async () => {
    await seedProducts();
    process.exit();
  });
})();
