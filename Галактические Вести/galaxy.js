module.exports = function (input) {
  var re1 = new RegExp('\\b[A-Z]{2,8}-\\d{2,8}\\/[A-Z]([A-Z]+-?)+[A-Z]\\/((?!\\S*UNDEFINED)[A-Z]+)\\:\\{.*\\}');

  var res = input.filter((x) => x.match(re1));

  var re2 = new RegExp('@(?<fake>[^@]+)@', 'g');

  var result = res.map((x) => x.replace(re2, '<fake>$<fake></fake>'));

  return result;
};
