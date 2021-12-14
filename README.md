# Books Database

Team Members: Justin Diament, Chris Teng, and Neha Sriram
Section: Jose Annunziato, Tuesday & Friday 1:35 - 3:15 (Section 4)

How To Use: 
1) Download and import the data and tables in the "database" folder. The web interface that will be set up to use the database is set by default to access a database schema named "database". However, this can be easily changed.

2) Download the "db-design-orm-assignment-master" folder. This folder contains Java code that maps the database from relational to object models, as well as HTML and Javascript/React code to run the database's web-based GUI

3) Go to db-design-orm-assignment-master/src/main/resources/ to find the file "application.properties". Adjust the schema (currently set to "database") on line 1, the username on line 2, and the password on line 3 to match your database and schema set up in step 1. 

4) Go to db-design-orm-assignment-master/src/main/java/com/example/springtemplate/ and run the file "DemoApplication". This will boot up the GUI and allow it to be used to control the database. 

5) Finally, go to any of the four GUI folders in db-design-orm-assignment-master/src/main/webapp/react/. Each of these folders has an index.HTML file. Run this file to open a web-based interface that displays data about a the corresponding table and can add to, delete from, and edit its contents. 


Further information: 

Problem Statement: The problem our project is trying to solve is that authors need to be able to keep track of and find books that have been written by themselves and other authors. The authors need to be able to track information about themselves and other authors, as well as track information about books and the series that they are a part of. 

Solution Statement: In order to solve this problem, we created a database that contains three main tables and one mapping table. The authors can keep track of information about themselves and other authors in the author table. Additionally, they can track information about books in the book table and the series that those books are a part of in the series table. Authors and books have a many to many relationship (one author can write many books and one book can have many authors). As a result, this relationship has been reified to include the mapping table writer. Finally, one series can have many books, so this is a one to many relationship. All of these tables can have entries added, read, updated, or deleted via a web-based interface, making it easy for authors to track everything they need related to books. 

User: The typical user for our solution is an author, represented by the author table. The author table contains information about these authors using the database, including their full names, username and password, email, and date of birth. Authors need to keep track of books, those books’ series, and which authors have written which books, so this database is useful for them to track this information. In this database, an author can look up or add information about themselves or other authors, books that one or more authors have written, the series those books are a part of, and specific information about each of those objects. 

Domain Objects: The two domain objects in this database are books and series, represented by the book and series tables respectively. An example of a book object is Harry Potter and the Sorcerer’s Stone, while an example of a series is Harry Potter. Information tracked in the book table includes its title, description, publisher, and release day. Information tracked in the series table includes its title, genre, and whether or not it has been adapted to a movie. One series can have many books, so series has a one to many relationship with book. One book can have many authors and one author can write many books, so book has a many to many relationship with author. This many to many relationship is reified by the writer table into two one to many relationships.
