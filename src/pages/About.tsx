import React, {FC, useMemo} from 'react';
import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Main from '../layouts/Main';
import { Accordion } from 'react-bootstrap';
import about, {IAbout, IDescEdu, IDescWork, IDescHobbies} from '../data/about';
import { Item } from 'react-bootstrap/lib/Breadcrumb';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdSchool } from 'react-icons/md'
import { FaBriefcase } from 'react-icons/fa'
import 'react-vertical-timeline-component/style.min.css';



// uses babel to load contents of file
// const markdown = raw('../data/about.md');

// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;
const Intro:FC<{item:IAbout, i:number}> = (props) => {
  return (
    <div className='row mb-5'>
       <p> {props.item.desc?.toString()} </p>
   </div>
  )
}

const Edu:FC<{item:IAbout, i:number}> = (props) => {
  return(
    <>
        <div className='row'> 
        <div> 
          <h3>{props.item.title}</h3>
        </div>
        </div>
          <hr />
        <div className='row'>
          <div className='col'>
            <VerticalTimeline  className='vt-component' lineColor='#fff'>
              {
                  props.item.desc.map((v:IDescEdu, index:number) => (
        
                    <VerticalTimelineElement 
                      icon={<MdSchool/>}
                      iconStyle={{ background: 'var(--primary-color)', color: '#fff' }} 
                      iconClassName={'vt-element-icon-class'}
                      date={v.year}
                      className="vertical-timeline-element--education" 
                     // contentArrowStyle={{backgroundColor:'rgb(227,227,227)'}}
                      contentStyle={{backgroundColor:'#F4F4F4'}}
                      key={`vertical_element_edit ${index}` }>
                      
                      <h3 className="vertical-timeline-element-title">{v.name}</h3>
                      <p className="vertical-timeline-element-subtitle">{v.majority}</p>
                      <p>
                        {v.GPA}
                      </p>
                    </VerticalTimelineElement>
                  )
                )
          
               }
            </VerticalTimeline>
          </div>
        </div>
    </>
  )
}


const Work:FC<{item:IAbout, i:number}> = (props) => {
  console.log(props.i,'work')
  return (
    <>
      <div className='row'> 
        <div> 
          <h3>{props.item.title}</h3>
        </div>
       </div>
          <hr />
        <div className='row'>
          <div className='col'>
            <VerticalTimeline lineColor='rgba(60,59,59,0.5)'>
              {
                  props.item.desc.map((v:IDescWork, index:number) => (
        
                    <VerticalTimelineElement 
                      icon={<FaBriefcase/>}
                      iconStyle={{ background: '#BD4B00', color: '#fff' }} 
                      date={v.year}
                      className="vertical-timeline-element--education" 
                     // contentArrowStyle={{backgroundColor:'rgb(227,227,227)'}}
                     contentStyle={{backgroundColor:'#F4F4F4'}}
                      key={`vertical_element_edit ${index}` }>
                      
                      <h3 className="vertical-timeline-element-title">{v.name}</h3>
                      <p className="vertical-timeline-element-subtitle">{v.on}</p>
                    </VerticalTimelineElement>
                  )
                )
          
               }
            </VerticalTimeline>
          </div>
        </div>
    </>
  )
}


// const MemoizeWork = useMemo(() => (<Work />), [])



const About:FC = () => (
  
  <Main title="About" description="Learn about Michael D'Angelo" >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
          <p>( describe me in  words)</p>
        </div>
      </header>
      <section className='accourdion_section'>
          <div className="accordion">
            {
              about.map((v:IAbout, i:number) => {
                if(v.type === 'intro'){
                    return  (<Intro key={`accr_item_${i}`} item={v} i={i} />) 
                }
                else if(v.type === 'edu'){
                  return (<Edu key={`accr_item_${i}`} item={v} i={i} />)
                }
                else if(v.type === 'work'){
                  return (<Work key={`accr_item_${i}`} item={v} i={i} />)
                }
              })
            }
          </div>
      </section>

      {/* <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      /> */}
    </article>
  </Main>
);
console.log('about')
export default React.memo(About);
