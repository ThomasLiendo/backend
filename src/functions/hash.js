const hash = (value) => {
  var hashCode = BigInt(0x811c9dc5);

  for (let i = 0; i < value.length; i++) {
    hashCode ^= BigInt(value.charCodeAt(i));
    hashCode *= BigInt(0x1000193);
    hashCode &= BigInt(0xffffffff);
  }
  while (hash.toString(16).length < 8) {
    hashCode = "0" + hash.toString(16);
  }
  return hash.toString(16);
};

module.exports = hash;
