const mongoose = require("mongoose")

let lockTablero = new mongoose.Schema({
	state:{ type:Boolean, default:false },
	disable:{ type:Boolean, default:false },
	password:String,
	resetPassword:String,
	disableTime:String,
	date:{
		created_at: { type:Date },
		updated_at: { type:Date },
	}
},{ _id: false, versionKey:false })

module.exports = lockTablero
