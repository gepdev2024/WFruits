import { google } from 'googleapis'

import key from '../secret.json' assert {type: 'json'}

export const SHEET_ID = "1pP-5j-Hh4fH0s0ZKgOOFPsKIzAA7YH0mJYWwNY1HQgU";

const client = new google.auth.JWT(key.client_email, null, key.private_key, [
    'https://www.googleapis.com/auth/spreadsheets'
]);

const sheets = google.sheets({ version: 'v4', auth: client})

export default sheets;