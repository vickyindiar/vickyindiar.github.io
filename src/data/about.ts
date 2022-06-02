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
        desc:'Hi, I\'m Vicky Indiarto from Bekasi, Indonesia. I have a Bechelor of System Information degree from Gunadarma University.'+
             ' I mostly focus on web development, but i have hight spirit to keep learn on mobile Application and Desktop Application '
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
        title: 'Work Experiance',
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
