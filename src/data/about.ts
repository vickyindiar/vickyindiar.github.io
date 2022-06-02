interface IAAbout{ type:string, title:string }
export interface IDescEdu { year:string, majority:string, GPA?:string, name:string }
export interface IDescWork { year:string, name:string, on:string, desc:string }
export interface IDescHobbies { name: string, desc:string, icon:string}

export interface IAbout  {
    type: string,
    title: string,
    desc: IDescEdu[] | IDescWork[] | IDescHobbies[] | null | any
}

const about: IAbout[] = [
    {
        type:'intro',
        title: 'ME',
        desc:'I love spending time on fixing small details and optimizing what I create. and I also have an interest for new technologies.'+
            ' As you already know, if you are interested in programming then you will never stop learning. '+
            ' And also I like working in a team, you will learn faster and much more, As the saying goes: "two heads are better than one" '
    },
    {
        type: 'edu',
        title: 'Education',
        desc:[
            {year: '2007 - 2010', majority:'Technique Audio Video', GPA:'', name:'SMK Taruna Bangsa'},
            {year: '2010 - 2015', majority:'S1 System Information', GPA:' 3.01/4.00', name:'Gunadarma University'},
        ]
    },
    {
        type: 'work',
        title: 'Work Experience',
        desc:[
            {year: '2016 - Present', name: 'Software Developer', on:'PT. Epsylon Citra Informatika', desc:''},
            {year: '05 - 12 2014', name: 'Wirehouse Administration', on:'PT. Simpur Makmur', desc:''}
        ]
    },
    {
        type:'hobbies',
        title:'Hobbies',
        desc:[
            {name: 'Games', desc:'PC and Mobile Games', icon:''},
            {name: 'Music', desc:'Listen Music and Play Ukulele', icon:''},
            {name: 'Coding', desc:'Code Anything', icon:''},
        ]
    }

]
export default about
