import axios from "axios";

export async function loginUser(email, password) {
  const res = await axios.post("/user/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
}

export async function signupUser(name, email, password) {
  const res = await axios.post("/user/signup", { name, email, password });
  if (res.status !== 201) {
    throw new Error("Unable to Signup");
  }
  const data = await res.data;
  return data;
}

export async function checkAuthStatus() {
  const res = await axios.get("/user/auth-status");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  const data = await res.data;
  return data;
}

// export async function sendChatRequest(message) {
//   const res = await axios.post("/chat/new", { message });
//   if (res.status !== 200) {
//     throw new Error("Unable to send chat");
//   }
//   const data = await res.data;
//   return data;
// }

// export async function getUserChats() {
//   const res = await axios.get("/chat/all-chats");
//   if (res.status !== 200) {
//     throw new Error("Unable to send chat");
//   }
//   const data = await res.data;
//   return data;
// }

// export async function deleteUserChats() {
//   const res = await axios.delete("/chat/delete");
//   if (res.status !== 200) {
//     throw new Error("Unable to delete chats");
//   }
//   const data = await res.data;
//   return data;
// }

export async function logoutUser() {
  const res = await axios.get("/user/logout");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
}
