interface SessionWPACF {
    price      : string,
    start_date : string,
    end_date    : string,
    schedule_en: string,
    schedule_fr: string,
    notes_en   : string,
    notes_fr   : string,
    visible    : boolean
}

export interface SessionWP {
    post_type    : 'session'
    post_date    : string
    post_modified: string
    acf          : SessionWPACF
}

export class Session
{
    id        : number
    createdAt : string
    modifiedAt: string
    price     : string
    startDate : string
    endDate   : string
    schedule  : Object
    notes     : Object
    visible   : boolean

    constructor(sessionwp : SessionWP) {
        this.id              = sessionwp.ID || sessionwp.id
        this.createdAt       = sessionwp.post_date
        this.modifiedAt      = sessionwp.post_modified
        this.price           = sessionwp.acf.price
        this.startDate       = sessionwp.acf.start_date
        this.endDate         = sessionwp.acf.end_date
        this.schedule           = {
            en: sessionwp.acf.schedule_en,
            fr: sessionwp.acf.schedule_fr
        }
        this.notes           = {
            en: sessionwp.acf.notes_en,
            fr: sessionwp.acf.notes_fr
        }
        this.visible = sessionwp.acf.visible
    }
}