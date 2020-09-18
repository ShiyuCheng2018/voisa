module.exports = {
    root: true,
    extends: [
        "@react-native-community/eslint-config",
        "eslint-config-prettier",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
        "prettier/prettier": 0,
    },
};
