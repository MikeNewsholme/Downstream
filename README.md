<h1 align="center">Downstream ™</h1>

## About
*Downstream is an app that is centered around the gamers and streamers. The app will allow users to order pre-built computers, pay with cash or PayPal, and are able to see the status of their order after they pay .*

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
 


<br>

## Technology Used
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="react"></code> 
<code><img height="27" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTTzPAw-55ssm1Im594xYZ9eRQu2JylrkYLg&usqp=CAU" alt="mongodb"></code> 
<code><img height="27" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="expressjs"></code>
 <code><img height="27" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="nodejs"></code>

<br>


## Getting Started

Copy and Paste both of the links provided into your web browser in seperate tabs, and navigate to the "Nailed-It-FrontEnd" tab <br>
<ul> 
<li> https://nailed-it-frontend.herokuapp.com</li>
<li> https://nailed-it-server.herokuapp.com </li>
</ul>
Create your own project on the <b>Create</b> tab or explore other uploaded projects with the <b>Explore</b> tab

<br>
<br>

<details>	
  <br />
  <summary>OPEN ME <b>⚙️</b></summary>
  	<ul>
  	    <li><b>OS:</b> Windows 11</li>
	    <li><b>Computers: </b> HP Laptop, Custom Built PC and Mac PC </li>
  	    <li><b>Browser: </b> Google Chrome</li>
	    <li><b>Terminal: </b> GitBash </li>
	    <li><b>Code Editor:</b> VSCode - The best editor out there.</li>
	    	
</details>
<br>
<br>




## Routes

| **Method** | **Path** | **Purpose**  |
| ---------- | -------- | -----------  |
| `GET`      | /        | Home page    |
| `GET`      | /explore | Explore page |
| `POST`     | /create  | Create page  |
| `PUT`      | /create  | Create page  |
| `DELETE`   | /        | Home page    |

<br>

## Unfinished functionality

We tried to have a photo upload component with Multer included with the application but were unable to complete its functionality in the time allowed. 








## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
