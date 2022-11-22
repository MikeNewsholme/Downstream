<h1 align="center">Downstream ™</h1>

## About
*Downstream is an app that is centered around the gamers and streamers. The app will allow users to order pre-built computers.

## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Open [http://localhost:3000/admin](http://localhost:3000/admin) with your browser and enter the admin credentials. 

```bash
Admin username: admin
Admin password: 123456
```



Once you are logged in as an admin, go back to [http://localhost:3000](http://localhost:3000) 

Underneath the picture carousel click the "Add New Product" button to add a new product to the database.


  <ul>
  	    <li><b>Choose an image: </b> Upload any image</li>
	      <li><b>Enter a tile: </b> Enter a title for the product </li>
  	    <li><b>Description: </b> Enter a description for the product</li>
	      <li><b>Set prices: </b> Set 3 prices for the RAM upgrade available </li>
	      <li><b>Extra Items:</b> Add "Extended Warranty or Express Shipping" and set a price, then click "Add"</li>
        <li><b>Create:</b> Click the Create button to upload your product to the database</li>
        <li><b>Refresh:</b> Upon refreshing the page, your product will be displayed at the bottom </li>
        <li><b>Orders:</b> Update the "Order Status" by clicking the "Next Stage" button until you reach "Delivered" </li>
        
        
	
<br>
 <br>
  
  

Navigate back to [http://localhost:3000/admin](http://localhost:3000/admin)
```bash
Test the Delete button on the product you just created and your product will be deleted from the database.
```
 




## Technology Used
	
	
  	    	NextJS
	      	React
  	    	Mongoose
	      	Redux
	






## Routes

| **Method** | **Path** 	| **Purpose**  |
| ---------- | --------------- 	| -----------  |
| `GET`      | /		| Home page    |
| `GET`      | /	 	| Get Product  |
| `PUT`      | /	 	| Add	       |
| `DELETE`   | /		| Delete       |
| `GET`      | /	 	| Get Order    |
| `PUT`      | /	 	| Update       |



<br>












## Deployed on Vercel


