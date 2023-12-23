const RegisterModel = require("../model/registerModel");

const EditProfile = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, phoneNumber } = req.body;
  const edit = await RegisterModel.findById(id);
  if (!edit) {
    return res.send("Cannot edit your profile");
  }

  try {
    const editData = await RegisterModel.findByIdAndUpdate(
      id,
      {
        $set: {
          firstName: firstName || editData.firstName,
          lastName: lastName || editData.lastName,
          phoneNumber: phoneNumber || editData.phoneNumber,
        },
      },
      { new: true }
    );
    res.send("Profile updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = EditProfile;
