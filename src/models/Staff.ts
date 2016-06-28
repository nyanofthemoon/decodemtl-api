interface StaffWPACF {
    first_name          : string
    last_name           : string
    contact_email       : string
    gravatar_email      : string
    github_url          : string
    personal_website_url: string
    responsibilities    : string
    phone_number        : string
    emergency_contact   : string
    bio_en              : string
    bio_fr              : string
}

export interface StaffWP {
    post_type    : 'staff'
    post_date    : string
    post_modified: string
    acf          : StaffWPACF
}

export class Staff
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
    responsibilities  : string
    bio               : Object

    constructor(staffwp : StaffWP) {
        this.id                 = staffwp.ID || staffwp.id
        this.createdAt          = staffwp.post_date
        this.modifiedAt         = staffwp.post_modified
        this.firstName          = staffwp.acf.first_name
        this.lastName           = staffwp.acf.last_name
        this.contactEmail       = staffwp.acf.contact_email
        this.gravatarEmail      = staffwp.acf.gravatar_email
        this.githubUrl          = staffwp.acf.github_url
        this.personalWebsiteUrl = staffwp.acf.personal_website_url
        this.responsibilities   = staffwp.acf.responsibilities
        this.bio                = {
            en: staffwp.acf.bio_en,
            fr: staffwp.acf.bio_fr
        }
    }

}