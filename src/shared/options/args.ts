import { ParseArgsConfig } from "node:util";

export const allArgOptions = {
	access: { type: "string" },
	author: { type: "string" },
	base: { type: "string" },
	description: { type: "string" },
	directory: { type: "string" },
	email: { type: "string" },
	"email-github": { type: "string" },
	"email-npm": { type: "string" },
	"exclude-all-contributors": { type: "boolean" },
	"exclude-compliance": { type: "boolean" },
	"exclude-lint-deprecation": { type: "boolean" },
	"exclude-lint-eslint": { type: "boolean" },
	"exclude-lint-jsdoc": { type: "boolean" },
	"exclude-lint-json": { type: "boolean" },
	"exclude-lint-knip": { type: "boolean" },
	"exclude-lint-md": { type: "boolean" },
	"exclude-lint-package-json": { type: "boolean" },
	"exclude-lint-packages": { type: "boolean" },
	"exclude-lint-perfectionist": { type: "boolean" },
	"exclude-lint-regex": { type: "boolean" },
	"exclude-lint-spelling": { type: "boolean" },
	"exclude-lint-strict": { type: "boolean" },
	"exclude-lint-stylistic": { type: "boolean" },
	"exclude-lint-yml": { type: "boolean" },
	"exclude-releases": { type: "boolean" },
	"exclude-renovate": { type: "boolean" },
	"exclude-tests": { type: "boolean" },
	funding: { type: "string" },
	keywords: { multiple: true, type: "string" },
	logo: { type: "string" },
	"logo-alt": { type: "string" },
	mode: { type: "string" },
	offline: { type: "boolean" },
	owner: { type: "string" },
	repository: { type: "string" },
	"skip-all-contributors-api": { type: "boolean" },
	"skip-github-api": { type: "boolean" },
	"skip-install": { type: "boolean" },
	"skip-removal": { type: "boolean" },
	"skip-restore": { type: "boolean" },
	"skip-uninstall": { type: "boolean" },
	title: { type: "string" },
} as const satisfies ParseArgsConfig["options"];