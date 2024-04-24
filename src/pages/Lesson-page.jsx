import Lesson from "../components/Lesson"
import Lessons from "../components/Lessons"
import Lessonkamba from "../components/Lessonkamba" 
import Lessonkikuyu from "../components/Lessonkikuyu"
import Lessonkisii from "../components/Lessonkisii"
import Lessonnubian from "../components/Lessonnubian"
import Lessonmasai from "../components/Lessonmasai"
function Lessonpage(){
    return(
      <div  >
<Lessons/>
<Lesson/>
<Lessonkamba/>
<Lessonkikuyu/>
<Lessonkisii/>
<Lessonnubian/>
<Lessonmasai/>
      </div>
    )
}

export default Lessonpage