import express from 'express';
import cors from 'cors';
import { z, ZodError } from 'zod';
import sheets, { SHEET_ID } from './masukan.js';

const app = express();

// Use the CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your React app's URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

const contactsFormSchema = z.object({
    nama: z.string().min(1, { message: 'Nama tidak boleh kosong!' }),
    email: z.string().email({ message: 'Email harus valid!' }),
    rating: z.string().min(1,{ message: 'Rating tidak boleh kosong!' }),
    masukan: z.string().min(1, { message: 'Masukan tidak boleh kosong!' }),
});

app.use(express.json());

app.get('/tes', (req,res)=>{
    res.send("ok")
})

app.post('/send-message', async (req, res) => {
    try {
        const body = contactsFormSchema.parse(req.body);
        const rows = Object.values(body);

        await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: 'Data!A2:D2',
            insertDataOption: 'INSERT_ROWS',
            valueInputOption: 'RAW',
            requestBody: {
                values: [rows],
            },
        });
        res.json({ message: 'Data added successfully!' });
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({ error: error.errors.map(e => e.message).join(', ') });
        } else {
            res.status(400).json({ error: 'Something went wrong!' });
        }
    }
});

app.listen(4000, () => console.log('App running on http://localhost:4000'));
