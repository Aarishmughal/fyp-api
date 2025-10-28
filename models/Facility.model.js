const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema(
  {
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    displayName: { type: String, required: true },
    kind: {
      type: String,
      enum: ['hospital', 'clinic', 'lab', 'ward'],
      default: 'clinic',
    },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    address: { type: String },
    geo: { type: Object }, // { lat, lng }
    nurse: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Nurse' }],
  },
  { timestamps: true }
);

facilitySchema.index({ tenant: 1, displayName: 1 }, { unique: true });

const Facility = mongoose.model('Facility', facilitySchema);

module.exports = Facility;
