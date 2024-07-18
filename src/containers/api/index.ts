export const baseURL = 'https://fakestoreapi.com/products';



export const fetchProducts = async () => {
  try {
    const response = await fetch(baseURL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();


  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return [];
  }
};
