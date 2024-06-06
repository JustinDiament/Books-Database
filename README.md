# Books Database
A relational SQL database for books and information surrounding books, which can be accessed through a JS-based web interface

How To Use: 
1) Download and import the data and tables in the "database" folder. The web interface that will be set up to use the database is set by default to access a database schema named "database". However, this can be easily changed.

2) Download the "db-design-orm-assignment-master" folder. This folder contains Java code that maps the database from relational to object models, as well as HTML and Javascript/React code to run the database's web-based GUI

3) Go to db-design-orm-assignment-master/src/main/resources/ to find the file "application.properties". Adjust the schema (currently set to "database") on line 1, the username on line 2, and the password on line 3 to match your database and schema set up in step 1. 

4) Go to db-design-orm-assignment-master/src/main/java/com/example/springtemplate/ and run the file "DemoApplication". This will boot up the GUI and allow it to be used to control the database. 

5) Finally, go to any of the four GUI folders in db-design-orm-assignment-master/src/main/webapp/react/. Each of these folders has an index.HTML file. Run this file to open a web-based interface that displays data about a the corresponding table and can add to, delete from, and edit its contents. 
