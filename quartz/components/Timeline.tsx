import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
 
export default (() => {
  function Timeline(props: QuartzComponentProps) {
    if(props.fileData.text?.includes('<div class="timeline">'))
    {
      
      const timelineStart = props.fileData.text?.indexOf('<div xmlns="http://www.w3.org/1999/xhtml">');
      const timelineAct = <div dangerouslySetInnerHTML={{__html: props.fileData.text?.substring(timelineStart)}}></div>

      props.fileData.text = props.fileData.text.substring(0,timelineStart)

      return timelineAct
    }
 
    return <p>No Timeline</p>
  }
 
  return Timeline
}) satisfies QuartzComponentConstructor
