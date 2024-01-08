// api.js

const JSON_FILE_PATH = '../assets/books.json'; 

export const getLibrary = async () => {
  try {
    const response = await fetch(JSON_FILE_PATH);
    if (!response.ok) {
      throw new Error('Failed to fetch library data');
    }

    const libraryData = await response.json();
    return libraryData.library;
  } catch (error) {
    console.error('Error getting library data:', error);
    throw error;
  }
};

export const addBookToLibrary = async (newBook) => {
  try {
    // Fetch the current library data
    const library = await getLibrary();

    // Update the library with the new book
    library.push(newBook);

    // Simulate saving the updated library data (write it back to the local JSON file)
    // In a real API scenario, you would send a POST request to update the data on the server
    // Here, for simplicity, we'll just return the updated library
    return library;
  } catch (error) {
    console.error('Error adding a new book:', error);
    throw error;
  }
};
