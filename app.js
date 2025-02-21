const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// POST Endpoint for /bfhl
app.post("/bfhl", (req, res) => {
    const { fullName, dob, email, roll_number, data } = req.body;
    if (!fullName || !dob || !email || !roll_number || !data) {
        return res.status(400).json({ is_success: false, message: "Missing required fields" });
    }
    
    // Generate user_id
    const userId = `${fullName.replace(/\s+/g, '_').toLowerCase()}_${dob}`;
    
    // Separate numbers and alphabets from data array
    const numbers = data.filter(item => typeof item === "number" || /^[0-9]+$/.test(item));
    const alphabets = data.filter(item => typeof item === "string" && /^[a-zA-Z]$/.test(item));
    
    // Determine the highest alphabet (case insensitive)
    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? -1 : 1)[0]] : [];
    
    res.json({
        is_success: true,
        user_id: userId,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

// GET Endpoint for /bfhl
app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

