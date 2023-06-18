### Live Link: https://digital-cow-hut-87a1.onrender.com
  ### Application Routes:

   #### User
   - api/v1/auth/signup (POST)
   - api/v1/users (GET)
   - api/v1/users/648ed4adc36b39c2cd2d8e8c (Single GET)
   - api/v1/users/648ed4adc36b39c2cd2d8e8c (PATCH)
   - api/v1/users/648ed4adc36b39c2cd2d8e8c (DELETE)


   #### Cows
   - api/v1/cows (POST)
   - api/v1/cows (GET)
   - api/v1/cows/648ed564c36b39c2cd2d8e9f (Single GET)
   - api/v1/cows/648ed564c36b39c2cd2d8e9f (PATCH)
   - api/v1/cows/648ed564c36b39c2cd2d8e9f (DELETE) 

   ### Pagination and Filtering routes of Cows

   - api/v1/cows?page=1&limit=10
   - api/v1/cows?sortBy=price&sortOrder=asc
   - api/v1/cows?minPrice=20000&maxPrice=70000
   - api/v1/cows?location=Dhaka
   - api/v1/cows?searchTerm=Dha
     
  
   #### Orders
   - api/v1/orders (POST)
   - api/v1/orders (GET)
