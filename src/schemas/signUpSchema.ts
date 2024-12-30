import {z} from 'zod';

export const usernameValidation = z 
.string()
.min(2,"Username must be at least 2 character")
.max(20,"Username must be no more  than 20 character")
.regex(/^[a-zA-Z0-9_]+$/ , "Username must not contain special character")

export const signupSchema = z.object({
    username: usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6,{message:"Min 6 character required"})
})