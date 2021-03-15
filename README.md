# RemindMe

# Title: RemindMe

# Description: 
This is a monthly calendar app where users input the month and number of days in the current month (similar to a whiteboard calendar). In here, users can create and edit and delete events, as well as write general notes.

# Wireframes: 

**DESKTOP**

![CalendarLayout_Desktop](https://user-images.githubusercontent.com/65198477/111089211-396f7780-8501-11eb-83e9-e41209b0f235.png)
![EventLayout_Desktop](https://user-images.githubusercontent.com/65198477/111089214-3d02fe80-8501-11eb-86b5-325b817caabf.png)


**TABLET and MOBILE**

![CalendarLayout_Tablet_Mobile](https://user-images.githubusercontent.com/65198477/111089217-42604900-8501-11eb-8eea-09d65143e3ef.png)
![EventLayout_Tablet_Mobile](https://user-images.githubusercontent.com/65198477/111089220-455b3980-8501-11eb-8bc8-9ed205f14447.png)


# Component Hierarchy: 

![RemindMe__ComponentStructure](https://user-images.githubusercontent.com/65198477/111088551-198a8480-84fe-11eb-83ca-3975d43d792d.png)


# API: 

```
{
    "records": [
        {
            "id": "rectcymMKNQjbsN23",
            "fields": {
                "title": "Irma's Birthday",
                "time": "10:30 am",
                "description": "It's time to go wild!"
            },
            "createdTime": "2021-03-14T23:35:38.000Z"
        },
        {
            "id": "reccYAw6Dd5DgMO5Z",
            "fields": {
                "title": "Doctors Appointment",
                "time": "12:00 pm",
                "description": "Don't forget the insurance card"
            },
            "createdTime": "2021-03-14T23:35:38.000Z"
        },
        {
            "id": "rectmADYiqLbstNBB",
            "fields": {
                "title": "Family Dinner",
                "time": "7:30 pm",
                "description": "Bring cash."
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
4) Post and delete from Airtable


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
| Setup Airtable | H | 0.5hr|  |  |
| API Functionality | H | 2hrs|  |  |
| Create Homepage component with Link | H | 1.5hrs|  |  |
| Create Calendar component with Link and Renders | H | 4hrs|  |  |
| Create Notes component with buttons and access API | H | 3hrs|  |  |
| Create Day Agenda component with renders and API access | H | 3hrs |  |  |
| Create Event component with buttons and access API | H | 2hrs |  |  |
| Create Form component with button and access API | H | 1.5hrs |  |  |
| CSS General Styling | H | 8hrs |  |  |
| CSS Media queries | H | 2hrs |  |  |
| Total | H | 29.5hrs |  |  |


# SWOT Analysis: 

**Strength**
I have solid understanding of all the concepts we've learned and believe I can properly implement them into my project.

**Weaknesses**
I tend to overthink and have high expecations for my work which often gives me stress because I think beyond (what I believe to be) my coding abilities. This often causes me stress.

**Opportunities**
This is an opportunty to show how much I actally learned and will encourage me to learn more, as I search for solutions to problems I may not know from the top of my head. This is also an opportunity to build my pre-exsising code bank for future projects and jobs.

**Threats**
I overthink situations and tend to code ineffecient code, until I realize there's an easier way. This results in a lot of unneeded lost time.
