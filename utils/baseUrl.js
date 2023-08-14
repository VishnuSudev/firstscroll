const baseUrl = process.env.NODE_ENV === "production" 
? 'https://firstscroll.com' 
: 'http://localhost:3000';

export default baseUrl;