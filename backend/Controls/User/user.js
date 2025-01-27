
const userModel = require('../../Models/userModel/userModel')
const bcrypt = require('bcrypt');




exports.userRegistration = async (req, res) => {

    try {
        const { fname, lname, email, password, cpassword } = req.body;

        // Validate input fields
        if (!fname || !lname || !email || !password || !cpassword) {
            return res.status(400).send('All fields are required');
        }

        if (password !== cpassword) {
            return res.status(400).send('Passwords do not match');
        }

      

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user in the database
        const userCreation = await userModel.create({
            fname,
            lname,
            email,
            password: hashedPassword, // Store the hashed password
        });

        if (userCreation) {
            return res.status(201).send('User created successfully');
        } else {
            return res.status(500).send('User creation failed');
        }
    } catch (error) {
        console.error('Error during user registration:', error);
        return res.status(500).send('An error occurred during user registration');
    }
};



exports.userLogin = async (req, res) => {
    const { username, password } = req.body;

    // Check if both username and password are provided
    if (!username || !password) {
        return res.status(400).send('Invalid Details');
    }

    try {
        // Find user by username
        const user = await userModel.findOne({ fname: username });
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Compare passwords
        const checkpass = await bcrypt.compare(password, user.password);
        if (!checkpass) {
            return res.status(201).send('Invalid Credential');
        }

        // Successful login
        return res.status(200).send('Successfully logged in');
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).send('Internal Server Error');
    }
};