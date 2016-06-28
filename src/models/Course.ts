import * as Models from './'

interface CourseWPACF {
    custom_layout     : string
    custom_layout_data: string
    technologies      : Array<Models.TechnologyWP>
    faq               : Array<Models.FaqItem>
    curriculum        : Array<Models.CurriculumUnit>
    instructor        : Array<Models.StaffWP>
    sessions          : Array<Models.SessionWP>
    visible           : boolean
}

export interface CourseWP {
    post_type: 'course'
    date     : string
    modified : string
    title    : { rendered: string }
    slug_en  : string
    slug_fr  : string
    acf      : CourseWPACF
}

export class Course
{
    id              : number
    createdAt       : string
    modifiedAt      : string
    title           : string
    slug            : Object
    customLayout    : string
    customLayoutData: string
    visible         : boolean
    faq             : Array<Models.FaqItem>
    curriculum      : Array<Models.CurriculumUnit>
    technology      : Array<Models.Technology>
    instructor      : Array<Models.Staff>
    session         : Array<Models.Session>

    constructor(coursewp : CourseWP) {
        this.id               = coursewp.ID || coursewp.id
        this.createdAt        = coursewp.date
        this.modifiedAt       = coursewp.modified
        this.title            = coursewp.title.rendered
        this.slug             = {
            en: coursewp.slug_en,
            fr: coursewp.slug_fr
        }
        this.customLayout     = coursewp.acf.custom_layout
        this.customLayoutData = coursewp.acf.custom_layout_data
        this.visible          = coursewp.acf.visible
        this.technology       = coursewp.acf.technologies.map(function(technology) { return new Models.Technology(technology) })
        this.faq              = coursewp.acf.faq
        this.curriculum       = coursewp.acf.curriculum
        this.instructor       = coursewp.acf.instructor.map(function(staff) { return new Models.Staff(staff) })
        this.session          = coursewp.acf.sessions.map(function(session) { return new Models.Session(session) })
    }
}