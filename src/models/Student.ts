interface StudentWPACF {
    first_name          : string
    last_name           : string
    contact_email       : string
    gravatar_email      : string
    dob                 : string
    phone_number        : string
    emergency_contact   : string
    personal_website_url: string
    twitter_handle      : string
    github_url          : string
    stack_overflow_url  : string
    medium_url          : string
    linkedin_url        : string
    referred_by         : string
}

export interface StudentWP {
    post_type: 'student'
    date     : string
    modified : string
    acf      : StudentWPACF
}

export class Student
{
    id                : number
    createdAt         : string
    modifiedAt        : string
    firstName         : string
    lastName          : string
    contactEmail      : string
    gravatarEmail     : string
    githubUrl         : string
    personalWebsiteUrl: string
    twitterHandle     : string
    stackOverflowUrl  : string
    mediumUrl         : string
    linkedinUrl       : string

    constructor(studentwp : StudentWP) {
        this.id                 = studentwp.ID || studentwp.id
        this.createdAt          = studentwp.date
        this.modifiedAt         = studentwp.modified
        this.firstName          = studentwp.acf.first_name
        this.lastName           = studentwp.acf.last_name
        this.contactEmail       = studentwp.acf.contact_email
        this.gravatarEmail      = studentwp.acf.gravatar_email
        this.githubUrl          = studentwp.acf.github_url
        this.personalWebsiteUrl = studentwp.acf.personal_website_url
        this.twitterHandle      = studentwp.acf.twitter_handle
        this.stackOverflowUrl   = studentwp.acf.stack_overflow_url
        this.mediumUrl          = studentwp.acf.medium_url
        this.linkedinUrl        = studentwp.acf.linkedin_url
    }
}