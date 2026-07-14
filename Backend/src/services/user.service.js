import User from "../models/user.model.js";

async function findOrCreateUser(decoded) {
  const existingUser = await User.findOne({ firebaseUid: decoded.uid });
  if (existingUser) {
    return existingUser;
  }

  const newUser = User.create({
    firebaseUid: decoded.uid,
    email: decoded.email,
    displayName: decoded.name,
    photoURL: decoded.picture,
    emailVerified: decoded.email_verified,
  });

  return newUser;
}

export default findOrCreateUser;
