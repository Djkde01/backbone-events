import { model, models, Schema } from "mongoose";

const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String},
    imageUrl: { type: String, required: true },
    startDateTime: { type: Date, required: true, default: Date.now },
    endDateTime: { type: Date, required: true, default: Date.now },
    location: { type: String},
    price: { type: Number, required: true, default: 0 },
    currency : { type: String, required: true, default: "USD" },
    isFree: { type: Boolean, required: true, default: true },
    url: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category"},
    organizer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
