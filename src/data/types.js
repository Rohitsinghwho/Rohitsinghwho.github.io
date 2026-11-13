/**
 * @typedef {Object} PersonalInfo
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} role
 * @property {string} accent  word(s) in the hero heading shown in green
 * @property {{ city: string, country: string, flag: string, region: string }} location
 * @property {string} tagline
 * @property {string} portraitUrl
 * @property {{ linkedin: string, github: string, instagram: string, twitter: string }} socials
 */

/**
 * @typedef {Object} Highlight
 * @property {string} word
 * @property {"green"|"blue"|"red"|"purple"|"aqua"|"yellow"} color
 */

/**
 * @typedef {Object} AboutParagraph
 * @property {number} id
 * @property {string} text
 * @property {Highlight[]} highlights
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} name
 * @property {string[]} tags
 * @property {number} year
 * @property {string} description
 * @property {{label:string,hl?:boolean,danger?:boolean}[]} flow
 * @property {string[]} features
 * @property {string} code
 * @property {string} status
 * @property {string} [liveUrl]
 * @property {string} [sourceUrl]
 * @property {string} [screenshotUrl]
 */

/**
 * @typedef {Object} Testimonial
 * @property {number} id
 * @property {string} quote
 * @property {string} authorName
 * @property {string} authorTitle
 * @property {string} [avatarUrl]
 */
export {};
