import { z } from "zod";

// ✅ 1️⃣ Defining a Zod schema
const userSchema = z.object({
  name: z.string(),  // Name must be a string
  age: z.number(),   // Age must be a number
});

// ✅ 2️⃣ Using Zod inference to create a TypeScript type
type User = z.infer<typeof userSchema>;

// ✅ 3️⃣ TypeScript now understands this type!
const user: User = {
  name: "Alice",
  age: 25, // ✅ Correct
};

// ❌ TypeScript will throw an error if the type is incorrect
const invalidUser: User = {
  name: "Bob",
  age: "twenty", // ❌ ERROR: age must be a number
};

// -----------------------------------------------
// 🔹 Zod inference with nested objects
// -----------------------------------------------
const userProfileSchema = z.object({
  id: z.number(),
  profile: z.object({
    username: z.string(),
    email: z.string().email(),
  }),
});

// 🔹 Inferring the TypeScript type from the schema
type UserProfile = z.infer<typeof userProfileSchema>;

// ✅ TypeScript now knows the correct structure
const userProfile: UserProfile = {
  id: 1,
  profile: {
    username: "john_doe",
    email: "john@example.com",
  },
};

// ❌ ERROR: id must be a number
const invalidUserProfile: UserProfile = {
  id: "1",
  profile: {
    username: "john_doe",
    email: "not-an-email", // ❌ ERROR: invalid email format
  },
};

// -----------------------------------------------
// 🔹 Zod inference with arrays
// -----------------------------------------------
const usersSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
  })
);

// 🔹 Inferring the TypeScript type from the array schema
type Users = z.infer<typeof usersSchema>;

// ✅ TypeScript understands that it's an array of objects
const users: Users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// ❌ ERROR: name must be a string
const invalidUsers: Users = [
  { id: 1, name: 123 }, // ❌ Type error
];

// -----------------------------------------------
// 🔹 Zod inference with optional and partial fields
// -----------------------------------------------
const userWithOptionalSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().optional(), // 👈 Email is optional
});

// 🔹 Inferred type from schema
type UserWithOptional = z.infer<typeof userWithOptionalSchema>;

// ✅ Valid examples
const validUser1: UserWithOptional = { id: 1, name: "John" }; // Email is missing but optional
const validUser2: UserWithOptional = { id: 2, name: "Jane", email: "jane@example.com" };

// ❌ ERROR: id and name are required
const invalidUserWithOptional: UserWithOptional = { email: "someone@example.com" };

// -----------------------------------------------
// 🔹 Zod inference in API requests (Example with Express)
// -----------------------------------------------
import express from "express";

const app = express();
app.use(express.json());

// ✅ Define schema for request body
const registerSchema = z.object({
  username: z.string(),
  password: z.string().min(6), // Password must have at least 6 characters
});

// ✅ Infer the TypeScript type from Zod schema
type RegisterData = z.infer<typeof registerSchema>;

// ✅ API route with validation
app.post("/register", (req, res) => {
  // Validate the request body
  const validation = registerSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({ error: validation.error.message });
  }

  // Use inferred type safely
  const data: RegisterData = validation.data;
  res.json({ message: "User registered!", data });
});

// -----------------------------------------------
// 🛠 Key Takeaways:
// -----------------------------------------------
// 1️⃣ `z.infer<typeof schema>` allows TypeScript to extract types from Zod schemas.
// 2️⃣ No need to manually define TypeScript types—Zod inference does it for you!
// 3️⃣ Works with objects, arrays, nested schemas, and optional fields.
// 4️⃣ Keeps APIs and frontend models in sync without extra effort.
