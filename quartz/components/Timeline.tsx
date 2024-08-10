import { htmlToJsx } from "../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
 
const Timeline: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
    const content = htmlToJsx(fileData.filePath!, tree)
    const classes: string[] = fileData.frontmatter?.cssclasses ?? []
    if(fileData.text?.includes('without a domain'))
    {
      const timelineStart = fileData.text?.indexOf('<div xmlns="http://www.w3.org/1999/xhtml">');
      const timelineAct = <div dangerouslySetInnerHTML={{__html: fileData.text?.substring(timelineStart)}}></div>

      fileData.text = fileData.text.substring(0,timelineStart)

      //return timelineAct
      return <p>Has Timeline</p>
    }
 
    return <p>No Timeline</p>
  }

export default (() => Timeline) satisfies QuartzComponentConstructor