import { cn } from "@/lib/utils";
import axios from "axios";

interface Step {
  title: string;
  description: string;
  isDone: boolean;
}

interface ParamsProps {
  params: { id: string };
}

const CourseDetails = async ({ params }: ParamsProps) => {
  console.log(params.id);
  const id = params.id;

  const response = await axios.get("http://localhost:3000/api/lab", {
    params: {
      id: id,
    },
  });
  console.log(response.data);
  const stepData = response.data.lab.steps;
  console.log(stepData);

  return (
    <div className="p-8 bg-slate-900 min-h-screen">
      <h1 className="text-white text-2xl mb-4">Steps</h1>
      {stepData.map((item: Step) => (
        <div
          key={item.title}
          className={cn(
            "p-4 border rounded-md my-4",
            item.isDone ? "bg-green-500 text-white" : "bg-slate-800 text-white"
          )}
        >
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-sm mt-2">{item.description}</p>
          <span
            className={cn(
              "inline-block mt-4 px-2 py-1 rounded",
              item.isDone ? "bg-green-700" : "bg-slate-600"
            )}
          >
            {item.isDone ? "Completed" : "In Progress"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
