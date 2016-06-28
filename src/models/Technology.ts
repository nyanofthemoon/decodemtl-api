interface TechnologyWPACF {
    icon          : string
    name_en       : string
    name_fr       : string
    description_en: string
    description_fr: string
}

export interface TechnologyWP {
    post_type    : 'technology'
    post_date    : string
    post_modified: string
    acf          : TechnologyWPACF
}

export class Technology
{
    id         : number
    createdAt  : string
    modifiedAt : string
    name       : Object
    description: Object

    constructor(technologywp : TechnologyWP) {
        this.id          = technologywp.ID || technologywp.id
        this.createdAt   = technologywp.post_date
        this.modifiedAt  = technologywp.post_modified
        this.name        = {
            en: technologywp.acf.name_en,
            fr: technologywp.acf.name_fr
        }
        this.description = {
            en: technologywp.acf.description_en,
            fr: technologywp.acf.description_fr
        }
    }
}
