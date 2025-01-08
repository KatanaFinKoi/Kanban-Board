import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo), // Send the user info as a JSON string
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    return data; // Handle the response data as needed
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Handle the error as needed
  }
};

export { login };

