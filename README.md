# express-versioned-route-test
express-versioned-route-test

##usage:  
&nbsp;&nbsp;npm install  
&nbsp;&nbsp;gulp

##Introduction:  
  
  This is a versioned route manage project based on express 4.X,  A clean way to realize versioning.  
  Thanks to this article: https://medium.com/@jamsesso/versioning-rest-api-routes-in-express-js-f7287e1c8886
  Thanks for the idea and awesome implemention  

#function:  
get localhost/3003/users -> v1_1 users  
get localhost/3003/v1_1/users -> v1_1 users  
get localhost/3003/v1_3/users -> v1_1 users (v1_2 don't have this method, so when visit v1_2, it'll get v1_1)  
get localhost/3003/v2_1/companies -> v1_3 companies  
...

##category:  
-controllers  
&nbsp;&nbsp;|--&nbsp;v1_1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&nbsp;company.js  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&nbsp;user.js  
&nbsp;&nbsp;|--&nbsp;v1_3  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&nbsp;company.js  
&nbsp;&nbsp;|--&nbsp;v2_1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&nbsp;user.js  
-routes  
&nbsp;&nbsp;|--&nbsp;v1_1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&nbsp;company.js  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&nbsp;user.js  
&nbsp;&nbsp;|--&nbsp;v1_3  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&nbsp;company.js  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&nbsp;user.js  
&nbsp;&nbsp;|--&nbsp;v2_1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&nbsp;company.js  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&nbsp;user.js  
