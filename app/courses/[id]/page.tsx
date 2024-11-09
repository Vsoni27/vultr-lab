import { cn } from "@/lib/utils";
import axios from "axios";

interface Props {
  title: string;
  description: string;
  isDone: boolean;
}

interface ParamsProps {
  params: {id : string}
}

const CourseDetails = async ({params}: ParamsProps) =>{
  console.log(params.id);
  const id = params.id;


  const stepData = await axios.get("/api/lab", {
    params: {
      id: params.id
    }
  });
  console.log(stepData);


  // const fetchStepData = async () => {
  //   if (id) {
  //     const response = await fetch("/api/lab", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ id: id }),
  //     });
  //     const data = await response.json();
  //   }
  // };

  // fetchStepData();



  return (
    <div className="p-8 bg-slate-900 min-h-screen">
      <h1 className="text-white text-2xl mb-4">Steps</h1>
      {/* <div
        className={cn(
          "p-4 border rounded-md",
          stepData.isDone ? "bg-green-500 text-white" : "bg-slate-800 text-white"
        )}
      >
        <h2 className="text-lg font-semibold">{stepData.title}</h2>
        <p className="text-sm mt-2">{stepData.description}</p>
        <span
          className={cn(
            "inline-block mt-4 px-2 py-1 rounded",
            stepData.isDone ? "bg-green-700" : "bg-slate-600"
          )}
        >
          {stepData.isDone ? "Completed" : "In Progress"}
        </span>
      </div> */}
    </div>
  );
}

export default CourseDetails;
