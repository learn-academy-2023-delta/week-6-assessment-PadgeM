# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
I know we have to use db:migrate to add the key to the table. I have to be honest I need to study this more. I can't remember what I am supposed to do.

Researched answer:
The foreign key should be added to the Student model, and its name would typically be "cohort_id" following the Rails convention. To fix this, I would generate a migration to add the foreign key column to the students table. The migration would look something like this:
"rails generate migration AddCohortToStudents cohort:references"
After generating the migration, I would run the migration using the rails db:migrate command to update the database schema. This would add the "cohort_id" column as a foreign key in the students table, establishing the association between the Cohort and Student models.


2. Which RESTful routes must always be passed params? Why?

Your answer:
I know one of them is the update route. I can't think of which ones after that. Not happy with this answer at all.

Researched answer:
There are certain RESTful routes that always require passing parameters. One of them is the create route, which is used to create a new resource. In order to create the resource, we need to pass parameters in the request body, which contain the necessary data such as username, email, and password. Another route that requires parameters is the update route, used for updating an existing resource. Similar to the create route, parameters are needed in the request body to specify the updates to be made, like changing a user's name, bio, or profile picture. The delete route, although it doesn't necessarily require parameters, typically needs an identifier to determine which resource should be deleted. This identifier can be passed as a parameter in the route or as a query parameter. By passing parameters in these routes, the server can accurately and securely perform actions like creating, modifying, or deleting resources based on the provided information.

3. Name three rails generator commands. What is created by each?

Your answer:
I think we have to do something to make the CRUD actions. We have r generate, then I think theres the resource one but I can't remember what it was called. 

Researched answer:
There are three useful Rails generator commands. The first one is "rails generate model," which creates a new model file along with its corresponding migration file. This command helps me generate the skeletal structure of a model, including its attributes and associations. The second command is "rails generate controller," which generates a new controller file that handles the logic and actions related to a specific resource. It creates the basic CRUD actions, along with corresponding views and test files. Lastly, the "rails generate scaffold" command is quite handy as it creates a complete set of resources, including the model, migration, controller, views, and routes. It saves me time by automatically generating the necessary files for a basic CRUD interface. These generator commands simplify the process of setting up different components in a Rails application and enhance my productivity as a developer. Though we have been warned to not use this command in class because it can cause some major problems.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
This method would retrieve and display a list of all students.
action: "POST" location: /students
This method would handle the creation of a new student based on the provided parameters in the request.
action: "GET" location: /students/new
This method would render a form to create a new student.
action: "GET" location: /students/2
This method would retrieve and display the details of the student with the ID of 2.
action: "GET" location: /students/2/edit
This method would render a form to edit the details of the student with the ID of 2.
action: "PATCH" location: /students/2
This method would handle updating the details of the student with the ID of 2 based on the provided parameters in the request.
action: "DELETE" location: /students/2
This method would handle the deletion of the student with the ID of 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

As a user, I want to be able to set task priorities as high, medium, or low so that I can easily identify and focus on urgent tasks.

As a user, I want to be able to assign tasks to specific categories or projects so that I can organize my to-do list based on different areas of my life or work.

As a user, I want to be able to create recurring tasks (daily, weekly, monthly) so that I can set up repetitive tasks without having to recreate them each time.

As a user, I want to be able to collaborate and share tasks with other users so that I can delegate tasks or work on shared projects together.

As a user, I want to be able to attach files or documents to tasks so that I can store relevant information or reference materials.

As a user, I want to have a calendar view that displays tasks with due dates so that I can visualize and plan my schedule effectively.

As a user, I want to be able to set task reminders and receive notifications via email or push notifications so that I don't miss important deadlines.

As a user, I want to have a progress tracker that shows the completion status of tasks or projects so that I can monitor my productivity.

As a user, I want to be able to create subtasks or checklist items within a task so that I can break down complex tasks into manageable steps.

As a user, I want to have the ability to customize the interface and theme of the application to suit my personal preferences.
