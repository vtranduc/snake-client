const singleMove = function(direction, conn) {
    return conn.write(`Move: ${direction}`);
};

module.exports = {singleMove};