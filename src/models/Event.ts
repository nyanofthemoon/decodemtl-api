interface EventWPACF {
    date         : string,
    time         : string,
    title        : string,
    description  : string,
    evenbrite_url: string,
    facebook_url : string
}

export interface EventWP {
    post_type: 'event'
    date     : string
    modified : string
    acf      : EventWPACF
}

export class Event
{
    id                : number
    createdAt         : string
    modifiedAt        : string
    title             : string
    description       : string
    evenbriteUrl      : string
    facebookUrl       : string

    constructor(eventwp : EventWP) {
        this.id              = eventwp.ID || eventwp.id
        this.createdAt       = eventwp.date
        this.modifiedAt      = eventwp.modified
        this.title           = eventwp.acf.title
        this.description     = eventwp.acf.description
        this.evenbriteUrl    = eventwp.acf.evenbrite_url
        this.facebookUrl     = eventwp.acf.facebook_url
    }
}