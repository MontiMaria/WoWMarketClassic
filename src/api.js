import axios from 'axios';

export async function fetchProductData() {
  try {
    const response = await axios.get('https://api.example.com/product');
    return response.data;
  } catch (error) {
    console.error('Axios error:', error);
    return null;
  }
}