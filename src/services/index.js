//the line below allows us to export multiple things from a given file
export const eventsBaseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/events`;
export const notesBaseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/notes`;


export const config = {
  headers: {              //headers are plural even if we have one header
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}