/* app.post("/api/student", upload.single("picture"), async (req, res) => {
  try {
    const hashedPassword = hashSync(req.body.password, 10);
    const student = new Student({
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      idNumber: req.body.idNumber,
      registrationNumber: req.body.registrationNumber,
      picture: req.file.filename,
      nationality: req.body.nationality,
      birthDate: req.body.birthDate,
      email: req.body.email,
      address: req.body.address,
      number: req.body.number,
      password: hashedPassword,
      group: req.body.group,
    });
    console.log(student);
    await student.save();
    res.status(201).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
});
 */