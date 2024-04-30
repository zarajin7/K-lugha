import Lesson from "../components/Lesson"
import Lessons from "../components/Lessons"
import Lessonkamba from "../components/Lessonkamba" 
import Lessonkikuyu from "../components/Lessonkikuyu"
import Lessonkisii from "../components/Lessonkisii"
import Lessonnubian from "../components/Lessonnubian"
import Lessonmasai from "../components/Lessonmasai"
function Lessonpage(){

  // const options = {
  //   method: 'POST',
  //   mode:'no-cors',
  //   headers: {
  //     accept: 'audio/mpeg',
  //     'content-type': 'application/json',
  //     AUTHORIZATION: '4cbc649e1d194261b3a767ee06ceccae',
  //     'X-USER-ID': 'Z0CELc8EyBeALDlZiUpv3BxOs0h1'
  //   },
  //   body: JSON.stringify({
  //     text: 'Hello from a realistic voice.',
  //     voice: 's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
  //     output_format: 'mp3'
  //   })
  // };
  
  // function handleAudio() {
  //   fetch("https://api.play.ht/api/v2/tts/stream", options)
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // }
  
    return(
      <div  >
        {/* <button onClick={handleAudio}>Click Me</button> */}
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