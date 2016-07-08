Description:

This app is made for people to record depression severity symptoms. People are usually pretty bad at self-reporting said symptoms, hence the need for something that can keep track of symptoms and also show you the score {the questions are based off a standard measurement}. The way I have my tables built allows for other measures, such as ones for anxiety, to be added in easily and incorporated easily to track symptoms for multiple disorders.

In its current iteration, a user can create a profile with basic information and add entries and add responses to the default measure and see their responses for a given day in addition to the actual score {and the severity}. You can CREATE entries, responses, and profiles, UPDATE profile information, SHOW data for a single entry, INDEX all entries, and DELETE a single entry.

My approach generally was to make my tables easily adaptable so that future features could be added, which means I have a ton of tables but not necessarily a ton of stuff in them. Also, some tables are only accessible via the back end, meaning the user cannot control the measures, which is good for a developer. I'm basically glad I figured out how to give the user control over certain things and feel like I understand that a bit better.

User stories:
- As a user, I want to create and update my profile.
- As a user, I want to be able to create new entries and see my data for a given date.
- As a user, I want a clean UI that isn't too overwhelming.

Wireframe link: https://drive.google.com/file/d/0B0K5WSM6-38tVTZ5aVpMZWdhWFk/view?usp=sharing

Link to other repo: https://github.com/acobrelo/project-2-server
