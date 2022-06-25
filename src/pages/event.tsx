import { gql, useQuery } from "@apollo/client";
import { Header } from "../components/header"
import { Lesson } from "../components/lesson"
import { Sidebar } from "../components/sidebar"
import { Video } from "../components/video"
import { ILesson } from "../interfaces/lesson";

const GET_LESSONS_QUERY = gql`
    query{
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            slug
            title
            lessonType
            availableAt
        }
    }
`;
interface GetLessonsQueryResponse{
    lessons: ILesson[];
}


export function Event() {
    const {data} = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
  return (
    <>
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar>
            {data?.lessons.map((lesson) => (
                <Lesson 
                    key={lesson.id}
                    availableAt={new Date(lesson.availableAt)}
                    slug={lesson.slug}
                    title={lesson.title}
                    lessonType={lesson.lessonType}
                />
            ))}
        </Sidebar>
      </main>
    </>
  )
}
