function charIsLetter(char) {
  if (typeof char !== "string") {
    return false;
  }

  return /^[a-zA-Z]+$/.test(char);
}

exports.getData = async (req, res, next) => {
  try {
    data = await req.body;
    const numberArray = data.data.filter((item) => +item);
    const alphabetArray = data.data.filter((item) => charIsLetter(item));
    const totalCount = numberArray.length + alphabetArray.length;
    res.status(200).json({
      is_success: true,
      user_id: "Siddhant_Bhalla_03122000 ",
      count: totalCount.toString(),
      email: "siddhant.bhalla.btech2019@sitpune.edu.in",
      roll_number: "19070124062",
      numbers: numberArray,
      alphabets: alphabetArray,
    });
  } catch (error) {
    res.json({ is_success: false });
    error.statusCode = 500;
    throw error;
  }
};
