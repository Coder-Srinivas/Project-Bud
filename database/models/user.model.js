const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      dropDups: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      dropDups: true,
    },

    picture: {
      type: String,
    },

    interests: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

// Generates a profile by removing sensitive information
UserSchema.methods.getPublicProfile = function () {
  const user = this.toObject();
  return user;
};

UserSchema.statics.findByCredentials = async ({ email }) => {
  const user = await User.findOne({ email });
  return user;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
