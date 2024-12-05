const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "A user must have a first name"],
      },
    lastname: {
        type: String,
        required: [true, "A user must have a last name"],
    },
    email: {
        type: String,
        required: [true, 'A user must have an email id'],
        unique: [true, 'A user email must be unique'],
        lowercase: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
      type: String,
      required: true,
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
})

UserSchema.pre("save", async function(next) {
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

UserSchema.methods.isValidPassword = async function (
    currentPassword,
    storedUserPassword
  ) {
    return await bcrypt.compare(currentPassword, storedUserPassword);
}

const User = mongoose.Model("User", UserSchema)

module.exports = User