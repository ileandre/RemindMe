# RemindMe

# Description: 
This is a monthly calendar app where users input the month and number of days in the current month (similar to a whiteboard calendar). In here, users can create and edit and delete events, as well as write general notes.

# Wireframes: 

**DESKTOP**

![CalendarIntro_Desktop](https://user-images.githubusercontent.com/65198477/111192969-07f1bd00-8590-11eb-9262-9a125cbb1b90.png)
![CalendarLayout_Desktop](https://user-images.githubusercontent.com/65198477/111191478-7df52480-858e-11eb-960f-878d9663af0b.png)
![EventLayout_Desktop](https://user-images.githubusercontent.com/65198477/111191132-20f96e80-858e-11eb-9fea-d3c79b6ea9c3.png)


**TABLET and MOBILE**

![CalendarIntro_Tablet_Mobile](https://user-images.githubusercontent.com/65198477/111192987-0fb16180-8590-11eb-8116-1979b6f39ae7.png)
![CalendarLayout_Tablet_Mobile](https://user-images.githubusercontent.com/65198477/111191191-3078b780-858e-11eb-9927-3933e5fa60b6.png)
![EventLayout_Tablet_Mobile](https://user-images.githubusercontent.com/65198477/111191199-3373a800-858e-11eb-9bd9-4fd681234b1d.png)


# Component Hierarchy: 

![RemindMe__ComponentStructure](https://user-images.githubusercontent.com/65198477/111196998-5012de80-8594-11eb-9c57-4288f2b0e4d8.png)


# API: 

```
{
    "records": [
        {
            "id": "rectcymMKNQjbsN23",
            "fields": {
                "time": "10:30 am",
                "title": "Irma's Birthday",
                "description": "It's time to go wild!",
                "notes": "Something inspirational",
                "month": "June",
                "day": 10,
                "year": 2021
            },
            "createdTime": "2021-03-14T23:35:38.000Z"
        },
        {
            "id": "reccYAw6Dd5DgMO5Z",
            "fields": {
                "time": "12:00 pm",
                "title": "Doctors Appointment",
                "description": "Don't forget the insurance card",
                "month": "June",
                "day": 25,
                "year": 2021,
                "notes": "Inpire"
            },
            "createdTime": "2021-03-14T23:35:38.000Z"
        },
        {
            "id": "rectmADYiqLbstNBB",
            "fields": {
                "time": "7:30 pm",
                "title": "Family Dinner",
                "description": "Bring cash.",
                "month": "June",
                "day": 12,
                "year": 2021,
                "notes": "Love"
            },
            "createdTime": "2021-03-14T23:35:38.000Z"
        }
    ],
    "offset": "rectmADYiqLbstNBB"
}
```


# MVP: 

1) Homepage with dropdown menu for the month, start day and number of days in the specified month
2) Get and post, put and delete events from Airtable
3) Create components to display events and notes on the page
4) Create components accept a users input for events and notes
5) Create component to render individual divs to the calendar
6) Home and Calendar buttons that link the home and calendar pages


# Post-MVP: 

1) Use 2nd API to automatically generate basic calendar information
2) Color change mode

# Project Schedule: 

|  Day | Deliverable | Status
|---|---| ---|
|Mar 13-14 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Mar 15| Project Approval/Airtable set up/Pseudocode | 
|Mar 16-18| Core Application Structure (components/CRUD data) | 
|Mar 19-20| Styling with CSS  | 
|Mar 21| Post-MVP/clean code | 
|Mar 22| Presentations | 


# Timeframes: 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Psuedo code | L | 2hrs |  |  |
| Setup Airtable | H | 2hrs|  |  |
| API Functionality | H | 3hrs|  |  |
| Create Homepage component with Link | H | 2hrs|  |  |
| Create Calendar component with Link and Renders | H | 5hrs|  |  |
| Create Notes component with buttons and access API | H | 4hrs|  |  |
| Create Day Agenda component with renders and API access | H | 4hrs |  |  |
| Create Event component with buttons and access API | H | 3hrs |  |  |
| Create Form component with button and access API | H | 3hrs |  |  |
| CSS General Styling | H | 10hrs |  |  |
| CSS Media queries | H | 3hrs |  |  |
| Total | H | 41hrs |  |  |


# SWOT Analysis: 

**Strength**
I have solid understanding of all the concepts we've learned and believe I can properly implement them into my project.

**Weaknesses**
I tend to overthink and have high expecations for my work which often gives me stress because I think beyond (what I believe to be) my coding abilities. This often causes me stress.

**Opportunities**
This is an opportunty to show how much I actally learned and will encourage me to learn more, as I search for solutions to problems I may not know from the top of my head. This is also an opportunity to build my pre-exsising code bank for future projects and jobs.

**Threats**
I overthink situations and tend to code ineffecient code, until I realize there's an easier way. This results in a lot of unneeded lost time.
