const path = jest.genMockFromModule("path");

path.resolve = (...pathSegment) => ["base-path", ...pathSegment].join("/");

module.exports = path;
