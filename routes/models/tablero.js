const { Schema, model } = require("mongoose")
const tableroLock = require('./sub/tablero-lock')

const tablero = new Schema({
	// _id:String,
	title: String,
	description: String,
	stars: Number,
	hiden: { type: Boolean, default: false },
	lock: { type: tableroLock, default:tableroLock },
	date:{
		created_at: { type:Date },
		updated_at: { type:Date },
	}
},{ versionKey:false })


module.exports = model("Tablero", tablero)
