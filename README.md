# RemindMe
**Deployed Site:** https://gracious-hermann-c7834b.netlify.app/
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
  "records": [
        {
            "id": "recFGAB4G8Gscb78l",
            "fields": {
                "day": 10,
                "timeHours": "07",
                "title": "Birthday Dinner",
                "month": "June",
                "description": "Don't forget your ID!",
                "year": 2021,
                "timeMinutes": ":30",
                "timeUnits": " pm",
                "time": "07:30 pm"
            },
            "createdTime": "2021-03-22T16:15:16.000Z"
        },
        {
            "id": "recWyGVqNY0MkTskl",
            "fields": {
                "day": 10,
                "timeHours": "04",
                "title": "Make up appointment",
                "month": "June",
                "description": "Bring your make up bag!",
                "year": 2021,
                "timeMinutes": ":30",
                "timeUnits": " pm",
                "time": "04:30 pm"
            },
            "createdTime": "2021-03-22T16:18:46.000Z"
        },
        {
            "id": "recjsbChV9wH844we",
            "fields": {
                "day": 10,
                "timeHours": "08",
                "title": "The Big 50!",
                "month": "June",
                "description": "Let's get lit!",
                "year": 2045,
                "timeMinutes": ":30",
                "timeUnits": " pm",
                "time": "08:30 pm"
            },
            "createdTime": "2021-03-22T18:32:32.000Z"
        }
    ],
    "offset": "recjsbChV9wH844we"
}
    
```

NOTES
```
{
    "records": [
        {
            "id": "recNn1qGCgWBFU9rN",
            "fields": {
                "startDay": "Tuesday",
                "numberOfDays": 30,
                "year": 2021,
                "month": "June"
            },
            "createdTime": "2021-03-22T16:13:58.000Z"
        },
        {
            "id": "recDr2mfqZuwfiqRF",
            "fields": {
                "year": 2021,
                "note": "Birthday month shenanigans!",
                "month": "June"
            },
            "createdTime": "2021-03-22T16:14:47.000Z"
        },
        {
            "id": "recFGyOu3FIqHKqSV",
            "fields": {
                "startDay": "Tuesday",
                "numberOfDays": 30,
                "year": 2021,
                "month": "June"
            },
            "createdTime": "2021-03-22T16:37:46.000Z"
        }
    ],
    "offset": "recFGyOu3FIqHKqSV"
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
2) Color theme change mode
3) Put and delete from Airtable
4) Previously created calendars listed in the homepage
5) Change the color of a day that has events in it. Color indicators.


# Project Schedule: 

|  Day | Deliverable | Status
|---|---| ---|
|Mar 13-14 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Mar 15| Project Approval/Airtable set up/Pseudocode | Complete
|Mar 16-18| Core Application Structure (components/CRUD data) | Complete
|Mar 19-20| Styling with CSS  | Complete
|Mar 21| Post-MVP/clean code | Complete
|Mar 22| Presentations | Complete


# Timeframes: 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Psuedo code | L | 2hrs | 2.5hrs | 2.5hr |
| Setup Airtable | H | 2hrs| 1.5hrs | 1.5hrs |
| API Functionality | H | 3hrs| 3.5hrs | 3.5hrs |
| Create Homepage component with Link | H | 2hrs| 3hrs | 3hrs |
| Create Calendar component with Link and Renders | H | 5hrs| 10.5hrs | 10.5hrs |
| Create NotesList component with buttons and access API | H | 4hrs| 6hrs | 6hrs |
| Create NotesForm component with buttons and access API | H | 3hrs | 3.5hrs | 3.5hrs |
| Create Events component with buttons and access API | H | 3hrs | 2hrs | 2hrs |
| Create EventsForm component with buttons and access API | H | 3hrs | 3.5hrs | 3.5hrs |
| Create EventPage component with buttons and access API | H | 3hrs | 6hrs | 6hrs |
| Create Form component with button and access API | H | 3hrs | 3.5hrs | 3.5hrs |
| CSS General Styling | H | 10hrs | 12hrs | 12hrs |
| CSS Media queries | H | 3hrs | 2hrs | 2hrs |
| Total | H | 41hrs | 59.5hrs | 59.5hrs |


# SWOT Analysis: 

**Strength**
I have a solid understanding of all the concepts we've learned and believe I can properly implement them into my project.

**Weaknesses**
I tend to overthink and have high expecations for my work, which often gives me stress because I think beyond (what I believe to be) my coding abilities.

**Opportunities**
This is an opportunty to show how much I actally learned and encourages me to learn more, as I search for solutions to problems I may not already know. This is also an opportunity to build my pre-exsising code bank for future projects and jobs.

**Threats**
I overthink situations and tend to over-code, but eventually realize there's an easier way. This results in a lot of lost time.
