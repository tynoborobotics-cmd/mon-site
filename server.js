const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_YOUR_STRIPE_KEY'); // Replace with your Stripe key

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve front-end files

// Sample data (replace with MongoDB in production)
const courses = [
    { id: 1, name: 'Machine Learning Engineer Bootcamp', price: 1499, level: 'advanced', topic: 'machine-learning', format: 'cohort-based' }
];
const ebooks = [
    { id: 1, name: 'Python for Data Analysis', price: 49.99, file: 'python-data-analysis.pdf' }
];

// Enroll in a course
app.post('/enroll', (req, res) => {
    const { courseId, email } = req.body;
    const course = courses.find(c => c.id === courseId);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    // Save enrollment to DB (MongoDB)
    res.json({ message: `Enrolled in ${course.name} for ${email}` });
});

// Purchase e-book
app.post('/purchase', async (req, res) => {
    const { ebookId, token } = req.body;
    const ebook = ebooks.find(e => e.id === ebookId);
    if (!ebook) return res.status(404).json({ error: 'E-book not found' });

    try {
        const charge = await stripe.charges.create({
            amount: ebook.price * 100, // In cents
            currency: 'usd',
            description: `Purchase of ${ebook.name}`,
            source: token
        });
        // Save purchase to DB and provide download link
        res.json({ message: 'Purchase successful', download: `/download/${ebook.file}` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Download e-book
app.get('/download/:file', (req, res) => {
    res.download(`./ebooks/${req.params.file}`); // Create 'ebooks' folder with files
});

// Newsletter subscription
app.post('/subscribe', (req, res) => {
    const { email } = req.body;
    // Save email to DB (MongoDB)
    res.json({ message: `Subscribed: ${email}` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
