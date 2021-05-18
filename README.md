# SchoolManagementSystem
A management system API built with Node.js, Express and, MySQL with Sequelize, Along with frontend, built via React and reactstrap.
This API allows users to :
1. CRUD operations on Teachers
2. CRUD operations on Students
3. CRUD operation on Grades( Class student is currently studying in :1,2,3..)
4. CRUD operations on Users
All these operations are performed only by Users. JWT was used to keep authorize users.
Update:
1. React was Added. You can see the new files having 'React Frontend' beside them.
2. The JWT was stored in as Environment variable, used anytime while making request from React App( working like an API key).
3. From the front end, Users can Login, SignUp, View List, Add/Update Students and Teachers.
4. 2 Servers were kept running, one for API and other for React App, requests were proxied from React App to the API.
