import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/timelines.scss"
import { htmlToJsx } from "../util/jsx"

export default (() =>{
  const Timeline: QuartzComponent = ({ displayClass, cfg  }: QuartzComponentProps) => {
    const content = htmlToJsx(fileData.filePath!, tree)
    const classes: string[] = fileData.frontmatter?.cssclasses ?? []
    let foundTimeline = <p>No Timeline</p>
    if(fileData.text?.includes('<div id="quarz-body">'))
    {
      const timelineStart = fileData.text?.indexOf('<div xmlns="http://www.w3.org/1999/xhtml">');
      const timelineAct = <div dangerouslySetInnerHTML={{__html: fileData.text?.substring(timelineStart)}}></div>
      fileData.text = fileData.text.substring(0,timelineStart)

      //return timelineAct
      foundTimeline = <p>Has Timeline</p>
    }
  }

  Timeline.css = style
  return Timeline
})satisfies QuartzComponentConstructor