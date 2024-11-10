"use client";

import { cn } from "@/lib/utils";
import axios from "axios";
import { useState } from "react";

interface Step {
  title: string;
  description: string;
  isDone: boolean;
}

interface CourseDetailsProps {
  steps: Step[];
  courseId: string;
}

const CourseDetails = ({ steps: initialSteps, courseId }: CourseDetailsProps) => {
  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [loading, setLoading] = useState(false);

  const handleToggleStep = async (index: number) => {
    try {
      setLoading(true);

      const updatedSteps = [...steps];
      updatedSteps[index].isDone = !updatedSteps[index].isDone;
      setSteps(updatedSteps);

      await axios.put("http://localhost:3000/api/lab", {
        id: courseId,
        steps: updatedSteps,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-8 bg-slate-900 min-h-screen">Loading...</div>;
  }

  return (
    <div className="p-8 bg-slate-900 min-h-screen">
      <h1 className="text-white text-2xl mb-4">Steps</h1>
      {steps.map((item, index) => (
        <div
          key={item.title}
          className={cn(
            "p-4 border rounded-md my-4 flex items-center",
            item.isDone ? "bg-green-500 text-white" : "bg-slate-800 text-white"
          )}
        >
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => handleToggleStep(index)}
            className="mr-4 p-16"
          />
          <div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
