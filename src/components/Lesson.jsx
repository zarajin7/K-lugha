import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
function Lesson() {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "lessons"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setLessons((prev) => [...prev, doc.data()]);
      });
    })();
  }, []);
  return (
    <div className="text-center mx-auto border ">
      <div className="text-2xl font-semibold ">
        <h1>Learn the luo language</h1>
      </div>
      <p>There are up to five basics things you will learn bedgi hawi maber!</p>

      <div className="border mx-28 bg-slate-500">
        <h2>Lesson 1:Introduction</h2>

        {lessons.map((lesson) => {
          return (
            <div>
              <h2>{lesson.title}</h2>
              <div>
                {lessons &&
                  lesson.lessons.map((item) => {
                    return (
                      <div>
                        <p>{item}</p>
                        <audio
                          controls
                          type="audio/mp3"
                        >
                          <source src={`https://api.voicerss.org/?key=09de7da75ed446179aa0cb79b7677254&hl=en-us&src=${item}`}/>
 
                        </audio>
                        {/*                           src={`https://api.voicerss.org/?key=c6c62d5c4548485dbe4407f481ce44c6&hl=en-us&src=${item}`}
 */}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
      {console.log(lessons)}
      <div className="border mx-28 bg-slate-500">
        <h2>Lesson 2:basics</h2>
        <div>@1</div>
        <div>@2</div>
        <div>@3</div>
        <div>@4</div>
        <div>@5</div>
        <div>@6</div>
        <div>@7</div>
        <div>@8</div>
        <div>@9</div>
        <div>@10</div>
      </div>

      <div className="border mx-28 bg-slate-500">
        <h2>Lesson 3:Getting good </h2>
        <div>@1</div>
        <div>@2</div>
        <div>@3</div>
        <div>@4</div>
        <div>@5</div>
        <div>@6</div>
        <div>@7</div>
        <div>@8</div>
        <div>@9</div>
        <div>@10</div>
      </div>

      <div className="border mx-28 bg-slate-500">
        <h2>Lesson 4:Almost done</h2>
        <div>@1</div>
        <div>@2</div>
        <div>@3</div>
        <div>@4</div>
        <div>@5</div>
        <div>@6</div>
        <div>@7</div>
        <div>@8</div>
        <div>@9</div>
        <div>@10</div>
      </div>

      <div className="border mx-28 bg-slate-500">
        <h2>Lesson 5:Wow! you are done whith this part</h2>
        <div>@1</div>
        <div>@2</div>
        <div>@3</div>
        <div>@4</div>
        <div>@5</div>
        <div>@6</div>
        <div>@7</div>
        <div>@8</div>
        <div>@9</div>
        <div>@10</div>
      </div>
    </div>
  );
}

export default Lesson;
