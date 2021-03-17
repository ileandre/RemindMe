# RemindMe

# Description: 
This is a monthly calendar app where users input the month, number of days in the current month (similar to a whiteboard calendar), the month start day and the year. In the app, users can create, edit and delete events, as well as write general notes.

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

![RemindMe__ComponentStructure](https://user-images.githubusercontent.com/65198477/111209160-0f21c680-85a2-11eb-863d-7808e7fdcfb9.png)


# API: 

EVENTS
```
{
   {
    "records": [
        {
            "id": "rectcymMKNQjbsN23",
            "fields": {
                "day": 10,
                "time": "10:30 am",
                "title": "Irma's Birthday",
                "month": "June",
                "description": "It's time to go wild!",
                "year": 2021
            },
            "createdTime": "2021-03-14T23:35:38.000Z"
        },
        {
            "id": "reccYAw6Dd5DgMO5Z",
            "fields": {
                "day": 25,
                "time": "12:00 pm",
                "title": "Doctors Appointment",
                "month": "June",
                "description": "Don't forget the insurance card",
                "year": 2021
            },
            "createdTime": "2021-03-14T23:35:38.000Z"
        },
        {
            "id": "rectmADYiqLbstNBB",
            "fields": {
                "day": 12,
                "time": "7:30 pm",
                "title": "Family Dinner",
                "month": "June",
                "description": "Bring cash.",
                "year": 2021
            },
            "createdTime": "2021-03-14T23:35:38.000Z"
        }
    ],
    "o
```

NOTES
```
{
    "records": [
        {
            "id": "recMPSywlGq4dvRTp",
            "fields": {
                "month": "June",
                "notes": "Inspire"
            },
            "createdTime": "2021-03-15T19:27:08.000Z"
        },
        {
            "id": "recASRScgD1dVtw01",
            "fields": {
                "month": "June",
                "notes": "laugh"
            },
            "createdTime": "2021-03-15T19:27:08.000Z"
        },
        {
            "id": "recFlQuJn0IGZawgU",
            "fields": {
                "month": "June",
                "notes": "happiness"
            },
            "createdTime": "2021-03-15T19:27:08.000Z"
        }
    ],
    "offset": "recFlQuJn0IGZawgU"
}
```


# MVP: 

1) Homepage with dropdown menu for the month, start day, number of days in the specified month, and year
2) Get and post from Airtable
3) Create components to display events and notes on the page
4) Create components(forms) that accept a users input for events and notes
5) Create component to render individual divs(days) to the calendar
6) Home and Calendar buttons that navigate to the home and calendar pages


# Post-MVP: 

1) Use 2nd API to automatically generate basic calendar information
2) Color change mode
3) Put and delete from Airtable


# Project Schedule: 

|  Day | Deliverable | Status
|---|---| ---|
|Mar 13-14 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Mar 15| Project Approval/Airtable set up/Pseudocode | Complete
|Mar 16-18| Core Application Structure (components/CRUD data) | 
|Mar 19-20| Styling with CSS  | 
|Mar 21| Post-MVP/clean code | 
|Mar 22| Presentations | 


# Timeframes: 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Psuedo code | L | 2hrs | 2.5hrs |  |
| Setup Airtable | H | 2hrs| 1.5hrs |  |
| API Functionality | H | 3hrs| 3.5hrs |  |
| Create Homepage component with Link | H | 2hrs| 3hrs |  |
| Create Calendar component with Link and Renders | H | 5hrs| 6hrs |  |
| Create Notes component with buttons and access API | H | 4hrs|  |  |
| Create Day Agenda component with renders and API access | H | 4hrs | 3.5hrs |  |
| Create Event component with buttons and access API | H | 3hrs |  |  |
| Create Form component with button and access API | H | 3hrs |  |  |
| CSS General Styling | H | 10hrs |  |  |
| CSS Media queries | H | 3hrs |  |  |
| Total | H | 41hrs |  |  |


# SWOT Analysis: 

**Strength**
I have a solid understanding of all the concepts we've learned and believe I can properly implement them into my project.

**Weaknesses**
I tend to overthink and have high expecations for my work, which often gives me stress because I think beyond (what I believe to be) my coding abilities.

**Opportunities**
This is an opportunty to show how much I actally learned and encourages me to learn more, as I search for solutions to problems I may not already know. This is also an opportunity to build my pre-exsising code bank for future projects and jobs.

**Threats**
I overthink situations and tend to over-code, but eventually realize there's an easier way. This results in a lot of lost time.
