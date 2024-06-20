import { Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    // const newUser = new User({ username, email, password: hashedPassword });
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json('User registered!');
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json('Error: ' + err.message);
      console.log(err.message);
    } else {
      res.status(400).json('An unknown error occurred');
    }
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json('Invalid credentials');
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json('Invalid credentials');
      return;
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json('Error: ' + err.message);
    } else {
      res.status(400).json('An unknown error occurred');
    }
  }
};
