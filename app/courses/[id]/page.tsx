import CourseDetails from "@/components/CourseDetails";
import axios from "axios";

interface Step {
  title: string;
  description: string;
  isDone: boolean;
}

interface ParamsProps {
  params: { id: string };
}

const CourseDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  // Fetch data on the server side
  const response = await axios.get("http://localhost:3000/api/lab", {
    params: { id },
  });

  const steps: Step[] = response.data.lab.steps;

  return <CourseDetails steps={steps} courseId={id} />;
};

export default CourseDetailsPage;
