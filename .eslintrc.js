module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended', 
		'plugin:react/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: [
		'react'
	],
	rules: {
		'array-bracket-spacing': 1,
		'comma-spacing': [1, { 'before': false, 'after': true }],
		'comma-style': [1, 'last'],
		'indent': [1, 'tab'],
		'jsx-quotes': [1, 'prefer-single'],
		'semi': [1, 'always'],
		"no-unused-vars": "off",
		'react/prop-types': ['off'],
		'react/display-name': ['off'],
		'react/no-unescaped-entities': ['off'],
		'no-else-return': 'warn',
		'no-unneeded-ternary': 'warn',
		'no-useless-return': 'warn',
		'no-var': 'warn',
		'one-var': ['warn', 'never'],
		'prefer-arrow-callback': 'warn',
		yoda: ['warn', 'never', { exceptRange: true }],
	},
};